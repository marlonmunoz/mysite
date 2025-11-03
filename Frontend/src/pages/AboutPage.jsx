import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { 
  Film, 
  Lightbulb, 
  Rocket, 
  Palette, 
  Settings, 
  Link as LinkIcon, 
  Smartphone,
  Sprout,
  Users,
  Briefcase
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '4+', label: 'Projects Built' },
    { number: 'Pending', label: 'Content Views' },
    { number: '2020', label: 'Started Coding' }
  ]

  const journeyItems = [
    {
      Icon: Film,
      title: 'Creative Beginnings',
      description: 'Started in the creative industry as a Motion Graphic Designer and Video Editor at Tommy Boy Entertainment, creating compelling visual content that reached 200K+ viewers across social and music platforms.'
    },
    {
      Icon: Lightbulb,
      title: 'The Transition',
      description: 'Discovered my passion for coding and problem-solving, leading me to pursue full-stack web development. I love how programming combines logical thinking with creative solutions.'
    },
    {
      Icon: Rocket,
      title: 'Full Stack Developer',
      description: 'Completed intensive training at Flatiron School, mastering Python, JavaScript, React, and Flask. Now building scalable web applications with clean, maintainable code and user-focused design.'
    }
  ]

  const skills = [
    {
      Icon: Palette,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, JavaScript, modern CSS3, Bootstrap and Tailwind'
    },
    {
      Icon: Settings,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications using Python, Flask, and SQL databases'
    },
    {
      Icon: LinkIcon,
      title: 'Full Stack Integration',
      description: 'Connecting frontend and backend seamlessly with RESTful APIs and modern development practices'
    },
    {
      Icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensuring applications work beautifully across all devices and screen sizes'
    }
  ]

  const focusAreas = [
    {
      Icon: Sprout,
      title: 'Learning & Growing',
      description: 'Expanding my skills in advanced React patterns, Node.js, and cloud deployment'
    },
    {
      Icon: Users,
      title: 'Collaboration',
      description: 'Seeking opportunities to work with innovative teams focused on growth and product excellence'
    },
    {
      Icon: Briefcase,
      title: 'Career Goals',
      description: 'Looking for full-time software engineering roles where I can contribute and continue learning'
    }
  ]

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:order-1">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-accent">Marlon Munoz</span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
              Full-Stack Developer / Software Engineer 
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I'm a passionate software engineer who transforms ideas into elegant, 
              user-focused digital solutions. With a unique background spanning creative 
              media and technology, I bring both artistic vision and technical precision 
              to every project I build.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end lg:order-2">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary-600/20 p-1">
              <img 
                src="/papamago.jpeg" 
                alt="Marlon Munoz - Software Engineer"
                className="w-full h-full object-contain rounded-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-full h-full bg-dark-300 rounded-xl flex flex-col items-center justify-center text-center p-6" 
                style={{display: 'none'}}
              >
                <div className="text-6xl mb-4 text-accent">
                  <Settings size={64} />
                </div>
                <p className="text-gray-400 text-sm">Add profile.jpg to public folder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">My Journey</h3>
        <div className="space-y-4 sm:space-y-6">
          {journeyItems.map((item, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <item.Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* What I Do Section */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">What I Do</h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="space-y-4">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  <skill.Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white">{skill.title}</h4>
                <p className="text-sm sm:text-base text-gray-400">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Currently Focused On</h3>
        <div className="space-y-4 sm:space-y-6">
          {focusAreas.map((item, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <item.Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 sm:space-y-8">
        <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary-600/5">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
              I'm passionate about creating solutions that make a difference. 
              Check out my work, download my resume, or get in touch!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  View My Projects
                </Button>
              </Link>
              <Link to="/resume" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  See My Resume
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}

export default AboutPage