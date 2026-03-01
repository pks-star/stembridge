const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
const OLLAMA_API_KEY = process.env.OLLAMA_API_KEY || ''
const OLLAMA_PROVIDER = process.env.OLLAMA_PROVIDER || 'local' // 'local' or 'cloud'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface ChatRequest {
  messages: ChatMessage[]
  subject?: string
  topic?: string
}

export interface ChatResponse {
  message: {
    role: 'assistant'
    content: string
  }
}

const SYSTEM_PROMPT = `You are STEMBridge, an AI tutor for Canadian students (ages 13-22).

RULES:
1. NEVER give direct answers - guide through questions
2. Use Socratic method: ask leading questions
3. Adapt to student's level (grade 9-12 or university)
4. Reference Canadian/Ontario curriculum
5. Break complex problems into steps
6. Encourage "productive struggle" - wait before hints
7. No homework completion - teach concepts
8. Be encouraging and patient
9. Use growth mindset language ("you haven't mastered this YET")
10. If student struggles >3 attempts, offer to explain a similar problem

CONTEXT:
- Ontario Curriculum: Math (MPM1D, MFM1P, MCR3U, etc.)
- Science: Physics (SPH3U), Chemistry (SCH3U), Biology (SBI3U)
- Coding: Python, JavaScript, HTML/CSS
- Financial Literacy for Canadians

Keep responses concise, educational, and engaging.`

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  
  if (OLLAMA_PROVIDER === 'cloud' && OLLAMA_API_KEY) {
    headers['Authorization'] = `Bearer ${OLLAMA_API_KEY}`
  }
  
  return headers
}

function getEndpoint(): string {
  if (OLLAMA_PROVIDER === 'cloud') {
    // OllamaCloud endpoint
    return 'https://api.ollama.cloud/v1/chat/completions'
  }
  // Local Ollama
  return `${OLLAMA_BASE_URL}/api/chat`
}

export async function chatWithAI(messages: ChatMessage[]): Promise<string> {
  try {
    const endpoint = getEndpoint()
    const isCloud = OLLAMA_PROVIDER === 'cloud'
    
    const body = isCloud ? {
      model: 'llama3.2',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      stream: false,
    } : {
      model: 'llama3',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      stream: false,
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Ollama error:', response.status, errorText)
      throw new Error(`Ollama error: ${response.status}`)
    }

    const data = await response.json()
    
    // Cloud returns in different format
    if (isCloud) {
      return data.choices?.[0]?.message?.content || data.message?.content || ''
    }
    
    return data.message.content
  } catch (error) {
    console.error('Chat error:', error)
    return 'I apologize, but I encountered an error. Please try again in a moment.'
  }
}

export async function checkOllamaStatus(): Promise<{ available: boolean; provider: string }> {
  try {
    if (OLLAMA_PROVIDER === 'cloud') {
      // Check cloud status
      const response = await fetch('https://api.ollama.cloud/v1/models', {
        headers: getHeaders(),
      })
      return { available: response.ok, provider: 'cloud' }
    }
    
    // Check local status
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`)
    return { available: response.ok, provider: 'local' }
  } catch {
    return { available: false, provider: OLLAMA_PROVIDER }
  }
}

// Stream chat for real-time responses
export async function* streamChatWithAI(messages: ChatMessage[]): AsyncGenerator<string> {
  const endpoint = getEndpoint()
  const isCloud = OLLAMA_PROVIDER === 'cloud'
  
  const body = isCloud ? {
    model: 'llama3.2',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ],
    stream: true,
  } : {
    model: 'llama3',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ],
    stream: true,
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Ollama error: ${response.status}`)
  }

  const reader = response.body?.getReader()
  const decoder = new TextDecoder()

  if (!reader) {
    throw new Error('No response body')
  }

  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    
    if (done) break
    
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      if (!line.trim() || !line.startsWith('{')) continue
      
      try {
        const data = JSON.parse(line)
        const content = isCloud 
          ? data.choices?.[0]?.delta?.content 
          : data.message?.content
        
        if (content) {
          yield content
        }
      } catch {
        // Skip parse errors for incomplete JSON
      }
    }
  }
}
