import React from 'react'

const Input = ({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full px-4 py-3 
          bg-white dark:bg-dark-400/50 
          border border-gray-300 dark:border-dark-400 
          rounded-lg
          text-gray-900 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
}

const Textarea = ({ 
  label, 
  error, 
  className = '', 
  rows = 4,
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`
          w-full px-4 py-3 
          bg-white dark:bg-dark-400/50 
          border border-gray-300 dark:border-dark-400 
          rounded-lg
          text-gray-900 dark:text-white 
          placeholder-gray-500 dark:placeholder-gray-400 
          resize-none
          focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
          transition-all duration-200
          ${error ? 'border-red-500 focus:ring-red-500/50' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>
      )}
    </div>
  )
}

export { Input, Textarea }