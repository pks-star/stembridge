'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Bot, User, BookOpen, Sparkles, GraduationCap, Lightbulb, ArrowRight, Calculator, Atom, FlaskConical, Leaf, Code2, Apple } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { curriculum } from '@/data/curriculum/ontario'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const subjectIcons: Record<string, React.ReactNode> = {
  math: <Calculator className="w-4 h-4" />,
  physics: <Atom className="w-4 h-4" />,
  chemistry: <FlaskConical className="w-4 h-4" />,
  biology: <Leaf className="w-4 h-4" />,
  coding: <Code2 className="w-4 h-4" />,
}

const examplePrompts = [
  { text: "Explain quadratic equations", icon: <Calculator className="w-4 h-4" /> },
  { text: "How does photosynthesis work?", icon: <Leaf className="w-4 h-4" /> },
  { text: "What's Newton's first law?", icon: <Apple className="w-4 h-4" /> },
  { text: "Help me with Python functions", icon: <Code2 className="w-4 h-4" /> },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm your STEMBridge AI tutor. I use Socratic learning — I'll guide you with questions instead of giving answers directly. This helps you truly understand!\n\nWhat would you like to explore today?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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

    setTimeout(() => {
      const aiResponse = generateSocraticResponse(input)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      }])
      setIsLoading(false)
    }, 1200 + Math.random() * 800)
  }

  const generateSocraticResponse = (question: string): string => {
    const lowerQ = question.toLowerCase()
    
    if (lowerQ.includes('quadratic') || lowerQ.includes('equation')) {
      return `Great question about quadratic equations! Let me guide you through this.

Instead of just giving you the answer, let me ask you some questions:

**1.** What form is a quadratic equation typically written in? (Hint: think about the highest power of x)

**2.** If you have x² + 5x + 6 = 0, can you think of two numbers that multiply to 6 AND add to 5?

Once you can answer these, you can factor the equation! What do you think?`
    }

    if (lowerQ.includes('derivative') || lowerQ.includes('calculus')) {
      return `That's a great calculus question! Let's think about this step by step.

The derivative tells us the rate of change at any point.

Here's a question to guide you: If we have f(x) = x², what would the slope look like at x = 1? At x = 2? At x = 0?

Think about it: as x increases, does the slope get steeper or flatter?

The key insight is that we're looking for the "instantaneous" rate of change. Can you see a pattern emerging?`
    }

    if (lowerQ.includes('force') || lowerQ.includes('newton')) {
      return `Newton's laws are fundamental! Let me help you understand this.

Think about this: What happens when you push a shopping cart versus a heavy truck with the same force?

The key is Newton's Second Law: **F = ma**

Ask yourself:
1. If the mass (m) stays the same but force (F) increases, what happens to acceleration (a)?
2. If mass increases but force stays the same, what happens to acceleration?

Does that help clarify?`
    }

    if (lowerQ.includes('function') || lowerQ.includes('python')) {
      return `Functions in Python are super useful! Let me guide you.

Think of a function like a recipe:
• You put in **inputs** (ingredients)
• It does something with them
• It gives you an **output** (the dish)

Here's a question: If you wanted to calculate the area of a rectangle, what would you need to know? What would be the inputs, and what would be the output?

Then we can turn that into Python code! What do you think goes in a function definition?`
    }

    return `That's a great question! Let me help you think through this.

To get to the answer, I need to ask you a few questions:

**1.** What do you already know about this topic?
**2.** Have you seen similar problems before?
**3.** What approach did your teacher suggest for this type of problem?

Let me know what you already understand, and I'll guide you from there!`
  }

  const handleSubjectSelect = (subjectId: string) => {
    const subject = curriculum.find(s => s.id === subjectId)
    if (subject) {
      setSelectedSubject(subjectId)
      const topics = subject.topics.map(t => t.name).join(', ')
      setInput(`I want to learn about ${subject.name}. Available topics: ${topics}`)
      inputRef.current?.focus()
    }
  }

  const handleExampleClick = (prompt: string) => {
    setInput(prompt)
    inputRef.current?.focus()
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col gap-4">
      {/* Subject Quick Select */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-teal-50 to-emerald-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-stone-700">Quick Subject Select</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {curriculum.map(subject => (
              <Button
                key={subject.id}
                variant={selectedSubject === subject.id ? "default" : "secondary"}
                size="sm"
                onClick={() => handleSubjectSelect(subject.id)}
                className="transition-all duration-200 hover:scale-105 bg-teal-600 hover:bg-teal-700"
              >
                <span className="mr-1">{subjectIcons[subject.id]}</span>
                {subject.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Container */}
      <Card className="flex-1 border-0 shadow-lg overflow-hidden bg-white">
        {/* Header */}
        <div className="px-6 py-4 border-b bg-white/80 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br600 to-emerald from-teal--600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h2 className="font-semibold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>AI Tutor</h2>
                <p className="text-xs text-muted-foreground">Socratic Learning • Always ready to help</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse" />
              Online
            </Badge>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 h-[400px] px-6 py-4">
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <Avatar className={`w-9 h-9 flex-shrink-0 ${msg.role === 'user' ? 'order-2' : ''}`}>
                    <AvatarFallback className={msg.role === 'user' ? 'bg-stone-800 text-white' : 'bg-gradient-to-br from-teal-600 to-emerald-600 text-white'}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                    <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-stone-800 to-stone-900 text-white rounded-tr-md' 
                        : 'bg-white border border-stone-100 text-stone-900 rounded-tl-md'
                    }`}>
                      <p className="whitespace-pre-wrap text-[15px] leading-relaxed">{msg.content}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1.5 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <Avatar className="w-9 h-9 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-white border border-stone-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-stone-400 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ 
                          duration: 0.6, 
                          repeat: Infinity, 
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Example Prompts */}
        {messages.length <= 1 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 pb-2"
          >
            <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
              <Lightbulb className="w-3 h-3" />
              Try asking about:
            </p>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((prompt, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  onClick={() => handleExampleClick(prompt.text)}
                  className="text-xs h-7 hover:bg-teal-50 hover:border-teal-200 transition-colors border-stone-200"
                >
                  <span className="mr-1">{prompt.icon}</span>
                  {prompt.text}
                  <ArrowRight className="w-3 h-3 ml-1 opacity-50" />
                </Button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t bg-stone-50/50">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about Math, Science, or Programming..."
              className="flex-1 px-4 py-6 bg-white shadow-sm border-stone-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-stone-900 placeholder:text-stone-400 rounded-xl"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              size="icon"
              className="px-6 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            <span className="inline-flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-500" />
              I'll guide you to answers through questions — this helps you learn better!
            </span>
          </p>
        </form>
      </Card>
    </div>
  )
}
