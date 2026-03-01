'use client'

import { useState, useEffect } from 'react'
import { Play, Clock, CheckCircle, XCircle, ChevronRight, Target, Zap, GraduationCap, FileText, Trophy } from 'lucide-react'
import { curriculum } from '@/data/curriculum/ontario'
import { getAllQuizzes, getAllFinalExams } from '@/data/curriculum/assessments'
import type { Quiz, QuizQuestion } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const subjectColors: Record<string, string> = {
  math: 'from-emerald-500 to-teal-600',
  physics: 'from-violet-500 to-purple-600',
  chemistry: 'from-rose-500 to-pink-600',
  biology: 'from-green-500 to-emerald-600',
  coding: 'from-slate-500 to-zinc-600',
  'financial-literacy': 'from-amber-500 to-orange-600',
}

export default function PracticePage() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [view, setView] = useState<'quizzes' | 'exams'>('quizzes')

  const quizzes = getAllQuizzes()
  const finalExams = getAllFinalExams()

  useEffect(() => {
    if (selectedQuiz && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (selectedQuiz && timeLeft === 0 && !quizCompleted) {
      handleQuizComplete()
    }
  }, [timeLeft, selectedQuiz])

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setTimeLeft((quiz.time_limit || 15) * 60)
    setQuizCompleted(false)
  }

  const handleAnswer = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex)
    }
  }

  const submitAnswer = () => {
    if (selectedAnswer === selectedQuiz?.questions[currentQuestion].correct_answer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestion < (selectedQuiz?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      handleQuizComplete()
    }
  }

  const handleQuizComplete = () => {
    const totalQuestions = selectedQuiz?.questions.length || 0
    const percentage = Math.round((score / totalQuestions) * 100)
    setFinalScore(percentage)
    setQuizCompleted(true)
  }

  const exitQuiz = () => {
    setSelectedQuiz(null)
    setQuizCompleted(false)
  }

  // Quiz completed screen
  if (selectedQuiz && quizCompleted) {
    const passed = finalScore >= (selectedQuiz.passing_score || 70)
    
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? 'bg-emerald-100' : 'bg-amber-100'}`}>
              {passed ? (
                <Trophy className="w-10 h-10 text-emerald-600" />
              ) : (
                <Target className="w-10 h-10 text-amber-600" />
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-stone-900 mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h2>
            
            <p className="text-stone-500 mb-6">
              {passed 
                ? `You passed with ${finalScore}%!` 
                : `You scored ${finalScore}%. You need ${selectedQuiz.passing_score}% to pass.`}
            </p>

            <div className="mb-6">
              <Progress value={finalScore} className="h-3" />
              <div className="flex justify-between text-sm text-stone-500 mt-2">
                <span>0%</span>
                <span>{selectedQuiz.passing_score}% (pass)</span>
                <span>100%</span>
              </div>
            </div>

            {passed && (
              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-emerald-700 font-medium">
                  +{selectedQuiz.xp_reward} XP earned!
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={exitQuiz} variant="outline" className="flex-1">
                Back to Quizzes
              </Button>
              <Button onClick={() => startQuiz(selectedQuiz)} className="flex-1 bg-teal-600 hover:bg-teal-700">
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Quiz in progress
  if (selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion] as QuizQuestion
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return (
      <div className="max-w-3xl mx-auto">
        {/* Quiz Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              {selectedQuiz.title}
            </h2>
            <p className="text-stone-500">Question {currentQuestion + 1} of {selectedQuiz.questions.length}</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-lg">
            <Clock className={`w-5 h-5 ${timeLeft < 60 ? 'text-red-500' : 'text-stone-600'}`} />
            <span className={`font-mono font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-stone-900'}`}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-stone-100 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <Card className="border-0 shadow-md mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-stone-900 mb-6">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    showResult
                      ? index === question.correct_answer
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                        : selectedAnswer === index
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-stone-200'
                      : selectedAnswer === index
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                      showResult && index === question.correct_answer
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : selectedAnswer === index
                          ? 'border-teal-500 bg-teal-500 text-white'
                          : 'border-stone-300'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && index === question.correct_answer && (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    )}
                    {showResult && selectedAnswer === index && index !== question.correct_answer && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Explanation */}
        {showResult && (
          <Card className="border-0 shadow-md mb-6 bg-gradient-to-r from-teal-50 to-emerald-50">
            <CardContent className="p-4">
              <h4 className="font-semibold text-teal-900 mb-2">Explanation</h4>
              <p className="text-teal-800">{question.explanation}</p>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {!showResult ? (
            <Button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              className="bg-teal-600 hover:bg-teal-700"
            >
              {currentQuestion < selectedQuiz.questions.length - 1 ? 'Next Question' : 'See Results'}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    )
  }

  // Quiz/Exam list
  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Practice & Assessment
        </h1>
        <p className="text-stone-500">Test your knowledge with quizzes and final exams</p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-2 mb-6">
        <Button
          variant={view === 'quizzes' ? 'default' : 'outline'}
          onClick={() => setView('quizzes')}
          className={view === 'quizzes' ? 'bg-teal-600' : ''}
        >
          <Target className="w-4 h-4 mr-2" />
          Unit Quizzes
        </Button>
        <Button
          variant={view === 'exams' ? 'default' : 'outline'}
          onClick={() => setView('exams')}
          className={view === 'exams' ? 'bg-teal-600' : ''}
        >
          <FileText className="w-4 h-4 mr-2" />
          Final Exams
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-stone-500 text-sm mb-1">
              <Target className="w-4 h-4" />
              Quizzes Available
            </div>
            <div className="text-2xl font-bold text-stone-900">{quizzes.length}</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-stone-500 text-sm mb-1">
              <FileText className="w-4 h-4" />
              Final Exams
            </div>
            <div className="text-2xl font-bold text-stone-900">{finalExams.length}</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-stone-500 text-sm mb-1">
              <Zap className="w-4 h-4" />
              XP Available
            </div>
            <div className="text-2xl font-bold text-stone-900">
              {quizzes.reduce((sum, q) => sum + q.xp_reward, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content */}
      {view === 'quizzes' ? (
        <div className="grid md:grid-cols-2 gap-4">
          {quizzes.map(quiz => {
            const subjectId = quiz.id.split('-')[0]
            const subject = curriculum.find(s => s.id === subjectId)
            
            return (
              <Card key={quiz.id} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <Badge variant="outline" className="bg-stone-50 text-stone-600 mb-2">
                        {subject?.name || 'General'}
                      </Badge>
                      <h3 className="font-semibold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {quiz.title}
                      </h3>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subjectColors[subjectId] || 'from-stone-500 to-stone-600'} flex items-center justify-center`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-stone-500 mb-4">{quiz.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {quiz.questions.length} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {quiz.time_limit} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-amber-500" />
                      {quiz.xp_reward} XP
                    </span>
                  </div>

                  <Button 
                    onClick={() => startQuiz(quiz)} 
                    className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {finalExams.length === 0 ? (
            <Card className="border-0 shadow-md col-span-2">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-stone-300 mx-auto mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">Final Exams Coming Soon</h3>
                <p className="text-stone-500">Final exams for each subject are being prepared. Check back soon!</p>
              </CardContent>
            </Card>
          ) : finalExams.map(exam => {
            const subject = curriculum.find(s => s.id === exam.subject_id)
            
            return (
              <Card key={exam.id} className="border-0 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 mb-2">
                        Final Exam
                      </Badge>
                      <h3 className="font-semibold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {exam.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-sm text-stone-500 mb-4">{exam.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {exam.sections.reduce((sum, s) => sum + s.questions.length, 0)} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {exam.time_limit} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-amber-500" />
                      {exam.xp_reward} XP
                    </span>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  >
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Start Exam
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
