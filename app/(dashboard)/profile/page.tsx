'use client'

import { useState } from 'react'
import { User, Mail, GraduationCap, Globe, Bell, Shield, LogOut, ChevronRight, Trophy, Flame, Zap } from 'lucide-react'

export default function ProfilePage() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [grade, setGrade] = useState('grade11')
  const [language, setLanguage] = useState('en')

  const settings = [
    { icon: Bell, label: 'Notifications', description: 'Manage your alerts', href: '#' },
    { icon: Globe, label: 'Language', description: 'English / Français', href: '#' },
    { icon: Shield, label: 'Privacy', description: 'Your data is safe', href: '#' },
  ]

  const stats = [
    { icon: Zap, label: 'Total XP', value: '1,250', color: 'yellow' },
    { icon: Flame, label: 'Best Streak', value: '14 days', color: 'orange' },
    { icon: Trophy, label: 'Achievements', value: '8/15', color: 'purple' },
  ]

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-500">Manage your account and settings</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="text-gray-500">{email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              Level 5
            </span>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Edit
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                stat.color === 'yellow' ? 'bg-yellow-100' :
                stat.color === 'orange' ? 'bg-orange-100' :
                'bg-purple-100'
              }`}>
                <Icon className={`w-5 h-5 ${
                  stat.color === 'yellow' ? 'text-yellow-600' :
                  stat.color === 'orange' ? 'text-orange-600' :
                  'text-purple-600'
                }`} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          )
        })}
      </div>

      {/* Settings */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Settings</h3>
        </div>
        
        {settings.map((setting, i) => {
          const Icon = setting.icon
          return (
            <a
              key={i}
              href={setting.href}
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{setting.label}</div>
                  <div className="text-sm text-gray-500">{setting.description}</div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </a>
          )
        })}

        <div className="px-6 py-4 border-t border-gray-100">
          <button className="flex items-center gap-4 w-full text-left">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="font-medium text-red-600">Sign Out</div>
              <div className="text-sm text-gray-500">Log out of your account</div>
            </div>
          </button>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="mt-6 bg-white rounded-xl p-6 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Language / Langue</h3>
        <div className="flex gap-3">
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              language === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              language === 'fr'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Français
          </button>
        </div>
      </div>
    </div>
  )
}
