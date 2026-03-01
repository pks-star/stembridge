'use client'

import { useState } from 'react'
import { GraduationCap, DollarSign, Calendar, Search, ExternalLink, Filter, Clock } from 'lucide-react'
import { scholarships, categories, getScholarshipsByCategory, type Scholarship } from '@/data/scholarships'

const categoryColors: Record<string, string> = {
  academic: 'bg-blue-100 text-blue-700',
  'need-based': 'bg-green-100 text-green-700',
  stem: 'bg-purple-100 text-purple-700',
  athletic: 'bg-orange-100 text-orange-700',
  arts: 'bg-pink-100 text-pink-700',
  community: 'bg-yellow-100 text-yellow-700',
}

const categoryLabels: Record<string, string> = {
  academic: 'Academic',
  'need-based': 'Need-Based',
  stem: 'STEM',
  athletic: 'Athletic',
  arts: 'Arts',
  community: 'Community',
}

export default function ScholarshipsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesCategory = selectedCategory === 'all' || scholarship.category === selectedCategory
    const matchesSearch = !searchTerm || 
      scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const upcomingDeadlines = [...scholarships].sort((a, b) => 
    new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  ).slice(0, 3)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Canadian Scholarships</h1>
        <p className="text-gray-500">Find funding for your education</p>
      </div>

      {/* Upcoming Deadlines */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-100 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-amber-600" />
          <h2 className="font-semibold text-gray-900">Upcoming Deadlines</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {upcomingDeadlines.map(scholarship => (
            <div key={scholarship.id} className="bg-white rounded-lg p-4">
              <div className="font-medium text-gray-900 mb-1">{scholarship.name}</div>
              <div className="text-sm text-amber-600">{scholarship.deadline}</div>
              <div className="text-sm text-gray-500">${scholarship.amount.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search scholarships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <GraduationCap className="w-4 h-4" />
            Total Available
          </div>
          <div className="text-2xl font-bold text-gray-900">{scholarships.length}</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <DollarSign className="w-4 h-4" />
            Total Value
          </div>
          <div className="text-2xl font-bold text-gray-900">
            ${scholarships.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Calendar className="w-4 h-4" />
            Next Deadline
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {upcomingDeadlines[0]?.deadline.split(',')[0]}
          </div>
        </div>
      </div>

      {/* Scholarships List */}
      <div className="space-y-4">
        {filteredScholarships.map(scholarship => (
          <div
            key={scholarship.id}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{scholarship.name}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[scholarship.category]}`}>
                    {categoryLabels[scholarship.category]}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{scholarship.provider}</p>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-700">${scholarship.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{scholarship.deadline}</span>
                  </div>
                </div>
              </div>
              <a
                href={scholarship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Apply
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm">
                <span className="text-gray-500">Eligibility: </span>
                <span className="text-gray-700">{scholarship.eligibility.join(', ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredScholarships.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No scholarships found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
