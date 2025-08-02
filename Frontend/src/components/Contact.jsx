import React from 'react'

function Contact() {
  return (
    <div className="content-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>I'd love to hear from you! Whether you have a project idea, job opportunity, or just want to connect.</p>
          
          <div className="contact-methods">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
