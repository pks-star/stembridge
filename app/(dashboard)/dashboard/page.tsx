'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Flame, 
  Zap, 
  Target, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  BookOpen,
  MessageSquare,
  Award,
  Trophy,
  Star,
  Crown,
  Lightbulb
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

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
  { subject: 'Mathematics', topic: 'Quadratic Equations', mastery: 85, progress: '+15%', color: 'bg-emerald-500' },
  { subject: 'Physics', topic: 'Kinematics', mastery: 60, progress: '+10%', color: 'bg-violet-500' },
  { subject: 'Coding', topic: 'Python Functions', mastery: 92, progress: '+8%', color: 'bg-slate-500' },
]

const achievements = [
  { icon: <Flame className="w-5 h-5" />, name: '7 Day Streak', earned: true, color: 'from-orange-500 to-amber-500' },
  { icon: <Star className="w-5 h-5" />, name: '10 Topics Mastered', earned: true, color: 'from-yellow-500 to-amber-500' },
  { icon: <Crown className="w-5 h-5" />, name: 'Level 5 Reached', earned: true, color: 'from-teal-500 to-emerald-500' },
  { icon: <Target className="w-5 h-5" />, name: 'Perfect Quiz', earned: false, color: 'from-stone-400 to-stone-500' },
  { icon: <Trophy className="w-5 h-5" />, name: '100 Topics', earned: false, color: 'from-stone-400 to-stone-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
  const [progress] = useState(mockProgress)

  const stats = [
    { icon: <Zap className="w-5 h-5" />, value: progress.xp.toLocaleString(), label: 'Total XP', sub: `Level ${progress.level}`, color: 'bg-amber-100 text-amber-600', gain: '+250' },
    { icon: <Flame className="w-5 h-5" />, value: `${progress.streak} days`, label: 'Current Streak', sub: 'Best: 14 days', color: 'bg-orange-100 text-orange-600', gain: null },
    { icon: <MessageSquare className="w-5 h-5" />, value: progress.totalSessions, label: 'Total Sessions', sub: 'This week: 5', color: 'bg-teal-100 text-teal-600', gain: null },
    { icon: <Clock className="w-5 h-5" />, value: progress.weeklyMinutes, label: 'Minutes This Week', sub: '+45 min vs last week', color: 'bg-emerald-100 text-emerald-600', gain: null },
  ]

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Welcome back!
        </h1>
        <p className="text-stone-500 mt-1">Keep up the great work. You're on a {progress.streak}-day streak!</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                  {stat.gain && (
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-xs">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" /> {stat.gain}
                    </Badge>
                  )}
                </div>
                <div className="text-2xl font-bold text-stone-900">{stat.value}</div>
                <div className="text-sm text-stone-500">{stat.label}</div>
                <div className="text-xs text-stone-400 mt-1">{stat.sub}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mastery Chart */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="border-0 shadow-md h-full bg-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span>Subject Mastery</span>
                <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Top 27%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {Object.entries(progress.mastery).map(([subject, value], i) => {
                  const colors = ['from-emerald-500 to-teal-600', 'from-violet-500 to-purple-600', 'from-rose-500 to-pink-600', 'from-green-500 to-emerald-600', 'from-slate-500 to-zinc-600']
                  return (
                    <motion.div 
                      key={subject}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-20 text-sm font-medium text-stone-700 capitalize">{subject}</div>
                      <div className="flex-1">
                        <Progress 
                          value={value} 
                          className="h-2.5 bg-stone-100"
                        />
                      </div>
                      <div className="w-12 text-sm font-semibold text-stone-600 text-right">{value}%</div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 text-sm text-stone-600"
                >
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>You're improving faster than <strong className="text-emerald-600">73%</strong> of students!</span>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Topics */}
        <motion.div variants={itemVariants}>
          <Card className="border-0 shadow-md h-full bg-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span>Recent Topics</span>
                <BookOpen className="w-5 h-5 text-stone-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTopics.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-10 rounded-full ${item.color}`} />
                      <div>
                        <div className="text-sm font-medium text-stone-900">{item.topic}</div>
                        <div className="text-xs text-stone-500">{item.subject}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-emerald-600">{item.progress}</div>
                      <div className="text-xs text-stone-400">{item.mastery}% mastery</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 py-2.5 text-sm font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors"
              >
                Practice More →
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div variants={itemVariants} className="mt-6">
        <Card className="border-0 shadow-md bg-white">
          <CardHeader>
            <CardTitle className="flex items-center justify-between" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              <span>Achievements</span>
              <Award className="w-5 h-5 text-stone-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {achievements.map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={badge.earned ? { scale: 1.05 } : {}}
                  className={`p-4 rounded-2xl text-center transition-all cursor-default ${
                    badge.earned 
                      ? `bg-gradient-to-br ${badge.color} text-white shadow-lg` 
                      : 'bg-stone-50 border border-stone-100 opacity-50'
                  }`}
                >
                  <div className={`mb-2 ${badge.earned ? 'text-white' : 'text-stone-400'}`}>
                    {badge.icon}
                  </div>
                  <div className={`text-sm font-medium ${badge.earned ? 'text-white' : 'text-stone-500'}`}>
                    {badge.name}
                  </div>
                  {badge.earned && (
                    <div className="text-xs text-white/80 mt-1">Earned!</div>
                  )}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Progress Ring */}
      <motion.div 
        variants={itemVariants}
        className="mt-6 bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 rounded-2xl p-6 text-white shadow-lg"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>Today's Goal</h2>
            <p className="text-teal-100">Complete 2 more topics to reach your daily target</p>
            <div className="mt-4 flex items-center gap-3">
              <Progress value={60} className="flex-1 h-2 bg-white/20" />
              <span className="font-semibold">60%</span>
            </div>
          </div>
          <div className="relative w-28 h-28 ml-6">
            <svg className="w-28 h-28 transform -rotate-90">
              <circle cx="56" cy="56" r="48" stroke="rgba(255,255,255,0.2)" strokeWidth="10" fill="none" />
              <motion.circle 
                cx="56" cy="56" r="48" 
                stroke="white" 
                strokeWidth="10" 
                fill="none"
                strokeDasharray={`${2 * Math.PI * 48}`}
                strokeDashoffset={`${2 * Math.PI * 48 * 0.4}`}
                strokeLinecap="round"
                initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 48 * 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">3/5</span>
              <span className="text-xs text-teal-200">topics</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
