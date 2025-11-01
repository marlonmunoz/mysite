import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark-100 border-t border-dark-400 py-4 sm:py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-gray-400 text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} MarlonShade. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-1 sm:mt-2">
          Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer