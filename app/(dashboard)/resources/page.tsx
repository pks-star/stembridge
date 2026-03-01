'use client'

import { useState } from 'react'
import { Video, Play, Clock, BookOpen, Star, Search, ExternalLink } from 'lucide-react'

interface VideoResource {
  id: string
  title: string
  description: string
  subject: string
  duration: string
  level: string
  source: string
  url: string
  rating: number
}

const videoResources: VideoResource[] = [
  // Mathematics
  {
    id: '1',
    title: 'Introduction to Calculus',
    description: 'Learn the fundamentals of derivatives and limits',
    subject: 'Mathematics',
    duration: '15:30',
    level: 'Grade 12',
    source: 'Khan Academy',
    url: '#',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Quadratic Equations Explained',
    description: 'Master factoring and the quadratic formula',
    subject: 'Mathematics',
    duration: '12:45',
    level: 'Grade 10',
    source: '3Blue1Brown',
    url: '#',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Trigonometry Basics',
    description: 'Sin, cos, and tan explained visually',
    subject: 'Mathematics',
    duration: '18:20',
    level: 'Grade 10',
    source: 'Khan Academy',
    url: '#',
    rating: 4.7
  },
  // Physics
  {
    id: '4',
    title: 'Newton\'s Laws of Motion',
    description: 'Understanding forces and acceleration',
    subject: 'Physics',
    duration: '20:15',
    level: 'Grade 11',
    source: 'Veritasium',
    url: '#',
    rating: 4.9
  },
  {
    id: '5',
    title: 'Quantum Mechanics Intro',
    description: 'Introduction to wave-particle duality',
    subject: 'Physics',
    duration: '25:00',
    level: 'Grade 12',
    source: 'PBS Space Time',
    url: '#',
    rating: 4.8
  },
  // Chemistry
  {
    id: '6',
    title: 'Atomic Structure',
    description: 'Protons, neutrons, electrons and more',
    subject: 'Chemistry',
    duration: '14:30',
    level: 'Grade 11',
    source: 'Khan Academy',
    url: '#',
    rating: 4.6
  },
  {
    id: '7',
    title: 'Organic Chemistry Fundamentals',
    description: 'Introduction to functional groups',
    subject: 'Chemistry',
    duration: '22:10',
    level: 'Grade 12',
    source: 'Professor Dave Explains',
    url: '#',
    rating: 4.7
  },
  // Biology
  {
    id: '8',
    title: 'Cell Biology Overview',
    description: 'The structure and function of cells',
    subject: 'Biology',
    duration: '19:45',
    level: 'Grade 11',
    source: 'Khan Academy',
    url: '#',
    rating: 4.8
  },
  {
    id: '9',
    title: 'DNA and Genetics',
    description: 'Understanding inheritance and DNA structure',
    subject: 'Biology',
    duration: '24:30',
    level: 'Grade 12',
    source: 'MIT OpenCourseWare',
    url: '#',
    rating: 4.9
  },
  // Programming
  {
    id: '10',
    title: 'Python for Beginners',
    description: 'Your first Python program',
    subject: 'Programming',
    duration: '16:00',
    level: 'Beginner',
    source: 'freeCodeCamp',
    url: '#',
    rating: 4.8
  },
  {
    id: '11',
    title: 'JavaScript Basics',
    description: 'Introduction to web development',
    subject: 'Programming',
    duration: '28:00',
    level: 'Beginner',
    source: 'Traversy Media',
    url: '#',
    rating: 4.7
  }
]

const subjects = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Programming']
const levels = ['All', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'University', 'Beginner']

const subjectColors: Record<string, string> = {
  'Mathematics': 'bg-blue-100 text-blue-700',
  'Physics': 'bg-purple-100 text-purple-700',
  'Chemistry': 'bg-green-100 text-green-700',
  'Biology': 'bg-emerald-100 text-emerald-700',
  'Programming': 'bg-orange-100 text-orange-700',
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')

  const filteredVideos = videoResources.filter(video => {
    const matchesSearch = !searchTerm || 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === 'All' || video.subject === selectedSubject
    const matchesLevel = selectedLevel === 'All' || video.level.includes(selectedLevel)
    return matchesSearch && matchesSubject && matchesLevel
  })

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Video Resources</h1>
        <p className="text-gray-500">Curated STEM videos to help you learn</p>
      </div>

      {/* Featured Video */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
        <div className="flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-3">
              Featured
            </span>
            <h2 className="text-2xl font-bold mb-2">The Math of Music</h2>
            <p className="text-blue-100 mb-4 max-w-xl">
              Explore the fascinating connection between mathematics and music. 
              Learn about harmonics, frequencies, and why certain notes sound good together.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 18:30
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" /> Mathematics
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> 4.9
              </span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-colors">
            <Play className="w-5 h-5" />
            Watch Now
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {subjects.map(subject => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map(video => (
          <div
            key={video.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
          >
            {/* Thumbnail Placeholder */}
            <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
              <Play className="w-12 h-12 text-gray-400 group-hover:text-blue-600 transition-colors" />
              <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                {video.duration}
              </span>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${subjectColors[video.subject]}`}>
                  {video.subject}
                </span>
                <span className="text-xs text-gray-500">{video.level}</span>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{video.source}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{video.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-500">Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}
