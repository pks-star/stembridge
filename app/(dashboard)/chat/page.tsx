'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, BookOpen, Sparkles } from 'lucide-react'
import { curriculum } from '@/data/curriculum/ontario'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const subjectEmojis: Record<string, string> = {
  math: '📐',
  physics: '⚡',
  chemistry: '🧪',
  biology: '🧬',
  coding: '💻',
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your STEMBridge AI tutor. I'm here to help you learn through questions, not answers. What would you like to work on today? You can choose a subject or ask me anything!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (in production, this would call Ollama)
    setTimeout(() => {
      const aiResponse = generateSocraticResponse(input)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }])
      setIsLoading(false)
    }, 1500)
  }

  const generateSocraticResponse = (question: string): string => {
    const lowerQ = question.toLowerCase()
    
    // Math-related questions
    if (lowerQ.includes('quadratic') || lowerQ.includes('equation')) {
      return `Great question about quadratic equations! Let me guide you through this.

Instead of just giving you the answer, let me ask you some questions:

1. What form is a quadratic equation typically written in? (Hint: think about the highest power of x)

2. If you have x² + 5x + 6 = 0, can you think of two numbers that multiply to 6 AND add to 5?

Once you can answer these, you can factor the equation! What do you think?`
    }

    if (lowerQ.includes('derivative') || lowerQ.includes('calculus')) {
      return `That's a great calculus question! Let's think about this step by step.

The derivative tells us the rate of change at any point.

Here's a question to guide you: If we have f(x) = x², what would the slope look like at x = 1? At x = 2? At x = 0?

Think about it: as x increases, does the slope get steeper or flatter?

The key insight is that we're looking for the "instantaneous" rate of change. Can you see a pattern emerging?`
    }

    // Physics questions
    if (lowerQ.includes('force') || lowerQ.includes('newton')) {
      return `Newton's laws are fundamental! Let me help you understand this.

Think about this: What happens when you push a shopping cart versus a heavy truck with the same force?

The key is Newton's Second Law: F = ma

Ask yourself:
1. If the mass (m) stays the same but force (F) increases, what happens to acceleration (a)?
2. If mass increases but force stays the same, what happens to acceleration?

Does that help clarify?`
    }

    // Programming questions
    if (lowerQ.includes('function') || lowerQ.includes('python')) {
      return `Functions in Python are super useful! Let me guide you.

Think of a function like a recipe:
- You put in inputs (ingredients)
- It does something with them
- It gives you an output (the dish)

Here's a question: If you wanted to calculate the area of a rectangle, what would you need to know? What would be the inputs, and what would be the output?

Then we can turn that into Python code! What do you think goes in a function definition?`
    }

    // Default Socratic response
    return `That's a great question! Let me help you think through this.

To get to the answer, I need to ask you a few questions:

1. What do you already know about this topic?
2. Have you seen similar problems before?
3. What approach did your teacher suggest for this type of problem?

Let me know what you already understand, and I'll guide you from there!`
  }

  const handleSubjectSelect = (subjectId: string) => {
    const subject = curriculum.find(s => s.id === subjectId)
    if (subject) {
      setSelectedSubject(subjectId)
      const topics = subject.topics.map(t => t.name).join(', ')
      setInput(`I want to learn about ${subject.name}. Available topics: ${topics}`)
    }
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)]">
      {/* Subject Quick Select */}
      <div className="bg-white rounded-xl p-4 mb-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Quick Subject Select</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {curriculum.map(subject => (
            <button
              key={subject.id}
              onClick={() => handleSubjectSelect(subject.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedSubject === subject.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="mr-1">{subjectEmojis[subject.id]}</span>
              {subject.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col h-[calc(100%-80px)]">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">AI Tutor</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'
              }`}>
                {msg.role === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Math, Science, or Programming..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            💡 Tip: I'll guide you to answers through questions. This helps you learn better!
          </p>
        </form>
      </div>
    </div>
  )
}
