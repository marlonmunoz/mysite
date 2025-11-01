import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  
  // Helper function to determine if a route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { path: '/', label: 'About', icon: '👨‍💻' },
    { path: '/resume', label: 'Resume', icon: '📄' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/contact', label: 'Contact', icon: '📧' },
  ]

  return (
    <header className="bg-dark-100/95 backdrop-blur-md border-b border-dark-400 sticky top-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-semibold">Marlon Munoz</h1>
          <h3 className="text-accent text-sm font-normal opacity-90 mt-1">
            Software Engineer
          </h3>
        </div>
        
        {/* Navigation */}
        <nav className="flex gap-4">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm
                flex items-center gap-2 relative group
                ${isActiveRoute(path)
                  ? 'text-accent bg-accent/10' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <span className="text-xs">{icon}</span>
              {label}
              {isActiveRoute(path) && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header