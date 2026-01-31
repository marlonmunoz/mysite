import React from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { FileDown } from 'lucide-react'

const ResumePage = () => {
  const contactInfo = {
    name: 'Marlon Munoz',
    location: 'New York, NY',
    email: 'marlon@marlonshade.com',
    links: [
      { label: 'Github', url: 'https://github.com/marlonmunoz' },
      { label: 'Blog', url: 'https://dev.to/marlonmunoz' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marlonrmunoz/' }
    ]
  }

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'Keras', 'Deep Learning', 'NLP', 'Transfer Learning', 'Transformer Models', 'Prompt Engineering', 'RAG Architecture', 'Vector Embeddings', 'LangChain', 'LangGraph', 'LangSmith']
    },
    {
      title: 'Data Engineering',
      skills: ['Python', 'Pandas', 'NumPy', 'PostgreSQL', 'Data Cleaning & Transformation', 'Data Validation', 'ETL Pipelines', 'Data Modeling', 'Dimensional Modeling']
    },
    {
      title: 'Languages & Frameworks',
      skills: ['Python', 'JavaScript (ES6+)', 'React', 'Flask', 'FastAPI', 'SQL', 'HTML', 'CSS3', 'Tailwind', 'Bootstrap']
    },
    {
      title: 'AI Infrastructure & Tools',
      skills: ['AWS Bedrock', 'Claude LLM', 'ChromaDB', 'Vector Databases', 'Hugging Face Transformers', 'boto3']
    },
    {
      title: 'Databases & Storage',
      skills: ['PostgreSQL', 'SQLite', 'SQLAlchemy', 'ChromaDB', 'AWS S3']
    },
    {
      title: 'Developer Tools & DevOps',
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'GitHub Actions', 'Postman', 'VSCode', 'Chrome DevTools', 'Pytest']
    },
    {
      title: 'Concepts',
      skills: ['RESTful APIs', 'OOP', 'Agile/Scrum', 'MVC Architecture', 'Microservices', 'Clean Architecture', 'Model Training & Evaluation']
    },
    {
      title: 'Other Tools',
      skills: ['Adobe After Effects', 'Premier Pro','Adobe Photoshop','Adobe Illustrator']
    }
  ]

  const projects = [
    {
      title: 'University of Richmond Chatbot',
      subtitle: 'RAG-Powered Policy Q&A System',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/chatbot_richmond_policies' }
      ],
      details: [
        'Production-grade RAG chatbot for University of Richmond policy queries with ChromaDB cloud vector storage and OpenAI embeddings',
        'Implemented persistent conversation memory using LangGraph with PostgreSQL for stateful multi-turn dialogues',
        'Built modular FastAPI backend with React/Tailwind frontend featuring dark/light mode and citation-grounded responses',
        'Tech Stack: FastAPI, LangGraph, ChromaDB Cloud, OpenAI API, PostgreSQL, React, Tailwind CSS'
      ]
    },
    {
      title: 'X-PENSE',
      subtitle: 'AI Powered Budget Tracking App with Interactive AI Assistant',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/x-pense-app' },
        { label: 'Demo', url: 'https://marlonmunoz.github.io/x-pense-app/' }
      ],
      details: [
        'Full-stack financial tracking tool with interactive AI Assistant using NLP for natural language financial data queries',
        'Built with React and Flask; enhanced cross-device usability with Bootstrap (50% mobile performance improvement)',
        'Employed RESTful architecture and clean component design for maintainability'
      ]
    },
    {
      title: 'IRYNK-App',
      subtitle: 'Educational Toy Recommendation Platform',
      links: [
        { label: 'Github', url: 'https://github.com/marlonmunoz/IRYNK-App' },
        { label: 'Demo', url: '#' }
      ],
      details: [
        'Personalized toy suggestion tool with custom Flask API and SQLite persistent storage',
        'Utilized React hooks and conditional rendering for intuitive UX; resolved CORS issues for robust API communication'
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
        'Interactive 2D game using JavaScript OOP and game physics with collision detection, scrolling, and level design'
      ]
    }
  ]

  const experience = [
    {
      title: 'AI Engineering / Data Engineering',
      company: 'Revature',
      location: 'On-Site',
      date: 'Nov 2025 – Jan 2026',
      website: 'revature.com',
      projects: [
        {
          name: 'Data Ingestion Sub System',
          description: 'Python-based ETL orchestration system with automated workflows for multi-source data ingestion (CSV, JSON, REST APIs) into PostgreSQL staging tables with comprehensive validation, deduplication, and audit logging.',
          links: [
            {label: 'Github', url: 'https://github.com/marlonmunoz/data-ingestion-subsystem-project'}
          ],
          bullets: [
            'Built ETL pipeline extracting living wage data via web scraping and US Census Bureau API',
            'Designed PostgreSQL schema with staging tables, reject tracking, and Flyway migrations',
            'Implemented caching, retry logic with exponential backoff, and rate limiting for reliable extraction',
            'Transformed wide-format HTML tables to normalized records using Pandas and Pydantic validation',
            'Containerized PostgreSQL with Docker and set up CI/CD pipeline with GitHub Actions'
          ],
          environment: 'Python, PostgreSQL, Pandas, Docker, Git, Agile-Scrum, Pytest, Data Modeling'
        },
        {
          name: 'Sentiment Classification API for Customer Reviews',
          description: 'AI-powered NLP system performing multi-class sentiment classification using transformer-based architectures with end-to-end ML workflows including preprocessing, fine-tuning, evaluation, and production API deployment.',
          links: [
            {label: 'Github', url: 'https://github.com/Carlomos7/review-sentiment-analyzer'}
          ],
          bullets: [
            'Fine-tuned transformer models (RoBERTa-based) for sentiment classification on e-commerce review data',
            'Implemented text preprocessing, tokenization, and label mapping pipelines for supervised learning',
            'Evaluated model performance using accuracy and loss metrics, iterating on training strategies',
            'Exposed trained models through FastAPI service for real-time sentiment inference',
            'Containerized application using Docker for consistent deployment workflows'
          ],
          environment: 'Python, TensorFlow, Hugging Face Transformers, FastAPI, Docker, Git, NLP'
        },
        {
          name: 'Cloud-Based Retrieval-Augmented Generation (RAG) System',
          description: 'Comprehensive RAG pipeline leveraging AWS Bedrock and vector database technology for semantic search and contextually-grounded LLM responses with cloud-native integration patterns.',
          links: [
            {label: 'Github', url: ''}
          ],
          bullets: [
            'Designed multi-phase RAG pipeline covering ingestion, embedding, retrieval, and generation',
            'Performed semantic chunking on source text to improve embedding quality and retrieval relevance',
            'Generated embeddings and stored them in ChromaDB vector store configured for cloud usage',
            'Integrated AWS Bedrock using Claude model for response generation grounded in retrieved context',
            'Implemented retrieval logic combining vector search with prompt construction for LLM inference',
            'Managed cloud configuration and authentication using AWS SDK (boto3)'
          ],
          environment: 'Python, AWS Bedrock, Claude LLM, ChromaDB, LangChain, Vector Embeddings, boto3, Git'
        },
        {
          name: 'Vector-Based RAG API Platform',
          description: 'Production-grade backend AI infrastructure implementing RAG API for natural language querying over domain-specific knowledge bases through semantic search and generative AI with clean architecture principles.',
          links: [
            {label: 'Github', url: ''}
          ],
          bullets: [
            'Designed modular RAG backend using FastAPI with separated ingestion, retrieval, and query layers',
            'Integrated ChromaDB as vector store for embedding persistence and semantic search',
            'Implemented document ingestion pipelines with configurable chunking and metadata handling',
            'Built query workflows combining vector similarity search with prompt construction for grounded LLM responses',
            'Integrated AWS Bedrock as LLM provider with client abstraction for model interaction',
            'Applied structured configuration management using environment-based settings and validation',
            'Containerized application with Docker for consistent deployment'
          ],
          environment: 'Python, FastAPI, ChromaDB, AWS Bedrock, LangChain, Docker, Git, RAG Architecture'
        }
      ]
    },
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
      degree: 'Certificate in Full Stack Software Engineer (Python & JavaScript)',
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
      <Card>
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">{contactInfo.name}</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            {contactInfo.location}  {contactInfo.phone}
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
            AI ENGINEER | SOFTWARE ENGINEER
          </h2>
        </div>
      </Card>

      {/* Professional Summary */}
      <Card>
        <Card.Header>
          <Card.Title>Professional Summary</Card.Title>
        </Card.Header>
        <Card.Content>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Results-driven AI Engineer with a robust foundation in full-stack development and a passion for building 
            intelligent, data-driven solutions. Experienced in designing and deploying end-to-end machine learning pipelines, 
            retrieval-augmented generation (RAG) systems, and natural language processing applications that transform complex 
            data into actionable insights. Proficient in integrating cutting-edge AI frameworks—including TensorFlow, LangChain, 
            and transformer models—with modern cloud infrastructure to create production-ready, scalable applications. Adept at 
            leveraging vector databases, prompt engineering, and semantic search to deliver contextually grounded AI experiences. 
            Committed to pushing the boundaries of AI technology while maintaining clean architecture principles and 
            best-in-class software engineering practices.
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
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">{category.title}</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-400/50 text-accent text-xs rounded border border-gray-300 dark:border-dark-400 hover:border-accent/50 transition-colors"
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
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-accent font-medium">{exp.company}, {exp.location}</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{exp.date}</span>
                  </div>
                  <p className="text-accent/70 text-sm">{exp.website}</p>
                </div>
                
                {/* Handle projects structure (for Revature) */}
                {exp.projects ? (
                  <div className="space-y-6">
                    {exp.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="space-y-2">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h5 className="font-semibold text-gray-900 dark:text-white text-base">{project.name}</h5>
                          {project.links && (
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
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm italic">{project.description}</p>
                        <ul className="space-y-2">
                          {project.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <p className="text-accent/70 text-xs italic mt-2">
                          <span className="font-medium">Environment:</span> {project.environment}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Handle simple details structure (for other experiences) */
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
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
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
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
                    <li key={detailIndex} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-3">
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
          <Card.Title>Education & Credentials</Card.Title>
        </Card.Header>
        <Card.Content>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent/30 pl-6 space-y-2">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-accent">{edu.school}, {edu.location}</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">{edu.date}</span>
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
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Available upon request</p>
          </Card.Content>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-primary-600/10 dark:from-accent/10 dark:to-primary-600/10 border-accent/20">
          <Card.Content className="text-center">
            <Button variant="primary" size="lg" className="w-full text-sm sm:text-base">
              <FileDown size={16} className="mr-2" />
              <span className="hidden sm:inline">Download PDF Resume</span>
              <span className="sm:hidden">Download Resume</span>
            </Button>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-3">
              Get a PDF copy for your records
            </p>
          </Card.Content>
        </Card>
      </div>
    </div>
  )
}

export default ResumePage