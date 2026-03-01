'use client'

import { useState } from 'react'
import { 
  Flame, 
  Zap, 
  Target, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  Award
} from 'lucide-react'

const mockProgress = {
  xp: 1250,
  level: 5,
  streak: 7,
  totalSessions: 23,
  weeklyMinutes: 145,
  mastery: {
    math: 72,
    physics: 45,
    chemistry: 30,
    biology: 55,
    coding: 80,
  }
}

const recentTopics = [
  { subject: 'Mathematics', topic: 'Quadratic Equations', mastery: 85, progress: '+15%' },
  { subject: 'Physics', topic: 'Kinematics', mastery: 60, progress: '+10%' },
  { subject: 'Coding', topic: 'Python Functions', mastery: 92, progress: '+8%' },
]

const achievements = [
  { icon: '🔥', name: '7 Day Streak', earned: true },
  { icon: '🧠', name: '10 Topics Mastered', earned: true },
  { icon: '⚡', name: 'Level 5 Reached', earned: true },
  { icon: '🎯', name: 'Perfect Quiz', earned: false },
  { icon: '🌟', name: '100 Topics', earned: false },
]

export default function DashboardPage() {
  const [progress] = useState(mockProgress)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-500">Keep up the great work. You're on a 7-day streak!</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="text-xs text-green-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> +250
            </span>
          </div>
          <div className="text-3xl font-bold text-gray-900">{progress.xp.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Total XP</div>
          <div className="mt-2 text-xs text-gray-400">Level {progress.level}</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{progress.streak} days</div>
          <div className="text-sm text-gray-500">Current Streak</div>
          <div className="mt-2 text-xs text-gray-400">Best: 14 days</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{progress.totalSessions}</div>
          <div className="text-sm text-gray-500">Total Sessions</div>
          <div className="mt-2 text-xs text-gray-400">This week: 5</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{progress.weeklyMinutes}</div>
          <div className="text-sm text-gray-500">Minutes This Week</div>
          <div className="mt-2 text-xs text-gray-400">+45 min vs last week</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mastery Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Subject Mastery</h2>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {Object.entries(progress.mastery).map(([subject, value]) => (
              <div key={subject} className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-gray-700 capitalize">{subject}</div>
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <div className="w-12 text-sm text-gray-500 text-right">{value}%</div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>You're improving faster than 73% of students!</span>
            </div>
          </div>
        </div>

        {/* Recent Topics */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Topics</h2>
            <BookOpen className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {recentTopics.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium text-gray-900">{item.topic}</div>
                  <div className="text-xs text-gray-500">{item.subject}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600">{item.progress}</div>
                  <div className="text-xs text-gray-400">{item.mastery}% mastery</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Practice More →
          </button>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Achievements</h2>
          <Award className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {achievements.map((badge, i) => (
            <div 
              key={i}
              className={`p-4 rounded-xl text-center transition-all ${
                badge.earned 
                  ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200' 
                  : 'bg-gray-50 border border-gray-100 opacity-50'
              }`}
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <div className="text-sm font-medium text-gray-700">{badge.name}</div>
              {badge.earned && (
                <div className="text-xs text-green-600 mt-1">Earned!</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Ring */}
      <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Today's Goal</h2>
            <p className="text-blue-100">Complete 2 more topics to reach your daily target</p>
          </div>
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
              <circle 
                cx="48" cy="48" r="40" 
                stroke="white" 
                strokeWidth="8" 
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * 0.6}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">60%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
