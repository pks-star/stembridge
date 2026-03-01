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
  Brain,
  Briefcase,
  GraduationCap,
  Users,
  Video,
  Calculator,
  Award
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
    { href: '/exams', label: t.nav.examPrep, icon: GraduationCap },
    { href: '/careers', label: t.nav.careers, icon: Briefcase },
    { href: '/groups', label: 'Study Groups', icon: Users },
    { href: '/resources', label: 'Videos', icon: Video },
    { href: '/scholarships', label: 'Scholarships', icon: Award },
    { href: '/calculators', label: 'Calculators', icon: Calculator },
    { href: '/profile', label: t.nav.profile, icon: User },
  ]

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
          <div className="p-6">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">STEMBridge</span>
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">STEMBridge</span>
          </Link>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">7 Day Streak!</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">1,250 XP</span>
            </div>
          </div>

          {/* Language Toggle */}
          <div className="mb-4 p-2 bg-gray-50 rounded-lg">
            <div className="flex gap-1">
              <button
                onClick={() => handleSetLanguage('en')}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleSetLanguage('fr')}
                className={`flex-1 py-1.5 px-2 rounded text-xs font-medium transition-colors ${
                  language === 'fr' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
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
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    isActive 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
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
