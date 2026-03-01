'use client'

import { useState } from 'react'
import { Calculator, ChevronRight, Play, BookOpen } from 'lucide-react'

interface CalculatorTutorial {
  id: string
  name: string
  brand: string
  description: string
  topics: string[]
  level: string
  videoUrl?: string
}

const calculatorTutorials: CalculatorTutorial[] = [
  {
    id: 'ti84-basics',
    name: 'TI-84 Plus CE',
    brand: 'Texas Instruments',
    description: 'The most popular calculator for Canadian high school math',
    topics: [
      'Basic operations',
      'Graphing functions',
      'Statistical calculations',
      'Matrix operations',
      'Equation solver'
    ],
    level: 'Grade 9-12',
    videoUrl: '#'
  },
  {
    id: 'ti83-graphing',
    name: 'TI-83 Plus',
    brand: 'Texas Instruments',
    description: 'Classic graphing calculator for math and science',
    topics: [
      'Graphing functions',
      'Calculations',
      'Statistical plots',
      'Programming basics'
    ],
    level: 'Grade 10-12',
    videoUrl: '#'
  },
  {
    id: 'casio-fx',
    name: 'Casio fx-CG50',
    brand: 'Casio',
    description: 'Color graphing calculator with advanced features',
    topics: [
      'Graphing',
      'Picture Plot',
      'Financial calculations',
      'Spreadsheet mode'
    ],
    level: 'Grade 11-12',
    videoUrl: '#'
  },
  {
    id: 'casio-basic',
    name: 'Casio fx-991EX',
    brand: 'Casio',
    description: 'Scientific calculator for exams (allowed on most tests)',
    topics: [
      'Complex numbers',
      'Matrix calculations',
      'Vector calculations',
      'Statistical functions'
    ],
    level: 'Grade 9-12',
    videoUrl: '#'
  },
  {
    id: 'online-desmos',
    name: 'Desmos',
    brand: 'Desmos',
    description: 'Free online graphing calculator',
    topics: [
      'Graphing',
      'Statistics',
      'Geometry',
      'Accessibility features'
    ],
    level: 'All grades',
    videoUrl: '#'
  }
]

export default function CalculatorsPage() {
  const [selectedCalc, setSelectedCalc] = useState<string | null>(null)

  const selectedCalculator = calculatorTutorials.find(c => c.id === selectedCalc)

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Calculator Tutorials</h1>
        <p className="text-gray-500">Learn to use your calculator for Canadian exams</p>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 mb-8">
        <div className="flex items-start gap-3">
          <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Calculator Policy for Canadian Exams</h3>
            <p className="text-sm text-gray-600">
              Most Ontario EQAO exams and provincial assessments allow basic calculators. 
              Graphing calculators like TI-84 are typically NOT allowed until Grade 10+. 
              Always check with your teacher before the exam!
            </p>
          </div>
        </div>
      </div>

      {/* Calculators Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {calculatorTutorials.map(calc => (
          <div
            key={calc.id}
            onClick={() => setSelectedCalc(calc.id)}
            className={`bg-white rounded-xl p-5 border cursor-pointer transition-all ${
              selectedCalc === calc.id 
                ? 'border-blue-500 shadow-md' 
                : 'border-gray-100 shadow-sm hover:shadow-md'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-gray-600" />
              </div>
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                {calc.level}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{calc.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{calc.description}</p>
            <div className="text-xs text-gray-400">{calc.brand}</div>
          </div>
        ))}
      </div>

      {/* Selected Calculator Details */}
      {selectedCalculator && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-xl font-bold mb-2">{selectedCalculator.name}</h2>
            <p className="text-blue-100">{selectedCalculator.description}</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gray-500" />
              <h3 className="font-semibold text-gray-900">Topics Covered</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              {selectedCalculator.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                  {topic}
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
              <Play className="w-5 h-5" />
              Watch Tutorial Video
            </button>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <div className="mt-8 bg-amber-50 rounded-xl p-6 border border-amber-100">
        <h3 className="font-semibold text-gray-900 mb-4">Calculator Tips for Exams</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Before the Exam</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Make sure batteries are new</li>
              <li>• Clear all stored data if not allowed</li>
              <li>• Know which mode (DEG/RAD) to use</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Time-Saving Shortcuts</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Use ANS button for last answer</li>
              <li>• Store values with STO→</li>
              <li>• Use fraction template (n/d)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
