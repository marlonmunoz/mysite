import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, FileText, Rocket, Mail, Menu, X } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Helper function to determine if a route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { path: '/', label: 'About', Icon: User },
    { path: '/resume', label: 'Resume', Icon: FileText },
    { path: '/projects', label: 'Projects', Icon: Rocket },
    { path: '/contact', label: 'Contact', Icon: Mail },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-dark-100/95 backdrop-blur-md border-b border-dark-400 sticky top-0 z-50 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex flex-col">
            <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
              Marlon Munoz
            </h1>
            <h3 className="text-accent text-xs sm:text-sm font-normal opacity-90 mt-1">
              Software Engineer
            </h3>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2 lg:gap-4">
            {navItems.map(({ path, label, Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm
                  flex items-center gap-2 relative group
                  ${isActiveRoute(path)
                    ? 'text-accent bg-accent/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Icon size={16} />
                <span className="hidden lg:inline">{label}</span>
                {isActiveRoute(path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-dark-400/50">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map(({ path, label, Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMobileMenu}
                  className={`
                    px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm
                    flex items-center gap-3
                    ${isActiveRoute(path)
                      ? 'text-accent bg-accent/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header