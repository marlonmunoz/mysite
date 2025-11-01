import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { FileDown } from 'lucide-react'

const ResumePage = () => {
  const contactInfo = {
    name: 'Marlon Munoz',
    location: 'New York, NY',
    phone: '646-873-0251',
    email: 'marlon@marlonshade.com',
    links: [
      { label: 'Github', url: 'https://github.com/marlonmunoz' },
      { label: 'Blog', url: 'https://dev.to/marlonmunoz' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marlonrmunoz/' }
    ]
  }

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Python', 'JavaScript (ES6+)', 'Flask', 'React', 'SQL', 'HTML/CSS3', 'Bootstrap']
    },
    {
      title: 'Databases & ORMs',
      skills: ['PostgreSQL', 'SQLite', 'SQLAlchemy']
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VSCode', 'Chrome DevTools', 'Postman']
    },
    {
      title: 'Concepts',
      skills: ['Full Stack Development', 'RESTful APIs', 'OOP', 'Responsive Design', 'Agile Development', 'MVC Architecture']
    },
    {
      title: 'Other Tools',
      skills: ['Adobe After Effects', 'Premier Pro']
    }
  ]

  const projects = [
    {
      title: 'X-PENSE',
      subtitle: 'Budget Tracking App with Real-Time Cryptocurrency Updates',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/x-pense-app' },
        { label: 'Live', url: 'https://marlonmunoz.github.io/x-pense-app/' }
      ],
      details: [
        'Designed and implemented a full-stack financial tracking tool using React and Flask',
        'Integrated CoinGecko API to fetch live Bitcoin prices updates',
        'Enhanced cross-device usability with Bootstrap; improved mobile performance by 50%',
        'Employed RESTful architecture and clean component design for maintainability'
      ]
    },
    {
      title: 'IRYNK-App',
      subtitle: 'Educational Toy Recommendation Platform',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/IRYNK-App' }
      ],
      details: [
        'Developed a personalized toy suggestion tool based on age and interest inputs',
        'Engineer a custom Flask API with persistent storage via SQLite',
        'Utilized React hooks and conditional rendering for an intuitive user experience',
        'Resolved client-server CORS issue and ensured robust API communication'
      ]
    },
    {
      title: 'Fox Runner',
      subtitle: 'JavaScript-Based Retro Platform Game',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/Retro_Fox_Runner-_p5' },
        { label: 'Play', url: 'https://marlonmunoz.github.io/Retro_Fox_Runner-_p5/' }
      ],
      details: [
        'Built an interactive 2D game using JavaScript, Object-Oriented Programming, and game physics',
        'Implemented collision detection, scrolling, and level design using Mapper Mate Software',
        'Demonstrated ability to create dynamic, browser-based games and manage complex game logic'
      ]
    }
  ]

  const experience = [
    {
      title: 'Motion Graphic Designer / Video Editor',
      company: 'Tommy Boy Entertainment',
      location: 'New York, NY',
      date: 'Jun 2015 – May 2017',
      website: 'tommyboy.com',
      details: [
        'Created compelling visual content using Adobe After Effects and Premier Pro',
        'Collaborated cross functionally with artists and marketing teams to meet branding goals',
        'Produced videos that generates 200K+ views across social and music platforms'
      ]
    },
    {
      title: 'Caseworker (Temporary Role)',
      company: 'HANAC',
      location: 'New York, NY',
      date: 'Jun 2018 – Aug 2018',
      website: 'hanac.org',
      details: [
        'Provided direct support for senior citizens on housing applications and public service access',
        'Improved intake efficiency by 20% by streamlining internal documentation workflows'
      ]
    }
  ]

  const education = [
    {
      degree: 'Certificate in Full Stack Web Development (Python & JavaScript)',
      school: 'Flatiron School',
      location: 'New York, NY',
      date: 'Jul 2024 – Oct 2024'
    },
    {
      degree: 'Bachelor of Arts in Management of Music Enterprises, Minor: Photography',
      school: 'Baruch College (CUNY)',
      location: 'New York, NY',
      date: 'Aug 2010 – Oct 2015'
    },
    {
      degree: 'Associate of Science in Fine Arts',
      school: 'LaGuardia Community College',
      location: 'New York, NY',
      date: 'Sep 2005 – Jun 2008'
    }
  ]

  return (
    <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <Card className="bg-gradient-to-r from-accent/10 to-primary-600/10 border-accent/20">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{contactInfo.name}</h1>
          <p className="text-sm sm:text-base text-gray-300">
            {contactInfo.location} · {contactInfo.phone}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {contactInfo.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-accent hover:text-accent/80 transition-colors px-2 py-1 break-all"
            >
              {contactInfo.email}
            </a>
          </div>
          <h2 className="text-sm sm:text-base lg:text-xl font-semibold text-accent uppercase tracking-wide">
            Software Engineer | Full Stack Developer
          </h2>
        </div>
      </Card>

      {/* Professional Summary */}
      <Card>
        <Card.Header>
          <Card.Title>Professional Summary</Card.Title>
        </Card.Header>
        <Card.Content>
          <p className="text-gray-300 leading-relaxed">
            Motivated and detail-oriented Software Engineer with hands-on experience in full-stack web development, 
            building RESTful APIs, and deploying responsive web applications. Skilled in Python, Javascript, Flask, 
            and React. Strong foundation in object-oriented programming, Agile methodologies and modern version control 
            workflows (Git/GitHub). Passionate about delivering user-focused, scalable, and maintainable code, 
            Seeking to contribute innovative teams with focus on growth, collaboration, and product excellence.
          </p>
        </Card.Content>
      </Card>

      {/* Technical Skills */}
      <Card>
        <Card.Header>
          <Card.Title className="text-lg sm:text-xl">Technical Skills</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <h4 className="font-semibold text-white text-xs sm:text-sm">{category.title}</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-dark-400/50 text-accent text-xs rounded border border-dark-400 hover:border-accent/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Technical Projects */}
      <Card>
        <Card.Header>
          <Card.Title>Technical Projects</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-accent/30 pl-6 space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <div className="flex gap-3">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="text-accent/80 text-sm italic">{project.subtitle}</p>
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-300 text-sm flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Professional Experience */}
      <Card>
        <Card.Header>
          <Card.Title>Professional Experience</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-accent/30 pl-6 space-y-3">
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-accent font-medium">{exp.company}, {exp.location}</span>
                    <span className="text-gray-400 text-sm">{exp.date}</span>
                  </div>
                  <p className="text-accent/70 text-sm">{exp.website}</p>
                </div>
                <ul className="space-y-2">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-300 text-sm flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* Education & Certifications */}
      <Card>
        <Card.Header>
          <Card.Title>Education & Certifications</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent/30 pl-6 space-y-2">
                <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-accent">{edu.school}, {edu.location}</span>
                  <span className="text-gray-400 text-sm">{edu.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card.Content>
      </Card>

      {/* References & Download */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <Card.Header>
            <Card.Title className="text-lg sm:text-xl">References</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm sm:text-base text-gray-400">Available upon request</p>
          </Card.Content>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-primary-600/10 border-accent/20">
          <Card.Content className="text-center">
            <Button variant="primary" size="lg" className="w-full text-sm sm:text-base">
              <FileDown size={16} className="mr-2" />
              <span className="hidden sm:inline">Download PDF Resume</span>
              <span className="sm:hidden">Download Resume</span>
            </Button>
            <p className="text-gray-400 text-xs sm:text-sm mt-3">
              Get a PDF copy for your records
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default ResumePage