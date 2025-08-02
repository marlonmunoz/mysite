import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const [activeTab, setActiveTab] = useState('portfolio')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo-text">Marlon Munoz</h1>
            <h3 className="subtitle">Software Engineer</h3>
          </div>
          <nav className="nav">
            <button 
              className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={`nav-btn ${activeTab === 'resume' ? 'active' : ''}`}
              onClick={() => setActiveTab('resume')}
            >
              Resume
            </button>
            <button 
              className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-btn ${activeTab === 'contacts' ? 'active' : ''}`}
              onClick={() => setActiveTab('contacts')}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
      
      <main className="main">
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'resume' && <Resume />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'contacts' && <Contact />}
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 MarlonShade. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
