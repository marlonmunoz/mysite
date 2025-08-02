import React from 'react'

function Projects() {
  return (
    <div className="content-section">
      <h2>Projects</h2>
      <div className="deployed-grid">
        <div className="deployed-item">
          <h3>X-PENSE</h3>
          <p>This project is currently deployed and accessible online.</p>
          <div className="project-links">
            <a href="https://marlonmunoz.github.io/x-pense-app" className="project-link live-link">View Live</a>
            <a href="https://github.com/marlonmunoz/x-pense-app" className="project-link code-link">Source Code</a>
          </div>
          <div className="project-status">
            <span className="status-badge live">Live</span>
          </div>
        </div>
        <div className="deployed-item">
          <h3>FOX-RUNNER GAME</h3>
          <p>Another deployed project showcasing different technologies.</p>
          <div className="project-links">
            <a href="https://marlonmunoz.github.io/Retro_Fox_Runner-_p5/" className="project-link live-link">View Live</a>
            <a href="https://github.com/marlonmunoz/Retro_Fox_Runner-_p5" className="project-link code-link">Source Code</a>
          </div>
          <div className="project-status">
            <span className="status-badge live">Live</span>
          </div>
        </div>
        <div className="deployed-item">
          <h3>CALCULATOR </h3>
          <p>Another deployed project showcasing different technologies.</p>
          <div className="project-links">
            <a href="https://marlonmunoz.github.io/calculator_project/" className="project-link live-link">View Live</a>
            <a href="https://github.com/marlonmunoz/calculator_project" className="project-link code-link">Source Code</a>
          </div>
          <div className="project-status">
            <span className="status-badge live">Live</span>
          </div>
        </div>
        {/* <div className="deployed-item">
          <h3>FOX-RUNNER GAME</h3>
          <p>Another deployed project showcasing different technologies.</p>
          <div className="project-links">
            <a href="#" className="project-link live-link">View Live</a>
            <a href="#" className="project-link code-link">Source Code</a>
          </div>
          <div className="project-status">
            <span className="status-badge live">Live</span>
          </div>
        </div> */}
        <div className="deployed-item">
          <h3>Coming Soon</h3>
          <p>This project is currently in development and will be deployed soon.</p>
          <div className="project-links">
            <a href="#" className="project-link code-link">Source Code</a>
          </div>
          <div className="project-status">
            <span className="status-badge development">In Development</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
