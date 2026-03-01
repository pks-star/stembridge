'use client'

import { useState } from 'react'
import { curriculum } from '@/data/curriculum/ontario'
import { BookOpen, CheckCircle, Circle, Lock, ChevronRight, Sparkles } from 'lucide-react'

const subjectEmojis: Record<string, string> = {
  math: '📐',
  physics: '⚡',
  chemistry: '🧪',
  biology: '🧬',
  coding: '💻',
}

const subjectColors: Record<string, string> = {
  math: 'from-blue-500 to-blue-600',
  physics: 'from-purple-500 to-purple-600',
  chemistry: 'from-green-500 to-green-600',
  biology: 'from-emerald-500 to-emerald-600',
  coding: 'from-orange-500 to-orange-600',
}

export default function TopicsPage() {
  const [selectedSubject, setSelectedSubject] = useState(curriculum[0].id)

  const currentSubject = curriculum.find(s => s.id === selectedSubject)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Topics</h1>
        <p className="text-gray-500">Master each topic to earn XP and level up!</p>
      </div>

      {/* Subject Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {curriculum.map(subject => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              selectedSubject === subject.id
                ? `bg-gradient-to-r ${subjectColors[subject.id]} text-white shadow-lg`
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            <span>{subjectEmojis[subject.id]}</span>
            <span>{subject.name}</span>
          </button>
        ))}
      </div>

      {/* Topics Grid */}
      {currentSubject && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSubject.topics.map((topic, index) => {
            // Simulated progress based on index
            const progress = Math.min(100, (index * 20) + Math.floor(Math.random() * 30))
            const isLocked = index > 3 && progress < 30

            return (
              <div
                key={topic.id}
                className={`bg-white rounded-xl p-6 border border-gray-100 shadow-sm transition-all hover:shadow-md ${
                  isLocked ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${subjectColors[currentSubject.id]} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  {isLocked ? (
                    <Lock className="w-5 h-5 text-gray-400" />
                  ) : progress >= 80 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-300" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">{topic.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{topic.name_fr}</p>

                {topic.prerequisites.length > 0 && (
                  <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                    <BookOpen className="w-3 h-3" />
                    <span>Prereqs: {topic.prerequisites.join(', ')}</span>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-medium text-gray-900">{progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${subjectColors[currentSubject.id]} rounded-full transition-all`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <button 
                  disabled={isLocked}
                  className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
                    isLocked
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {isLocked ? (
                    <>Unlock Previous Topics</>
                  ) : progress > 0 ? (
                    <>Continue <ChevronRight className="w-4 h-4" /></>
                  ) : (
                    <>Start Learning <ChevronRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            )
          })}
        </div>
      )}

      {/* Learning Tip */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Learning Tip</h3>
            <p className="text-gray-600 text-sm">
              Topics are ordered by prerequisites. Master the foundations first — 
              each topic builds on previous ones. Our AI tutor will help you fill in any gaps!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
