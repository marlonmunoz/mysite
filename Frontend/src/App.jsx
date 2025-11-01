import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const location = useLocation()
  
  // Helper function to determine if a route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="logo-text">Marlon Munoz</h1>
            <h3 className="subtitle">Software Engineer</h3>
          </div>
          <nav className="nav">
            <Link 
              to="/"
              className={`nav-btn ${isActiveRoute('/') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/resume"
              className={`nav-btn ${isActiveRoute('/resume') ? 'active' : ''}`}
            >
              Resume
            </Link>
            <Link 
              to="/projects"
              className={`nav-btn ${isActiveRoute('/projects') ? 'active' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact"
              className={`nav-btn ${isActiveRoute('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 MarlonShade. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
