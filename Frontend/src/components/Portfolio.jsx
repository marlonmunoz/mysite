import React from 'react'

function Portfolio() {
  return (
    <div className="content-section">
      <div className="about-container">
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Hi, I'm Marlon Munoz</h1>
              <h2 className="hero-subtitle">Full Stack Software Engineer</h2>
              <p className="hero-description">
                I'm a passionate software engineer who transforms ideas into elegant, 
                user-focused digital solutions. With a unique background spanning creative 
                media and technology, I bring both artistic vision and technical precision 
                to every project I build.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">Pending</span>
                  <span className="stat-label">Content Views</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2020</span>
                  <span className="stat-label">Started Coding</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-photo">
                <img 
                  src="/papamago.jpeg" 
                  alt="Marlon Munoz - Software Engineer"
                  className="profile-img"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder" style={{display: 'none'}}>
                  <span className="profile-icon">👨‍💻</span>
                  <p className="image-note">Add profile.jpg to public folder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section className="journey-section">
          <h3>My Journey</h3>
          <div className="journey-content">
            <div className="journey-item">
              <div className="journey-icon">🎬</div>
              <div className="journey-text">
                <h4>Creative Beginnings</h4>
                <p>
                  Started in the creative industry as a Motion Graphic Designer and Video Editor 
                  at Tommy Boy Entertainment, creating compelling visual content that reached 
                  200K+ viewers across social and music platforms.
                </p>
              </div>
            </div>
            
            <div className="journey-item">
              <div className="journey-icon">💡</div>
              <div className="journey-text">
                <h4>The Transition</h4>
                <p>
                  Discovered my passion for coding and problem-solving, leading me to pursue 
                  full-stack web development. I love how programming combines logical thinking 
                  with creative solutions.
                </p>
              </div>
            </div>
            
            <div className="journey-item">
              <div className="journey-icon">🚀</div>
              <div className="journey-text">
                <h4>Full Stack Developer</h4>
                <p>
                  Completed intensive training at Flatiron School, mastering Python, JavaScript, 
                  React, and Flask. Now building scalable web applications with clean, 
                  maintainable code and user-focused design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="skills-overview">
          <h3>What I Do</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🎨</div>
              <h4>Frontend Development</h4>
              <p>Creating responsive, interactive user interfaces with React, JavaScript, and modern CSS</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h4>Backend Development</h4>
              <p>Building robust APIs and server-side applications using Python, Flask, and SQL databases</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">🔗</div>
              <h4>Full Stack Integration</h4>
              <p>Connecting frontend and backend seamlessly with RESTful APIs and modern development practices</p>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon">📱</div>
              <h4>Responsive Design</h4>
              <p>Ensuring applications work beautifully across all devices and screen sizes</p>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="current-focus">
          <h3>Currently Focused On</h3>
          <div className="focus-content">
            <div className="focus-item">
              <span className="focus-emoji">🌱</span>
              <div>
                <h4>Learning & Growing</h4>
                <p>Expanding my skills in advanced React patterns, Node.js, and cloud deployment</p>
              </div>
            </div>
            
            <div className="focus-item">
              <span className="focus-emoji">🤝</span>
              <div>
                <h4>Collaboration</h4>
                <p>Seeking opportunities to work with innovative teams focused on growth and product excellence</p>
              </div>
            </div>
            
            <div className="focus-item">
              <span className="focus-emoji">💼</span>
              <div>
                <h4>Career Goals</h4>
                <p>Looking for full-time software engineering roles where I can contribute and continue learning</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h3>Let's Build Something Amazing Together</h3>
            <p>
              I'm passionate about creating solutions that make a difference. 
              Check out my work, download my resume, or get in touch!
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="cta-btn primary">View My Projects</a>
              <a href="/resume" className="cta-btn secondary">See My Resume</a>
              <a href="/contact" className="cta-btn outline">Get In Touch</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Portfolio
