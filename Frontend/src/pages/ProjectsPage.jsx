import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { ExternalLink, Folder, Github, Rocket } from 'lucide-react'

const ProjectsPage = () => {
  const projects = [
    {
      title: 'University of Richmond Assistant (chatbot)',
      description: 'Production-grade RAG chatbot for University of Richmond policy queries with ChromaDB cloud vector storage and OpenAI embeddings. Features persistent conversation memory using LangGraph with PostgreSQL for stateful multi-turn dialogues.',
      technologies: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB Cloud', 'OpenAI API', 'PostgreSQL', 'React', 'Tailwind CSS'],
      status: 'live',
      sourceUrl: 'https://github.com/marlonmunoz/chatbot_richmond_policies',
      image: '/projects/RPA.png',
      highlights: [
        'RAG-powered policy Q&A system with contextual understanding',
        'Persistent conversation memory with PostgreSQL',
        'Modular FastAPI backend with clean architecture',
        'React/Tailwind frontend with dark/light mode support',
        'Citation-grounded responses for accuracy'
      ]
    },
    {
      title: 'Data Ingestion Sub System',
      description: 'Python-based ETL orchestration system with automated workflows for multi-source data ingestion (CSV, JSON, REST APIs) into PostgreSQL staging tables with comprehensive validation, deduplication, and audit logging.',
      technologies: ['Python', 'PostgreSQL', 'Pandas', 'Pydantic', 'Docker', 'GitHub Actions', 'Pytest'],
      status: 'live',
      sourceUrl: 'https://github.com/marlonmunoz/data-ingestion-subsystem-project',
      image: '/projects/data-ingestion.png',
      highlights: [
        'ETL pipeline extracting living wage data via web scraping and US Census Bureau API',
        'PostgreSQL schema with staging tables, reject tracking, and Flyway migrations',
        'Caching, retry logic with exponential backoff, and rate limiting for reliable extraction',
        'Transformed wide-format HTML tables to normalized records using Pandas and Pydantic',
        'Containerized PostgreSQL with Docker and CI/CD pipeline with GitHub Actions'
      ]
    },
    {
      title: 'Sentiment Classification API',
      description: 'AI-powered NLP system performing multi-class sentiment classification using transformer-based architectures with end-to-end ML workflows including preprocessing, fine-tuning, evaluation, and production API deployment.',
      technologies: ['Python', 'TensorFlow', 'Hugging Face Transformers', 'FastAPI', 'Docker', 'NLP', 'RoBERTa'],
      status: 'live',
      sourceUrl: 'https://github.com/Carlomos7/review-sentiment-analyzer',
      image: '/projects/Sentio.png',
      highlights: [
        'Fine-tuned transformer models (RoBERTa-based) for sentiment classification on e-commerce review data',
        'Implemented text preprocessing, tokenization, and label mapping pipelines for supervised learning',
        'Evaluated model performance using accuracy and loss metrics, iterating on training strategies',
        'Exposed trained models through FastAPI service for real-time sentiment inference',
        'Containerized application using Docker for consistent deployment workflows'
      ]
    },
    {
      title: 'Cloud-Based RAG System',
      description: 'Comprehensive RAG pipeline leveraging AWS Bedrock and vector database technology for semantic search and contextually-grounded LLM responses with cloud-native integration patterns.',
      technologies: ['Python', 'AWS Bedrock', 'Claude LLM', 'ChromaDB', 'LangChain', 'Vector Embeddings', 'boto3'],
      status: 'live',
      sourceUrl: 'https://github.com/marlonmunoz',
      image: '/projects/cloud-rag.png',
      highlights: [
        'Designed multi-phase RAG pipeline covering ingestion, embedding, retrieval, and generation',
        'Performed semantic chunking on source text to improve embedding quality and retrieval relevance',
        'Generated embeddings and stored them in ChromaDB vector store configured for cloud usage',
        'Integrated AWS Bedrock using Claude model for response generation grounded in retrieved context',
        'Implemented retrieval logic combining vector search with prompt construction for LLM inference',
        'Managed cloud configuration and authentication using AWS SDK (boto3)'
      ]
    },
    {
      title: 'Vector-Based RAG API Platform',
      description: 'Production-grade backend AI infrastructure implementing RAG API for natural language querying over domain-specific knowledge bases through semantic search and generative AI with clean architecture principles.',
      technologies: ['Python', 'FastAPI', 'ChromaDB', 'AWS Bedrock', 'LangChain', 'Docker', 'RAG Architecture'],
      status: 'live',
      sourceUrl: 'https://github.com/marlonmunoz',
      image: '/projects/rag-api.png',
      highlights: [
        'Designed modular RAG backend using FastAPI with separated ingestion, retrieval, and query layers',
        'Integrated ChromaDB as vector store for embedding persistence and semantic search',
        'Implemented document ingestion pipelines with configurable chunking and metadata handling',
        'Built query workflows combining vector similarity search with prompt construction for grounded LLM responses',
        'Integrated AWS Bedrock as LLM provider with client abstraction for model interaction',
        'Applied structured configuration management using environment-based settings and validation',
        'Containerized application with Docker for consistent deployment'
      ]
    },
    {
      title: 'X-PENSE',
      description: 'X-PENSE is a sophisticated full-stack financial management solution that combines modern web technologies with AI capabilities to provide intelligent expense tracking and financial insights!',
      technologies: ['JavaScript(ES6+)', 'Python', 'React', 'Flask', 'PostgreSQL', 'HTML', 'CSS3', 'Tailwind', 'Bootstrap',],
      status: 'live',
      liveUrl: 'https://marlonmunoz.github.io/x-pense-app',
      sourceUrl: 'https://github.com/marlonmunoz/x-pense-app',
      image: '/projects/x-pense-site.png',
      highlights: ['AI Powered Transaction Categorization', 'Interactive Financial Dashbaord', 'Smart Balance Management', 'Goal Tracking & Progress Visualization',  'Live Cryptocurrency Investment Tracking',  'Advanced UI/UX Darl/Light Mode',  'Comprehensive Transaction Managemnet',  'AI Demo and Natural Language Queries',],
      bonusFeatures: ['Professional deployment on Railway (backend) and GitHub Pages (frontend)', 'Input validation and error handling throughout', 'Mobile-responsive design with dedicated mobile navigation', 'RESTful API integration with Flask backend and React frontend']
    },
    {
      title: 'RETRO FOX-RUNNER',
      description: 'Retro Fox Runner is a 2D platformer featuring a fox navigating a retro-styled world. Players jump, run, and roll to defeat enemies while collecting gems. The game includes a heart-based health system and smooth physics-based movement. Built with vanilla JavaScript, it demonstrates clean game development architecture.',
      technologies: ['p5.js', 'JavaScript', 'HTML', 'CSS'],
      status: 'live',
      liveUrl: 'https://marlonmunoz.github.io/Retro_Fox_Runner-_p5/',
      sourceUrl: 'https://github.com/marlonmunoz/Retro_Fox_Runner-_p5',
      image: '/projects/fox-runner-game.png',
      highlights: ['Advanced Player Movement System', 'Diverse Enemy System', 'Multi-Layer Parallax System', 'Advanced Camera & Scrolling System', 'Comprehensive Collectibles & Progression', 'Health & Life Management System', 'Rich Audio & Interactive Controls', 'Professional Game Architecture',],
      bonusFeatures: ['Retro Pixels Art Aesthetic', 'Sophisticated Collision System', 'Performance Optimizations', 'Extensible Architecture: Ready for additional levels']
    },
    {
      title: 'CALCULATOR',
      description: 'A sleek, functional calculator application with a clean interface and smooth animations. Supports all basic mathematical operations.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      status: 'live',
      liveUrl: 'https://marlonmunoz.github.io/calculator_project/',
      sourceUrl: 'https://github.com/marlonmunoz/calculator_project',
      image: '/projects/50-cal.png',
      highlights: ['Clean UI', 'Keyboard support', 'Error handling']
    },
    {
      title: 'IRYNK-App',
      description: "is a full-stack web application that helps parents select developmentally appropriate toys for children aged 0-24 months. The platform features intelligent categorization across 10 developmental areas including sensory, cognitive, and motor skills with advanced search and filtering capabilities. Built with React and Flask, the app offers complete toy management functionality and expert-curated recommendations. This tool empowers parents to make informed decisions about toys that support their child's specific developmental milestones.",
      technologies: ['JavaScript(ES6)','React', 'Python', 'SQLAlchemy', 'PostgreSQL', 'HTML', 'CSS3', 'Bootstrap'],
      status: 'development',
      sourceUrl: 'https://github.com/marlonmunoz/IRYNK-App',
      image: '/projects/irynk.png',
      highlights: ['Advanced Search & Filtering System', 'Age-Specific Toy Recommendations', 'Interactive Like / Favorite System', 'Add New Toys Feature', 'Contact & Comunication Systems', 'Responsive Design & Navigation', 'Full-Stack Architecture & API'],
      bonusFeatures: ['Duplicate Prevention', 'Error Handling', 'Technology stack', 'Development Tools']
    },
    {
      title: 'Real Estate Platform',
      description: 'HomeTrade is a comprehensive real estate platform that enables direct buyer-seller connections through a modern, responsive web application.',
      technologies: ['JavaScript(ES6)','React', 'Python', 'SQLAlchemy', 'PostgreSQL', 'HTML', 'CSS3', 'Tailwind'],
      status: 'development',
      sourceUrl: 'https://github.com/marlonmunoz/home-trade-MVP-app',
      image: '/projects/irynk.png',
      highlights: ['Role-Based Authentication System ', 'Advanced Property Search & Filtering', 'Complete Property Management','Interactive User Onboarding', 'Sophisticated Theme System',  'Mobile-First Responsive Design', 'Modern UI/UX with Animations']
    },
    {
      title: 'themarloncode.com',
      description: '',
      technologies: ['JavaScript(ES6)','React', 'HTML', 'CSS3', 'Tailwind'],
      status: 'live',
      sourceUrl: 'https://github.com/marlonmunoz/mysite',
      image: '/projects/irynk.png',
      highlights: ['Dynamic Theme Toggle', 'Functional Contact Form', 'Responsive Design Systems', 'Professional Portfolio Layout', 'Real-Time Form Validation', 'Mobile-First Responsive Design', 'Modern UI/UX with Animations', 'Optimized Performance', ]
    }

  ]

  const getStatusBadge = (status) => {
    if (status === 'live') {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Live
        </span>
      )
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
        In Development
      </span>
    )
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
          A collection of applications I've built, showcasing my skills in frontend development, 
          game development, and full-stack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:border-accent/30 overflow-hidden">
            {/* Project Image */}
            <div className="relative h-40 sm:h-48 mb-4 sm:mb-6 bg-gradient-to-br from-accent/10 to-primary-600/10 rounded-lg overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-full h-full bg-dark-400 flex items-center justify-center" 
                style={{display: 'none'}}
              >
                <div className="text-accent opacity-50">
                  <Rocket size={48} className="sm:w-16 sm:h-16" />
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                {getStatusBadge(project.status)}
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-dark-400/50 text-accent text-xs rounded-md border border-gray-300 dark:border-dark-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Key Features:</h4>
                <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                {project.bonusFeatures && (
                  <>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Bonus Features:</h4>
                    <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {project.bonusFeatures.map((bonusFeature, bonusIndex) => (
                        <li key={bonusIndex} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0"></span>
                          {bonusFeature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3 sm:pt-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" className="w-full text-sm">
                      <ExternalLink size={14} className="mr-2" />
                      <span className="hidden sm:inline">View Live</span>
                      <span className="sm:hidden">Live</span>
                    </Button>
                  </a>
                )}
                <a 
                  href={project.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={project.liveUrl ? "flex-1" : "w-full"}
                >
                  <Button variant="outline" className="w-full text-sm">
                    <Github size={14} className="mr-2" />
                    <span className="hidden sm:inline">Source Code</span>
                    <span className="sm:hidden">Code</span>
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-accent/5 to-primary-600/5 dark:from-accent/5 dark:to-primary-600/5 border-accent/20">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">More Projects Coming Soon</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 px-4">
              I'm constantly working on new projects and learning new technologies. 
              Check back soon for updates, or follow my GitHub for the latest developments.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/marlonmunoz" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="text-sm sm:text-base">
                  <Github size={16} className="mr-2" />
                  <span className="hidden sm:inline">Follow on GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ProjectsPage