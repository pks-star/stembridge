export interface User {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  role: 'student' | 'tutor' | 'parent' | 'admin'
  xp: number
  level: number
  streak_days: number
  last_activity?: string
  created_at: string
}

export interface Session {
  id: string
  user_id: string
  subject: string
  topic: string
  messages: ChatMessage[]
  duration: number
  xp_earned: number
  created_at: string
}

export interface TopicProgress {
  id: string
  user_id: string
  subject: string
  topic: string
  mastery_level: number
  times_practiced: number
  last_practiced?: string
  next_review?: string
}

export interface Achievement {
  id: string
  user_id: string
  badge_type: BadgeType
  earned_at: string
}

export type BadgeType = 
  | 'first_session'
  | 'streak_7'
  | 'streak_30'
  | 'topics_10'
  | 'topics_50'
  | 'topics_100'
  | 'perfect_quiz'
  | 'level_5'
  | 'level_10'

export interface QuizAttempt {
  id: string
  user_id: string
  subject: string
  topic: string
  score: number
  total_questions: number
  xp_earned: number
  created_at: string
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface Subject {
  id: string
  name: string
  name_fr: string
  topics: Topic[]
}

export interface Topic {
  id: string
  name: string
  name_fr: string
  prerequisites: string[]
  grade_level: string
  description: string
  description_fr: string
  objectives: string[]
  objectives_fr: string[]
  content: string
  content_fr: string
  examples: { question: string; solution: string }[]
  practice_problems: { question: string; answer?: string; solution?: string; hint?: string }[]
  key_formulas?: string[]
  video_resources?: { title: string; url: string }[]
  unit_test?: Quiz
  quiz?: Quiz
}

export interface Quiz {
  id: string
  title: string
  title_fr: string
  description: string
  description_fr: string
  questions: QuizQuestion[]
  passing_score: number
  xp_reward: number
  time_limit?: number
}

export interface QuizQuestion {
  id: string
  question: string
  question_fr: string
  options?: string[]
  options_fr?: string[]
  correct_answer: number
  explanation: string
  explanation_fr: string
}

export interface FinalExam {
  id: string
  subject_id: string
  grade_level: string
  title: string
  title_fr: string
  description: string
  description_fr: string
  sections: ExamSection[]
  passing_score: number
  xp_reward: number
  time_limit: number
}

export interface ExamSection {
  title: string
  title_fr: string
  questions: QuizQuestion[]
}

export interface XPEvent {
  amount: number
  reason: string
  timestamp: string
}
