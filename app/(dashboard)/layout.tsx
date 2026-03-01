'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { translations, type Language, type TranslationKeys } from '@/lib/i18n/translations'
import { 
  LayoutDashboard, 
  MessageSquare, 
  BookOpen, 
  User,
  Flame,
  Zap,
  Lightbulb,
  Briefcase,
  GraduationCap,
  Users,
  Video,
  Calculator,
  Award,
  Trophy,
  Target,
  Heart
} from 'lucide-react'

function DashboardContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('stembridge-language') as Language
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('stembridge-language', lang)
  }

  const t = translations[language]

  const navItems = [
    { href: '/dashboard', label: t.nav.dashboard, icon: LayoutDashboard },
    { href: '/chat', label: t.nav.aiTutor, icon: MessageSquare },
    { href: '/topics', label: t.nav.topics, icon: BookOpen },
    { href: '/practice', label: 'Practice', icon: Target },
    { href: '/exams', label: t.nav.examPrep, icon: GraduationCap },
    { href: '/careers', label: t.nav.careers, icon: Briefcase },
    { href: '/groups', label: 'Study Groups', icon: Users },
    { href: '/resources', label: 'Videos', icon: Video },
    { href: '/scholarships', label: 'Scholarships', icon: Award },
    { href: '/calculators', label: 'Calculators', icon: Calculator },
    { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { href: '/parent', label: 'Parent View', icon: Heart },
    { href: '/profile', label: t.nav.profile, icon: User },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-50 flex">
        <aside className="w-64 bg-white border-r border-stone-200 fixed h-full">
          <div className="p-6">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>STEMBridge</span>
            </Link>
          </div>
        </aside>
        <main className="flex-1 ml-64 p-8">
          {children}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-stone-900" style={{ fontFamily: 'var(--font-space-grotesk)' }}>STEMBridge</span>
          </Link>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 mb-6 border border-teal-100">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-stone-700">7 Day Streak!</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-stone-700">1,250 XP</span>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="mb-4 p-1.5 bg-stone-100 rounded-lg">
            <div className="flex gap-1">
              <button
                onClick={() => handleSetLanguage('en')}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleSetLanguage('fr')}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-stone-600 hover:bg-stone-200'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-teal-50 text-teal-700 font-medium" 
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  )}
                >
                  <Icon className={cn("w-5 h-5", isActive && "text-teal-600")} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardContent>{children}</DashboardContent>
}
