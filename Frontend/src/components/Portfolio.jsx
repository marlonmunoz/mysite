import React from 'react'

function Portfolio() {
  return (
    <div className="content-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-placeholder">
            <h3>Project 1</h3>
            <p>Description of your first project. Add technologies used and key features.</p>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">CSS</span>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-placeholder">
            <h3>Project 2</h3>
            <p>Description of your second project. Highlight the problem it solves.</p>
            <div className="tech-stack">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-placeholder">
            <h3>Project 3</h3>
            <p>Description of your third project. Mention any special achievements.</p>
            <div className="tech-stack">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Django</span>
              <span className="tech-tag">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
