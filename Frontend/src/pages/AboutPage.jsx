import React, { useState, useEffect } from 'react'
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
  Briefcase,
  Code,
  Terminal,
  Cpu,
  Database,
  GitBranch,
  Zap
} from 'lucide-react'

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, startYear: 2025 })
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const dynamicWords = ['passionate', 'innovative', 'detail-oriented', 'creative', 'problem-solving']

  useEffect(() => {
    setIsVisible(true)
    
    // Animate the stats count up
    const animateCount = (target, key, duration = 1000) => {
      const start = 0
      const increment = target / (duration / 50)
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 50)
    }

    // Animate counting down for start year
    const animateCountDown = (startValue, targetValue, key, duration = 1000) => {
      const decrement = (startValue - targetValue) / (duration / 50)
      let current = startValue
      
      const timer = setInterval(() => {
        current -= decrement
        if (current <= targetValue) {
          current = targetValue
          clearInterval(timer)
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, 50)
    }

    // Start animations after component mounts
    setTimeout(() => {
      animateCount(6, 'projects')
      animateCountDown(2025, 2020, 'startYear') // Count down from 2025 to 2020
    }, 500)

    // Typing effect for dynamic words
    const typeWord = () => {
      const currentWord = dynamicWords[currentWordIndex]
      let charIndex = 0
      
      const typeTimer = setInterval(() => {
        if (charIndex <= currentWord.length) {
          setDisplayedText(currentWord.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeTimer)
          setTimeout(() => {
            // Start erasing
            const eraseTimer = setInterval(() => {
              if (charIndex > 0) {
                setDisplayedText(currentWord.slice(0, charIndex - 1))
                charIndex--
              } else {
                clearInterval(eraseTimer)
                setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
              }
            }, 100)
          }, 2000) // Wait 2 seconds before erasing
        }
      }, 150)
    }

    const wordTimer = setTimeout(typeWord, 1500)
    
    return () => {
      clearTimeout(wordTimer)
    }
  }, [currentWordIndex])

  const stats = [
    { number: `${counts.projects}+`, label: 'Projects Built' },
    { number: 'Pending', label: 'Content Views' },
    { number: `${counts.startYear}`, label: 'Started Coding' }
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
    <div className="space-y-12 sm:space-y-16 relative overflow-hidden">
      {/* Floating tech elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code brackets - left side */}
        <div className="absolute top-20 left-10 text-accent/20 animate-bounce text-4xl font-mono">{'{'}</div>
        <div className="absolute top-24 left-14 text-accent/20 animate-bounce delay-500 text-4xl font-mono">{'}'}</div>
        <div className="absolute top-96 left-8 text-primary-600/15 animate-bounce delay-1000 text-3xl font-mono">{'['}</div>
        <div className="absolute top-100 left-12 text-primary-600/15 animate-bounce delay-1500 text-3xl font-mono">{']'}</div>
        
        {/* Code brackets - right side */}
        <div className="absolute top-32 right-16 text-accent/15 animate-bounce delay-700 text-4xl font-mono">{'<'}</div>
        <div className="absolute top-36 right-20 text-accent/15 animate-bounce delay-1200 text-4xl font-mono">{'>'}</div>
        <div className="absolute bottom-96 right-12 text-primary-600/20 animate-bounce delay-2000 text-3xl font-mono">{'('}</div>
        <div className="absolute bottom-100 right-16 text-primary-600/20 animate-bounce delay-2500 text-3xl font-mono">{')'}</div>
        
        {/* Tech icons floating - top area */}
        <div className="absolute top-40 right-20 text-primary-600/30 animate-pulse">
          <Code size={24} className="animate-spin-slow" />
        </div>
        <div className="absolute top-16 left-1/3 text-accent/25 animate-pulse delay-800">
          <Terminal size={22} />
        </div>
        <div className="absolute top-28 right-1/4 text-primary-600/20 animate-bounce delay-400">
          <Cpu size={18} />
        </div>
        
        {/* Tech icons floating - middle area */}
        <div className="absolute top-1/2 right-1/3 text-primary-600/20 animate-ping">
          <Cpu size={16} />
        </div>
        <div className="absolute top-1/2 left-1/4 text-accent/30 animate-pulse delay-1100">
          <GitBranch size={26} />
        </div>
        <div className="absolute top-2/3 right-1/5 text-primary-600/25 animate-bounce delay-1600">
          <Database size={20} />
        </div>
        
        {/* Tech icons floating - bottom area */}
        <div className="absolute bottom-40 left-20 text-accent/25 animate-bounce delay-1000">
          <Terminal size={20} />
        </div>
        <div className="absolute bottom-60 right-40 text-accent/30 animate-pulse delay-700">
          <Database size={18} />
        </div>
        <div className="absolute bottom-32 left-1/3 text-accent/20 animate-pulse delay-1500">
          <Zap size={20} />
        </div>
        <div className="absolute bottom-20 right-1/4 text-primary-600/25 animate-bounce delay-300">
          <GitBranch size={24} />
        </div>
        <div className="absolute bottom-80 left-1/5 text-accent/20 animate-ping delay-2200">
          <Code size={22} />
        </div>
        
        {/* Additional scattered icons */}
        <div className="absolute top-32 right-1/2 text-primary-600/25 animate-bounce delay-300">
          <GitBranch size={22} />
        </div>
        <div className="absolute top-3/4 left-10 text-accent/15 animate-pulse delay-1800">
          <Zap size={18} />
        </div>
        <div className="absolute top-1/4 left-2/3 text-primary-600/20 animate-spin-slow">
          <Settings size={16} />
        </div>
        
        {/* Code snippets - scattered around */}
        <div className="absolute top-60 left-5 text-accent/15 font-mono text-sm animate-pulse delay-2000">
          const
        </div>
        <div className="absolute bottom-20 right-10 text-primary-600/15 font-mono text-sm animate-pulse delay-1200">
          =&gt;
        </div>
        <div className="absolute top-80 right-5 text-accent/15 font-mono text-sm animate-bounce delay-800">
          ()
        </div>
        <div className="absolute top-1/3 left-8 text-primary-600/12 font-mono text-xs animate-pulse delay-1600">
          function
        </div>
        <div className="absolute bottom-1/3 right-8 text-accent/12 font-mono text-xs animate-bounce delay-2400">
          return
        </div>
        <div className="absolute top-2/3 right-1/6 text-primary-600/15 font-mono text-sm animate-pulse delay-900">
          ;
        </div>
        <div className="absolute bottom-60 left-1/6 text-accent/15 font-mono text-sm animate-bounce delay-1300">
          &&
        </div>
        <div className="absolute top-48 left-2/3 text-primary-600/12 font-mono text-xs animate-pulse delay-1900">
          import
        </div>
      </div>

      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 lg:order-1">
          <div className="space-y-4">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              Hi, I'm <span className="text-accent bg-gradient-to-r from-accent to-primary-600 bg-clip-text animate-pulse">Marlon Munoz</span>
            </h1>
            <h2 className={`text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-light transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              Full-Stack Developer / Software Engineer 
            </h2>
            <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}>
              I'm a <span className="text-accent font-medium transition-all duration-500">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span> software engineer who transforms ideas into elegant, 
              user-focused digital solutions. With a unique background spanning creative 
              media and technology, I bring both artistic vision and technical precision 
              to every project I build.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center transform transition-all duration-1000 delay-${index * 200} group cursor-pointer ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="text-xl sm:text-2xl font-bold text-accent group-hover:scale-125 group-hover:text-primary-600 transition-all duration-300 relative">
                  {stat.number}
                  <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-110 transition-all duration-300 -z-10"></div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Profile Image */}
        {/* <div className="flex justify-center lg:justify-end lg:order-2"> */}
          {/* <div className="relative"> */}
            {/* <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary-600/20 p-1">
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
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </section>

      {/* My Journey Section */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">My Journey</h3>
        <div className="space-y-4 sm:space-y-6">
          {journeyItems.map((item, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <item.Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* What I Do Section */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">What I Do</h3>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="space-y-4">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  <skill.Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section className="space-y-6 sm:space-y-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">Currently Focused On</h3>
        <div className="space-y-4 sm:space-y-6">
          {focusAreas.map((item, index) => (
            <Card key={index} className="group hover:border-accent/30">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <item.Icon size={24} className="sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 sm:space-y-8">
        <Card className="border-accent/20 bg-gradient-to-r from-accent/5 to-primary-600/5 dark:from-accent/5 dark:to-primary-600/5">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
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