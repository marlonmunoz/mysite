import React from 'react'

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`
        bg-white/90 dark:bg-dark-300/50 
        backdrop-blur-sm 
        border border-gray-200 dark:border-dark-400/50 
        rounded-xl p-6 
        transition-all duration-300 
        hover:bg-white dark:hover:bg-dark-300/70
        shadow-sm dark:shadow-none
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  )
}

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`text-gray-700 dark:text-gray-300 ${className}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Content = CardContent

export default Card