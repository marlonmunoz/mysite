import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center
        p-2 rounded-lg transition-all duration-200
        bg-transparent
        border border-gray-300 dark:border-gray-600
        hover:bg-gray-200/80 dark:hover:bg-dark-400/50
        hover:border-gray-400 dark:hover:border-gray-500
        focus:outline-none focus:ring-2 focus:ring-accent/50
        ${className}
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon - visible in dark mode */}
        <Sun 
          size={20} 
          className={`
            absolute inset-0 transition-all duration-300 text-yellow-500
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}
          `}
        />
        
        {/* Moon Icon - visible in light mode */}
        <Moon 
          size={20} 
          className={`
            absolute inset-0 transition-all duration-300 text-blue-600 dark:text-blue-400
            ${isDark ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}
          `}
        />
      </div>
    </button>
  )
}

export default ThemeToggle