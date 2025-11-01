import React, { useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Input, Textarea } from '../components/ui/Input'
import { Mail, Linkedin, Github, Zap, Globe, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'marlon@marlonshade.com',
      link: 'mailto:marlon@marlonshade.com',
      description: 'Send me an email anytime'
    },
    {
      Icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/marlonrmunoz',
      link: 'https://www.linkedin.com/in/marlonrmunoz/',
      description: 'Let\'s connect professionally'
    },
    {
      Icon: Github,
      title: 'GitHub',
      value: 'github.com/marlonmunoz',
      link: 'https://github.com/marlonmunoz',
      description: 'Check out my code repositories'
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you have a project idea, job opportunity, 
          or just want to connect, feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <Card>
            <Card.Header>
              <Card.Title>Get In Touch</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-400 mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-dark-400/30 transition-colors duration-200"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform duration-200">
                        <method.Icon size={24} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white group-hover:text-accent transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-accent text-sm font-medium">
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>

          {/* Additional Info */}
          <Card className="bg-gradient-to-br from-accent/5 to-primary-600/5 border-accent/20">
            <Card.Content>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-accent">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Quick Response</h4>
                    <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-accent">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400 text-sm">Based in NYC, open to remote work</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-accent">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Let's Chat</h4>
                    <p className="text-gray-400 text-sm">Always excited to discuss new ideas</p>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <Card.Header>
            <Card.Title>Send a Message</Card.Title>
          </Card.Header>
          <Card.Content>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default ContactPage