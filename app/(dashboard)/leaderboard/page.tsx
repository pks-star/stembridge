'use client'

import { useState } from 'react'
import { Trophy, Medal, Crown, TrendingUp, Users, Flame } from 'lucide-react'

interface LeaderboardEntry {
  rank: number
  name: string
  xp: number
  streak: number
  level: number
  avatar?: string
  isCurrentUser?: boolean
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: 'Emma W.', xp: 12500, streak: 45, level: 25 },
  { rank: 2, name: 'Liam K.', xp: 11200, streak: 30, level: 23 },
  { rank: 3, name: 'Noah M.', xp: 9800, streak: 21, level: 20 },
  { rank: 4, name: 'Olivia T.', xp: 8900, streak: 18, level: 18 },
  { rank: 5, name: 'Ava S.', xp: 8200, streak: 15, level: 17 },
  { rank: 6, name: 'Sophia L.', xp: 7500, streak: 14, level: 15 },
  { rank: 7, name: 'Jackson B.', xp: 6800, streak: 12, level: 14 },
  { rank: 8, name: 'Lucas H.', xp: 6200, streak: 10, level: 13 },
  { rank: 9, name: 'Mia R.', xp: 5500, streak: 8, level: 11 },
  { rank: 10, name: 'You', xp: 4520, streak: 14, level: 12, isCurrentUser: true },
]

const timeFilters = [
  { id: 'weekly', label: 'This Week' },
  { id: 'monthly', label: 'This Month' },
  { id: 'all', label: 'All Time' },
]

const categoryFilters = [
  { id: 'all', label: 'All Subjects' },
  { id: 'math', label: 'Mathematics' },
  { id: 'science', label: 'Science' },
  { id: 'coding', label: 'Programming' },
]

export default function LeaderboardPage() {
  const [timeFilter, setTimeFilter] = useState('weekly')
  const [categoryFilter, setCategoryFilter] = useState('all')

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Trophy className="w-7 h-7 text-yellow-500" />
          Leaderboard
        </h1>
        <p className="text-gray-500">See how you rank against other learners</p>
      </div>

      {/* Top 3 */}
      <div className="flex justify-center items-end gap-4 mb-8">
        {/* 2nd Place */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-b from-gray-200 to-gray-300 rounded-full flex items-center justify-center mb-2">
            <Medal className="w-8 h-8 text-gray-400" />
          </div>
          <div className="font-semibold text-gray-900">{mockLeaderboard[1].name}</div>
          <div className="text-sm text-gray-500">{mockLeaderboard[1].xp.toLocaleString()} XP</div>
          <div className="mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">#2</div>
        </div>

        {/* 1st Place */}
        <div className="text-center -mt-4">
          <div className="w-20 h-20 mx-auto bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <div className="font-bold text-gray-900">{mockLeaderboard[0].name}</div>
          <div className="text-sm text-yellow-600 font-semibold">{mockLeaderboard[0].xp.toLocaleString()} XP</div>
          <div className="mt-2 px-3 py-1 bg-yellow-100 rounded-full text-xs font-medium text-yellow-700">#1</div>
        </div>

        {/* 3rd Place */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto bg-gradient-to-b from-orange-200 to-orange-400 rounded-full flex items-center justify-center mb-2">
            <Medal className="w-8 h-8 text-orange-600" />
          </div>
          <div className="font-semibold text-gray-900">{mockLeaderboard[2].name}</div>
          <div className="text-sm text-gray-500">{mockLeaderboard[2].xp.toLocaleString()} XP</div>
          <div className="mt-2 px-3 py-1 bg-orange-100 rounded-full text-xs font-medium">#3</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex bg-gray-100 rounded-lg p-1">
          {timeFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setTimeFilter(filter.id)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                timeFilter === filter.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
        >
          {categoryFilters.map(filter => (
            <option key={filter.id} value={filter.id}>{filter.label}</option>
          ))}
        </select>
      </div>

      {/* Leaderboard List */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {mockLeaderboard.map((entry, index) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-4 p-4 ${
              entry.isCurrentUser ? 'bg-blue-50' : index < 3 ? 'bg-gray-50' : ''
            } ${index !== mockLeaderboard.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            <div className={`w-8 text-center font-bold ${
              entry.rank === 1 ? 'text-yellow-500' :
              entry.rank === 2 ? 'text-gray-400' :
              entry.rank === 3 ? 'text-orange-500' :
              'text-gray-500'
            }`}>
              {entry.rank}
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {entry.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">{entry.name}</div>
              <div className="text-xs text-gray-500">Level {entry.level}</div>
            </div>
            <div className="flex items-center gap-1 text-orange-500">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">{entry.streak}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-900">{entry.xp.toLocaleString()}</div>
              <div className="text-xs text-gray-500">XP</div>
            </div>
          </div>
        ))}
      </div>

      {/* Your Stats */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Your Ranking</h3>
            <p className="text-sm text-gray-500">Keep learning to climb the ranks!</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">#10</div>
            <div className="text-sm text-gray-500">out of 1,234 students</div>
          </div>
        </div>
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '75%' }} />
        </div>
        <div className="mt-2 text-sm text-gray-500 flex justify-between">
          <span>Need 880 XP to reach #9</span>
        </div>
      </div>
    </div>
  )
}
