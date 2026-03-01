'use client'

import { useState } from 'react'
import { Users, TrendingUp, Clock, Award, BookOpen, MessageSquare, Calendar, ArrowUp, ArrowDown, Minus } from 'lucide-react'

interface Child {
  id: string
  name: string
  grade: string
  xp: number
  level: number
  streak: number
  weeklyMinutes: number
  topicsMastered: number
  sessionsThisWeek: number
  trend: 'up' | 'down' | 'stable'
}

const mockChildren: Child[] = [
  {
    id: '1',
    name: 'Alex',
    grade: 'Grade 10',
    xp: 4520,
    level: 12,
    streak: 14,
    weeklyMinutes: 180,
    topicsMastered: 28,
    sessionsThisWeek: 5,
    trend: 'up'
  },
  {
    id: '2',
    name: 'Sarah',
    grade: 'Grade 8',
    xp: 2150,
    level: 7,
    streak: 3,
    weeklyMinutes: 90,
    topicsMastered: 15,
    sessionsThisWeek: 2,
    trend: 'stable'
  }
]

export default function ParentDashboardPage() {
  const [selectedChild, setSelectedChild] = useState<string | null>('1')
  const child = mockChildren.find(c => c.id === selectedChild)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-gray-500">Monitor your children's learning progress</p>
      </div>

      {/* Child Selector */}
      <div className="flex gap-3 mb-8">
        {mockChildren.map(c => (
          <button
            key={c.id}
            onClick={() => setSelectedChild(c.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedChild === c.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {c.name} ({c.grade})
          </button>
        ))}
      </div>

      {child && (
        <>
          {/* Overview Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <TrendingUp className="w-4 h-4" />
                Total XP
              </div>
              <div className="text-2xl font-bold text-gray-900">{child.xp.toLocaleString()}</div>
              <div className="text-sm text-gray-500">Level {child.level}</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Clock className="w-4 h-4" />
                This Week
              </div>
              <div className="text-2xl font-bold text-gray-900">{child.weeklyMinutes} min</div>
              <div className="text-sm text-green-600 flex items-center gap-1">
                <ArrowUp className="w-3 h-3" /> +25% vs last week
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <BookOpen className="w-4 h-4" />
                Topics Mastered
              </div>
              <div className="text-2xl font-bold text-gray-900">{child.topicsMastered}</div>
              <div className="text-sm text-gray-500">Total</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Award className="w-4 h-4" />
                Current Streak
              </div>
              <div className="text-2xl font-bold text-gray-900">{child.streak} days</div>
              <div className="text-sm text-orange-500">Keep it up!</div>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Session History */}
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Sessions</h3>
              <div className="space-y-3">
                {[
                  { subject: 'Mathematics', topic: 'Quadratic Equations', duration: '25 min', date: 'Today' },
                  { subject: 'Physics', topic: 'Kinematics', duration: '30 min', date: 'Yesterday' },
                  { subject: 'Programming', topic: 'Python Functions', duration: '20 min', date: '2 days ago' },
                ].map((session, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{session.subject}</div>
                      <div className="text-sm text-gray-500">{session.topic}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-700">{session.duration}</div>
                      <div className="text-xs text-gray-400">{session.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-white rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Weekly Activity</h3>
              <div className="space-y-3">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                  const minutes = [30, 45, 20, 60, 25, 0, 0][i]
                  const maxMinutes = 60
                  return (
                    <div key={day} className="flex items-center gap-3">
                      <span className="w-8 text-sm text-gray-500">{day}</span>
                      <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${(minutes / maxMinutes) * 100}%` }}
                        />
                      </div>
                      <span className="w-12 text-sm text-gray-500 text-right">{minutes} min</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Subject Progress */}
          <div className="bg-white rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Subject Progress</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { subject: 'Mathematics', progress: 72, color: 'bg-blue-500' },
                { subject: 'Physics', progress: 45, color: 'bg-purple-500' },
                { subject: 'Chemistry', progress: 30, color: 'bg-green-500' },
                { subject: 'Biology', progress: 55, color: 'bg-emerald-500' },
                { subject: 'Coding', progress: 80, color: 'bg-orange-500' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 relative">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="#f3f4f6" strokeWidth="4" fill="none" />
                      <circle 
                        cx="32" cy="32" r="28" 
                        className={item.color}
                        strokeWidth="4" 
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 28}`}
                        strokeDashoffset={`${2 * Math.PI * 28 * (1 - item.progress / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">
                      {item.progress}%
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{item.subject}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trend Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {child.trend === 'up' && (
              <span className="flex items-center gap-1 text-green-600">
                <ArrowUp className="w-4 h-4" />
                Great progress! Learning time increased 25% this week.
              </span>
            )}
            {child.trend === 'down' && (
              <span className="flex items-center gap-1 text-amber-600">
                <ArrowDown className="w-4 h-4" />
                Learning time decreased this week. Encourage daily practice!
              </span>
            )}
            {child.trend === 'stable' && (
              <span className="flex items-center gap-1 text-blue-600">
                <Minus className="w-4 h-4" />
                Consistent progress! Keep up the good work.
              </span>
            )}
          </div>
        </>
      )}
    </div>
  )
}
