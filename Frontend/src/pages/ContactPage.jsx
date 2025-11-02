import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
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
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          title: `New message from ${formData.name}`,
          name: formData.name,
          email: formData.email, // Changed from from_email to email
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Contact Me</h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
          I'd love to hear from you! Whether you have a project idea, job opportunity, 
          or just want to connect, feel free to reach out.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <Card>
            <Card.Header>
              <Card.Title className="text-lg sm:text-xl">Get In Touch</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development.
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <a 
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : undefined}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-dark-400/30 transition-colors duration-200"
                    >
                      <div className="text-accent group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                        <method.Icon size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h4 className="font-semibold text-white group-hover:text-accent transition-colors text-sm sm:text-base">
                          {method.title}
                        </h4>
                        <p className="text-accent text-xs sm:text-sm font-medium break-all">
                          {method.value}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm">
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
        <div className="order-1 lg:order-2">
          <Card>
            <Card.Header>
              <Card.Title className="text-lg sm:text-xl">Send a Message</Card.Title>
            </Card.Header>
            <Card.Content>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                    <p className="text-sm">✅ Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                    <p className="text-sm">❌ Failed to send message. Please try again or contact me directly.</p>
                  </div>
                )}

                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="sm:rows-5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ContactPage