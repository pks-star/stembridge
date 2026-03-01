'use client'

import { useState } from 'react'
import { careers, careerCategories, getCareersByCategory, type Career } from '@/data/curriculum/careers'
import { Briefcase, TrendingUp, GraduationCap, DollarSign, ChevronRight, Search, Star } from 'lucide-react'

const categoryColors: Record<string, string> = {
  technology: 'from-blue-500 to-blue-600',
  engineering: 'from-purple-500 to-purple-600',
  healthcare: 'from-green-500 to-green-600',
  sciences: 'from-emerald-500 to-emerald-600',
  trades: 'from-orange-500 to-orange-600',
}

const categoryIcons: Record<string, string> = {
  technology: '💻',
  engineering: '⚙️',
  healthcare: '🏥',
  sciences: '🔬',
  trades: '🔧',
}

export default function CareersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)

  const filteredCareers = careers.filter(career => {
    const matchesCategory = !selectedCategory || career.category === selectedCategory
    const matchesSearch = !searchTerm || 
      career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const highGrowthCareers = careers.filter(c => c.growth === 'high')

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Explore STEM Careers</h1>
        <p className="text-gray-500">Discover career paths in Science, Technology, Engineering, and Math</p>
      </div>

      {/* High Growth Section */}
      <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <h2 className="text-lg font-semibold text-gray-900">High Growth Careers in Canada</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {highGrowthCareers.map(career => (
            <button
              key={career.id}
              onClick={() => setSelectedCareer(career)}
              className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:shadow-md transition-shadow flex items-center gap-2"
            >
              <span>{categoryIcons[career.category]}</span>
              {career.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !selectedCategory
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {careerCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoryIcons[cat.id]} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Career Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCareers.map(career => (
          <div
            key={career.id}
            onClick={() => setSelectedCareer(career)}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categoryColors[career.category]} flex items-center justify-center text-white text-lg`}>
                {categoryIcons[career.category]}
              </div>
              {career.growth === 'high' && (
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  High Growth
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{career.name}</h3>
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{career.description}</p>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-gray-500">
                <DollarSign className="w-4 h-4" />
                {career.avg_salary}
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <GraduationCap className="w-4 h-4" />
                {career.education.split(' ')[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Detail Modal */}
      {selectedCareer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedCareer(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className={`p-6 bg-gradient-to-r ${categoryColors[selectedCareer.category]} text-white`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{categoryIcons[selectedCareer.category]}</span>
                <div>
                  <h2 className="text-xl font-bold">{selectedCareer.name}</h2>
                  <p className="text-white/80">{selectedCareer.name_fr}</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600">{selectedCareer.description}</p>
                <p className="text-gray-500 mt-1">{selectedCareer.description_fr}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-700">Salary Range</span>
                  </div>
                  <p className="text-gray-900">{selectedCareer.avg_salary}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Growth</span>
                  </div>
                  <p className="text-gray-900 capitalize">{selectedCareer.growth}</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education Required</h3>
                <p className="text-gray-600">{selectedCareer.education}</p>
                <p className="text-gray-500 mt-1">{selectedCareer.education_fr}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Recommended High School Courses</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCareer.courses_needed.map(course => (
                    <span key={course} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedCareer(null)}
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
