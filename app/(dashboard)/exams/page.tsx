'use client'

import { useState } from 'react'
import { exams, getAllGrade12Exams, type Exam } from '@/data/curriculum/exams'
import { BookOpen, Clock, Target, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react'

export default function ExamsPage() {
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null)
  const [completedTopics, setCompletedTopics] = useState<string[]>([])

  const grade12Exams = getAllGrade12Exams()

  const toggleTopic = (topic: string) => {
    setCompletedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    )
  }

  const getProgress = (exam: Exam) => {
    const totalTopics = exam.subjects.flatMap(s => s.topics).length
    const completed = exam.subjects.flatMap(s => s.topics).filter(t => completedTopics.includes(t)).length
    return Math.round((completed / totalTopics) * 100)
  }

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Exam Prep</h1>
        <p className="text-gray-500">Prepare for Ontario secondary school exams</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{exams.length}</div>
              <div className="text-sm text-gray-500">Available Exams</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{completedTopics.length}</div>
              <div className="text-sm text-gray-500">Topics Mastered</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Grade 12</div>
              <div className="text-sm text-gray-500">University Prep</div>
            </div>
          </div>
        </div>
      </div>

      {/* OSSLT Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-orange-600" />
          <h2 className="text-lg font-semibold text-gray-900">Grade 10: OSSLT</h2>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-100">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Ontario Secondary School Literacy Test</h3>
              <p className="text-gray-600 text-sm mb-3">Required for Ontario high school graduation</p>
              <div className="flex flex-wrap gap-2">
                {exams.find(e => e.id === 'osslt')?.subjects.map(subject => (
                  <span key={subject.id} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
              Start Practice
            </button>
          </div>
        </div>
      </div>

      {/* Grade 12 University Prep */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Grade 12 University Preparation</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {grade12Exams.map(exam => {
            const progress = getProgress(exam)
            return (
              <div
                key={exam.id}
                onClick={() => setSelectedExam(exam)}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exam.name}</h3>
                    <p className="text-sm text-gray-500">{exam.name_fr}</p>
                  </div>
                  <div className="w-16 h-16 relative">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#f3f4f6" strokeWidth="4" fill="none" />
                      <circle 
                        cx="32" cy="32" r="28" 
                        stroke="#3b82f6" 
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900">
                      {progress}%
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{exam.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {exam.subjects.map(subject => (
                      <span key={subject.id} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                        {subject.name}
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Exam Detail Modal */}
      {selectedExam && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedExam(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h2 className="text-xl font-bold">{selectedExam.name}</h2>
              <p className="text-white/80">{selectedExam.name_fr}</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-600">{selectedExam.description}</p>
              
              {selectedExam.subjects.map(subject => (
                <div key={subject.id} className="border border-gray-100 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{subject.name}</h3>
                  <div className="space-y-2">
                    {subject.topics.map(topic => {
                      const isCompleted = completedTopics.includes(topic)
                      return (
                        <button
                          key={topic}
                          onClick={() => toggleTopic(topic)}
                          className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                            isCompleted ? 'bg-green-50' : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isCompleted ? 'border-green-500 bg-green-500' : 'border-gray-300'
                          }`}>
                            {isCompleted && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-sm ${isCompleted ? 'text-green-700' : 'text-gray-700'}`}>
                            {topic}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  Start Practice Test
                </button>
                <button
                  onClick={() => setSelectedExam(null)}
                  className="px-6 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
