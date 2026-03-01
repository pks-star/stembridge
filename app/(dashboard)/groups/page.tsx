'use client'

import { useState } from 'react'
import { Users, Plus, Search, Clock, BookOpen, Lock, Globe, ChevronRight } from 'lucide-react'

interface StudyGroup {
  id: string
  name: string
  subject: string
  description: string
  members: number
  maxMembers: number
  level: string
  isPrivate: boolean
  nextSession: string
}

const mockGroups: StudyGroup[] = [
  {
    id: '1',
    name: 'Grade 12 Calculus Prep',
    subject: 'Mathematics',
    description: 'Preparing for MCV4U final exam together',
    members: 4,
    maxMembers: 6,
    level: 'Grade 12',
    isPrivate: false,
    nextSession: 'Tomorrow, 7PM'
  },
  {
    id: '2',
    name: 'Physics Problem Solvers',
    subject: 'Physics',
    description: 'Weekly physics problem sessions',
    members: 3,
    maxMembers: 5,
    level: 'Grade 11',
    isPrivate: false,
    nextSession: 'Today, 6PM'
  },
  {
    id: '3',
    name: 'Python Coding Club',
    subject: 'Programming',
    description: 'Learn Python together through projects',
    members: 6,
    maxMembers: 8,
    level: 'All Levels',
    isPrivate: false,
    nextSession: 'Friday, 5PM'
  },
  {
    id: '4',
    name: 'Chemistry Study Squad',
    subject: 'Chemistry',
    description: 'SCH4U preparation group',
    members: 2,
    maxMembers: 5,
    level: 'Grade 12',
    isPrivate: true,
    nextSession: 'TBD'
  }
]

const subjectColors: Record<string, string> = {
  'Mathematics': 'bg-blue-100 text-blue-700',
  'Physics': 'bg-purple-100 text-purple-700',
  'Chemistry': 'bg-green-100 text-green-700',
  'Biology': 'bg-emerald-100 text-emerald-700',
  'Programming': 'bg-orange-100 text-orange-700',
}

export default function GroupsPage() {
  const [groups] = useState<StudyGroup[]>(mockGroups)
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreate, setShowCreate] = useState(false)

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.subject.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Study Groups</h1>
          <p className="text-gray-500">Learn together with peers</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Group
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search study groups..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
        />
      </div>

      {/* Groups Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredGroups.map(group => (
          <div
            key={group.id}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900">{group.name}</h3>
                  {group.isPrivate ? (
                    <Lock className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Globe className="w-4 h-4 text-gray-400" />
                  )}
                </div>
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${subjectColors[group.subject] || 'bg-gray-100 text-gray-700'}`}>
                  {group.subject}
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {group.members}/{group.maxMembers}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">{group.description}</p>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">{group.level}</span>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                {group.nextSession}
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-1">
              Join Group
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No study groups found</h3>
          <p className="text-gray-500 mb-4">Create a new group to start learning with peers</p>
          <button
            onClick={() => setShowCreate(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Create First Group
          </button>
        </div>
      )}

      {/* Create Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowCreate(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Create Study Group</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                <input
                  type="text"
                  placeholder="e.g., Grade 12 Math Prep"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Mathematics</option>
                  <option>Physics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                  <option>Programming</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  placeholder="What will your group focus on?"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreate(false)}
                  className="flex-1 py-2 border border-gray-200 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
