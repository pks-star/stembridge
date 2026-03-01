'use client'

import { useState } from 'react'
import { Play, Clock, CheckCircle, XCircle, ChevronRight, Target, Zap } from 'lucide-react'

interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface Quiz {
  id: string
  title: string
  subject: string
  level: string
  questions: number
  time: number // minutes
}

const quizzes: Quiz[] = [
  { id: '1', title: 'Quadratic Equations', subject: 'Mathematics', level: 'Grade 10', questions: 10, time: 15 },
  { id: '2', title: 'Kinematics', subject: 'Physics', level: 'Grade 11', questions: 15, time: 20 },
  { id: '3', title: 'Atomic Structure', subject: 'Chemistry', level: 'Grade 11', questions: 10, time: 12 },
  { id: '4', title: 'Python Basics', subject: 'Programming', level: 'Beginner', questions: 12, time: 15 },
  { id: '5', title: 'Linear Equations', subject: 'Mathematics', level: 'Grade 9', questions: 8, time: 10 },
  { id: '6', title: 'DNA & Genetics', subject: 'Biology', level: 'Grade 12', questions: 15, time: 20 },
]

const subjectColors: Record<string, string> = {
  'Mathematics': 'bg-blue-100 text-blue-700',
  'Physics': 'bg-purple-100 text-purple-700',
  'Chemistry': 'bg-green-100 text-green-700',
  'Biology': 'bg-emerald-100 text-emerald-700',
  'Programming': 'bg-orange-100 text-orange-700',
}

export default function PracticePage() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)

  const mockQuestions: Question[] = [
    {
      id: '1',
      question: 'Solve for x: x² - 5x + 6 = 0',
      options: ['x = 1, x = 6', 'x = 2, x = 3', 'x = -1, x = -6', 'x = -2, x = -3'],
      correctAnswer: 1,
      explanation: 'Factor the quadratic: (x-2)(x-3) = 0, so x = 2 or x = 3'
    },
    {
      id: '2',
      question: 'What is the derivative of x³?',
      options: ['x²', '3x²', '3x', 'x³/3'],
      correctAnswer: 1,
      explanation: 'Using the power rule: d/dx(x^n) = nx^(n-1), so d/dx(x³) = 3x²'
    },
    {
      id: '3',
      question: 'What is the slope of the line 2x + 3y = 6?',
      options: ['2/3', '-2/3', '3/2', '-3/2'],
      correctAnswer: 1,
      explanation: 'Rewrite in slope-intercept form: y = -2/3x + 2, so slope = -2/3'
    },
    {
      id: '4',
      question: 'If f(x) = 2x + 1, what is f(3)?',
      options: ['5', '6', '7', '8'],
      correctAnswer: 2,
      explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7'
    },
    {
      id: '5',
      question: 'What is the area of a circle with radius 4?',
      options: ['8π', '16π', '4π', '12π'],
      correctAnswer: 1,
      explanation: 'Area = πr² = π(4)² = 16π'
    },
  ]

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setTimeLeft(quiz.time * 60)
  }

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const submitAnswer = () => {
    if (selectedAnswer === mockQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz complete
      setSelectedQuiz(null)
    }
  }

  // Quiz in progress
  if (selectedQuiz) {
    const question = mockQuestions[currentQuestion]
    const progress = ((currentQuestion + 1) / mockQuestions.length) * 100
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
      <div className="max-w-3xl mx-auto">
        {/* Quiz Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{selectedQuiz.title}</h2>
            <p className="text-gray-500">Question {currentQuestion + 1} of {mockQuestions.length}</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-900'}`}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">{question.question}</h3>
          
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : selectedAnswer === index
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200'
                    : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {showResult && selectedAnswer === index && index !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
            <p className="text-blue-800">{question.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {!showResult ? (
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700"
            >
              {currentQuestion < mockQuestions.length - 1 ? 'Next Question' : 'See Results'}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    )
  }

  // Quiz list
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Practice Tests</h1>
        <p className="text-gray-500">Test your knowledge with timed quizzes</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Target className="w-4 h-4" />
            Quizzes Completed
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Zap className="w-4 h-4" />
            Average Score
          </div>
          <div className="text-2xl font-bold text-gray-900">78%</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
            <Clock className="w-4 h-4" />
            Best Time
          </div>
          <div className="text-2xl font-bold text-gray-900">8:30</div>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {quizzes.map(quiz => (
          <div
            key={quiz.id}
            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${subjectColors[quiz.subject]}`}>
                  {quiz.subject}
                </span>
                <h3 className="font-semibold text-gray-900 mt-2">{quiz.title}</h3>
                <p className="text-sm text-gray-500">{quiz.level}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                {quiz.questions} questions
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {quiz.time} min
              </span>
            </div>

            <button
              onClick={() => startQuiz(quiz)}
              className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Play className="w-4 h-4" />
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
