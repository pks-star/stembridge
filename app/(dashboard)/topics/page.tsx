'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { curriculum } from '@/data/curriculum/ontario'
import { BookOpen, CheckCircle, Circle, Lock, ChevronRight, Sparkles, Calculator, Atom, FlaskConical, Leaf, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const subjectIcons: Record<string, React.ReactNode> = {
  math: <Calculator className="w-4 h-4" />,
  physics: <Atom className="w-4 h-4" />,
  chemistry: <FlaskConical className="w-4 h-4" />,
  biology: <Leaf className="w-4 h-4" />,
  coding: <Code2 className="w-4 h-4" />,
}

const subjectColors: Record<string, string> = {
  math: 'from-emerald-500 to-teal-600',
  physics: 'from-violet-500 to-purple-600',
  chemistry: 'from-rose-500 to-pink-600',
  biology: 'from-green-500 to-emerald-600',
  coding: 'from-slate-500 to-zinc-600',
}

const subjectAccentColors: Record<string, string> = {
  math: 'emerald',
  physics: 'violet',
  chemistry: 'rose',
  biology: 'green',
  coding: 'slate',
}

export default function TopicsPage() {
  const [selectedSubject, setSelectedSubject] = useState(curriculum[0].id)

  const currentSubject = curriculum.find(s => s.id === selectedSubject)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900">Topics</h1>
        <p className="text-gray-500 mt-1">Master each topic to earn XP and level up!</p>
      </motion.div>

      {/* Subject Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 mb-6 overflow-x-auto pb-2"
      >
        {curriculum.map((subject) => (
          <Button
            key={subject.id}
            variant={selectedSubject === subject.id ? "default" : "secondary"}
            onClick={() => setSelectedSubject(subject.id)}
            className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
              selectedSubject === subject.id
                ? `bg-gradient-to-r ${subjectColors[subject.id]} text-white shadow-lg hover:shadow-xl`
                : ''
            }`}
          >
            <span>{subjectIcons[subject.id]}</span>
            <span>{subject.name}</span>
          </Button>
        ))}
      </motion.div>

      {/* Topics Grid */}
      <AnimatePresence mode="wait">
        {currentSubject && (
          <motion.div
            key={selectedSubject}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {currentSubject.topics.map((topic, index) => {
              const progress = Math.min(100, (index * 20) + Math.floor(Math.random() * 30))
              const isLocked = index > 3 && progress < 30

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={!isLocked ? { scale: 1.02, y: -2 } : {}}
                >
                  <Card className={`border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full ${isLocked ? 'opacity-60' : ''}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subjectColors[currentSubject.id]} flex items-center justify-center text-white font-bold shadow-lg`}>
                          {index + 1}
                        </div>
                        <div>
                          {isLocked ? (
                            <Badge variant="secondary" className="bg-gray-100 text-gray-500">
                              <Lock className="w-3 h-3 mr-1" />
                              Locked
                            </Badge>
                          ) : progress >= 80 ? (
                            <Badge className={`bg-${subjectAccentColors[currentSubject.id]}-100 text-${subjectAccentColors[currentSubject.id]}-700`}>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Mastered
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-gray-400">
                              <Circle className="w-3 h-3 mr-1" />
                              {progress}%
                            </Badge>
                          )}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{topic.name_fr}</p>

                      {topic.prerequisites.length > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-400 mb-4 bg-gray-50 px-2 py-1 rounded-lg inline-flex">
                          <BookOpen className="w-3 h-3" />
                          <span>Prereqs: {topic.prerequisites.join(', ')}</span>
                        </div>
                      )}

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-semibold text-gray-900">{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r ${subjectColors[currentSubject.id]} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <Button 
                        disabled={isLocked}
                        variant={selectedSubject === currentSubject.id ? "default" : "secondary"}
                        className={`w-full font-medium transition-all duration-200 ${
                          isLocked
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : `bg-gradient-to-r ${subjectColors[currentSubject.id]} hover:opacity-90`
                        }`}
                      >
                        {isLocked ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Unlock Previous
                          </>
                        ) : progress > 0 ? (
                          <>
                            Continue
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Start Learning
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Learning Tip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
            <Sparkles className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Learning Tip</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Topics are ordered by prerequisites. Master the foundations first — 
              each topic builds on previous ones. Our AI tutor will help you fill in any gaps!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
