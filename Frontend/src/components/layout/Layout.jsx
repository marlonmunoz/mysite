import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-100 dark:bg-dark-100 bg-light-100 transition-colors duration-300">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout