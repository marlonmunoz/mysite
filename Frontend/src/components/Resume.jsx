import React from 'react'

function Resume() {
  return (
    <div className="content-section">
      <h2>Resume</h2>
      <div className="resume-container">
        
        {/* Contact Info Header */}
        <section className="resume-section contact-header">
          <div className="contact-info-header">
            <h3>Marlon Munoz</h3>
            <p>New York, NY · 646-873-0251</p>
            <div className="contact-links">
              <a href="https://github.com/marlonmunoz" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://dev.to/marlonmunoz" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="https://www.linkedin.com/in/marlonrmunoz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:marlon@marlonshade.com">marlon@marlonshade.com</a>
            </div>
            <h4 className="title">SOFTWARE ENGINEER | FULL STACK DEVELOPER</h4>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="resume-section">
          <h3>Professional Summary</h3>
          <p className="summary-text">
            Motivated and detail-oriented Software Engineer with hands-on experience in full-stack web development, 
            building RESTful APIs, and deploying responsive web applications. Skilled in Python, Javascript, Flask, 
            and React. Strong foundation in object-oriented programming, Agile methodologies and modern version control 
            workflows (Git/GitHub). Passionate about delivering user-focused, scalable, and maintainable code, 
            Seeking to contribute innovative teams with focus on growth, collaboration, and product excellence.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages & Frameworks</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS3</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Databases & ORMs</h4>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">SQLAlchemy</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Developer Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VSCode</span>
                <span className="skill-tag">Chrome DevTools</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Concepts</h4>
              <div className="skill-tags">
                <span className="skill-tag">Full Stack Development</span>
                <span className="skill-tag">RESTful APIs</span>
                <span className="skill-tag">OOP</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Agile Development</span>
                <span className="skill-tag">MVC Architecture</span>
              </div>
            </div>

            <div className="skill-category">
              <h4>Other Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Adobe After Effects</span>
                <span className="skill-tag">Premier Pro</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Projects */}
        <section className="resume-section">
          <h3>Technical Projects</h3>
          
          <div className="project-item">
            <div className="project-header">
              <h4>X-PENSE</h4>
              <div className="project-links">
                <a href="https://github.com/marlonmunoz/x-pense-app" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://marlonmunoz.github.io/x-pense-app/" target="_blank" rel="noopener noreferrer">Open</a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">Demo</a> */}
              </div>
            </div>
            <p className="project-subtitle">Budget Tracking App with Real-Time Cryptocurrency Updates</p>
            <ul className="project-details">
              <li>Designed and implemented a full-stack financial tracking tool using React and Flask</li>
              <li>Integrated CoinGecko API to fetch live Bitcoin prices updates</li>
              <li>Enhanced cross-device usability with Bootstrap; improved mobile performance by 50%</li>
              <li>Employed RESTful architecture and clean component design for maintainability</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4>IRYNK-App</h4>
              <div className="project-links">
                <a href="https://github.com/marlonmunoz/IRYNK-App" target="_blank" rel="noopener noreferrer">Github</a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">Demo</a> */}
              </div>
            </div>
            <p className="project-subtitle">Educational Toy Recommendation Platform</p>
            <ul className="project-details">
              <li>Developed a personalized toy suggestion tool based on age and interest inputs</li>
              <li>Engineer a custom Flask API with persistent storage via SQLite</li>
              <li>Utilized React hooks and conditional rendering for an intuitive user experience</li>
              <li>Resolved client-server CORS issue and ensured robust API communication</li>
            </ul>
          </div>

          <div className="project-item">
            <div className="project-header">
              <h4>Fox Runner</h4>
              <div className="project-links">
                <a href="https://github.com/marlonmunoz/Retro_Fox_Runner-_p5" target="_blank" rel="noopener noreferrer">Github</a>
                {/* <a href="#" target="_blank" rel="noopener noreferrer">Demo</a> */}
                <a href="https://marlonmunoz.github.io/Retro_Fox_Runner-_p5/" target="_blank" rel="noopener noreferrer">Play</a>
              </div>
            </div>
            <p className="project-subtitle">JavaScript-Based Retro Platform Game</p>
            <ul className="project-details">
              <li>Built an interactive 2D game using JavaScript, Object-Oriented Programming, and game physics</li>
              <li>Implemented collision detection, scrolling, and level design using Mapper Mate Software</li>
              <li>Demonstrated ability to create dynamic, browser-based games and manage complex game logic</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="resume-section">
          <h3>Professional Experience</h3>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4>Motion Graphic Designer / Video Editor</h4>
              <span className="company">Tommy Boy Entertainment, New York, NY</span>
              <span className="date">Jun 2015 – May 2017</span>
            </div>
            <p className="company-website">tommyboy.com</p>
            <ul className="experience-details">
              <li>Created compelling visual content using Adobe After Effects and Premier Pro</li>
              <li>Collaborated cross functionally with artists and marketing teams to meet branding goals</li>
              <li>Produced videos that generates 200K+ views across social and music platforms</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h4>Caseworker (Temporary Role)</h4>
              <span className="company">HANAC, New York, NY</span>
              <span className="date">Jun 2018 – Aug 2018</span>
            </div>
            <p className="company-website">hanac.org</p>
            <ul className="experience-details">
              <li>Provided direct support for senior citizens on housing applications and public service access</li>
              <li>Improved intake efficiency by 20% by streamlining internal documentation workflows</li>
            </ul>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="resume-section">
          <h3>Education & Certifications</h3>
          
          <div className="education-item">
            <div className="education-header">
              <h4>Certificate in Full Stack Web Development (Python & JavaScript)</h4>
              <span className="school">Flatiron School, New York, NY</span>
              <span className="date">Jul 2024 – Oct 2024</span>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h4>Bachelor of Arts in Management of Music Enterprises, Minor: Photography</h4>
              <span className="school">Baruch College (CUNY), New York, NY</span>
              <span className="date">Aug 2010 – Oct 2015</span>
            </div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <h4>Associate of Science in Fine Arts</h4>
              <span className="school">LaGuardia Community College, New York, NY</span>
              <span className="date">Sep 2005 – Jun 2008</span>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="resume-section">
          <h3>References</h3>
          <p className="references-text">Available upon request</p>
        </section>

        {/* Download Resume Button */}
        <section className="resume-section">
          <div className="resume-download">
            <button className="download-btn">
              <span className="download-icon">📄</span>
              Download PDF Resume
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Resume
