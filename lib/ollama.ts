const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'

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

Keep responses concise, educational, and engaging.`

export async function chatWithAI(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        stream: false,
      }),
    })

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.status}`)
    }

    const data: ChatResponse = await response.json()
    return data.message.content
  } catch (error) {
    console.error('Chat error:', error)
    return 'I apologize, but I encountered an error. Please try again in a moment.'
  }
}

export async function checkOllamaStatus(): Promise<boolean> {
  try {
    const response = await fetch(`${OLLAMA_BASE_URL}/api/tags`)
    return response.ok
  } catch {
    return false
  }
}
