import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code, 
  Database, 
  Brain, 
  Award, 
  BookOpen, 
  Users, 
  Globe, 
  Heart,
  Star,
  Calendar,
  Target,
  CheckCircle,
  Briefcase
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "AI Conversational Data Science Tutor",
      description: "Developed an intelligent conversational tutor to teach data science concepts, leveraging LangChain and Google's Gemini LLM for natural language understanding and interactive dialogue using Python, Streamlit.",
      tech: ["LangChain", "Gemini API", "Python", "Streamlit"],
      duration: "Jan 2025 – Feb 2025",
      role: "Self Project",
      link: "https://ai-conversational-data-science-tutor-ss.streamlit.app",
      category: "AI/ML"
    },
    {
      title: "AI Code Reviewer",
      description: "Developed a AI based code reviewer that analyzes source code, identifies logical and syntax errors. Displays the error and the correct version of the code.",
      tech: ["LangChain","Gemini API", "Streamlit"],
      duration: "Jan 2025 – Feb 2025",
      role: "Self Project",
      link: "https://ai-code-reviewer-ss.streamlit.app", 
      category: "AI/ML"
    },
    {
      title: "AI Travel Planner",
      description: "Developed a smart travel assistant that helps users find the best travel options between a given source and destination",
      tech: ["LangChain","Gemini API", "Streamlit"],
      duration: "Jan 2025 – Feb 2025",
      role: "Self Project",
      link: "https://ai-travel-planner-ss.streamlit.app", 
      category: "AI/ML"
    },

    {
      title: "Weather Website",
      description: "Designed and developed a responsive website for real time weather information, updates based on user location using HTML, CSS, OpenWeather API.",
      tech: ["HTML", "CSS", "OpenWeather API","JavaScript"],
      link: "https://dhanpalshivasai.github.io/weather_website",
      category: "Web Development"
    },
    {
      title: "Student Management System",
      description: "Developed a student management system using AngularJS, MySQL, Apache Tomcat Server providing add, update, delete features.",
      tech: ["AngularJS", "MySQL", "Apache Tomcat"],
      link: "https://github.com/dhanpalshivasai/student_management", 
      category: "Full Stack"
    },
    {
      title: "University Web Portal - Full-Stack Application",
      description: "Developed a full-stack university portal using Spring Boot, React, and MySQL, featuring role-based dashboards for students, faculty, and admins. Implemented functionalities including user management, complaint processing, and a secure alumni network with an approval system.",
      tech: ["Spring Boot", "React", "MySQL"],
      link: "https://github.com/dhanpalshivasai/university-portal",
      category: "Full Stack"
    },
    {
      title: "Enhancing Search Engine Relevance for Video Subtitles (Cloning Shazam)",
      description: "Improved search results for video subtitles using NLP and machine learning techniques. Technologies used are AI model - Whisper, Machine Learning-SentenceTransformers, BERT.",
      tech: ["Whisper", "SentenceTransformers", "BERT", "NLP"],
      duration: "Feb 2025 – Mar 2025",
      role: "Self Project",
      link: "https://github.com/dhanpalshivasai/CloningShazam",
      category: "AI/ML"
    },
    {
      title: "Unhealthy Citrus Leaf Detection Using Machine Learning",
      description: "Developed a citrus leaf disease detection system using CNN, TensorFlow, and OpenCV, enabling accurate early identification of unhealthy leaves. The model aids farmers in timely intervention and improved crop yield.",
      tech: ["CNN", "TensorFlow", "OpenCV"],
      duration: "Aug 2024 – Nov 2024",
      role: "Team Lead",
      link: "https://github.com/dhanpalshivasai/Application-development-MRUH/tree/main/Unhealthy%20Leaves%20Detection", 
      category: "AI/ML"
    },
    {
      title: "Courier Management System",
      description: "Programmed a website for management of couriers, reliability is improved. Technologies used are HTML, CSS, Python, Django, SQLite.",
      tech: ["HTML", "CSS", "Python", "Django", "SQLite"],
      duration: "4 months",
      role: "Team Lead",
      link: "https://github.com/dhanpalshivasai/Application-development-MRUH/tree/main/Courier_Management_System_Django",
      category: "Web Development"
    }
  ];

   const skills = {
    languages: ["Python", "Java", "JavaScript", "HTML & CSS", "SQL"],
    databases: ["MySQL"],
    frameworks: ["React", "Spring Boot", "LangChain", "Angular"],
    libraries: ["Pandas", "NumPy"],
    expertise: ["Generative AI", "Machine Learning (ML)"],
    technologies: ["AWS", "JDBC", "JSP", "Git"]
  };

  const certifications = [
    {
      provider: "NPTEL",
      courses: ["Introduction to AI", "Programming in Java"]
    },
    {
      provider: "Coursera",
      courses: [
        "Java Programming from Duke University",
        "Introduction to HTML5 University of Michigan", 
        "Data Analysis with Python IBM",
        "Introduction to Artificial Intelligence (AI) IBM"
      ]
    },
    {
      provider: "AICTE",
      courses: ["AIML virtual Internship by AWS Academy"]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Secured 2nd rank in overall academic performance in the B.Tech AI & ML department at Malla Reddy University",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Webathon Champion",
      description: "Led a team to achieve 1st prize in Webathon, outperforming 60 other teams",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Code Debugging Excellence",
      description: "Won 2nd Prize in University level Code Debugging competition",
      icon: <Code className="w-8 h-8 text-green-500" />,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['about', 'education', 'skills', 'experience', 'projects', 'achievements', 'certifications'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === section 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      
      {/* 1. Your Photo */}
      <div className="mb-8">
        <img 
          src="/profile-photo.jpg" 
          alt="Dhanpal Shivasai" 
          className="w-40 h-40 object-cover rounded-full mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* 2. Your Name (Moved here) */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Dhanpal Shivasai
      </h1>
      
      {/* 3. Your Title */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Software Developer
        </span>
      </h2>
      
      {/* 4. Your Bio Paragraph */}
      <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
        Strong foundation in Java and modern web technologies including JavaScript, HTML, and CSS. 
        Skilled in creating full-stack applications with React.js and Spring Boot. Combines a high-achieving 
        academic record in AI & ML with practical project experience in building, testing, and deploying 
        responsive, data-driven websites.
      </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-700">dhanpalshivasai1@gmail.com</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <MapPin className="w-5 h-5 text-red-600 mr-2" />
                <span className="text-gray-700">Hyderabad, India</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="/DhanpalShivasai_Resume.pdf" download className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white hover:bg-blue-50 flex items-center">
                <ExternalLink className="inline w-5 h-5 mr-2" />
                Download Resume
              </a>

              <a href="https://www.linkedin.com/in/shivasaidhanpal" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-blue-700 text-gray-700 hover:text-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white hover:bg-blue-50 flex items-center">
                <Linkedin className="inline w-5 h-5 mr-2" />
                LinkedIn
              </a>
              
              <a href="https://github.com/dhanpalshivasai" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white hover:bg-gray-50 flex items-center">
                <Github className="inline w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">B.Tech in AI & ML</h3>
                <p className="text-blue-600 font-semibold mb-2">Malla Reddy University, Hyderabad</p>
                <p className="text-sm text-gray-600 mb-4">Sep 2021 – May 2025</p>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  CGPA: 9.55
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Intermediate in MPC</h3>
                <p className="text-green-600 font-semibold mb-2">SR Junior College, Nizamabad</p>
                <p className="text-sm text-gray-600 mb-4">June 2019 – April 2021</p>
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  99.2%
                </div>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">SSC</h3>
                <p className="text-purple-600 font-semibold mb-2">Sri Venkatasai Vidyanikethan</p>
                <p className="text-sm text-gray-600 mb-4">June 2018 – April 2019</p>
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  GPA: 9.8
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Languages & Databases */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Code className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Languages & Databases</h3>
              </div>
              <div className="space-y-4">
                {skills.languages.map((skill) => (
                  <div key={skill} className="bg-blue-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
                <h4 className="font-bold text-center pt-4 text-gray-600">Database</h4>
                {skills.databases.map((skill) => (
                  <div key={skill} className="bg-blue-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
              </div>
            </div>
            
            {/* Column 2: Frameworks & Libraries */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Database className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Frameworks & Libraries</h3>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-center text-gray-600">Frameworks</h4>
                {skills.frameworks.map((skill) => (
                  <div key={skill} className="bg-green-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
                <h4 className="font-bold text-center pt-4 text-gray-600">Libraries</h4>
                {skills.libraries.map((skill) => (
                  <div key={skill} className="bg-green-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
              </div>
            </div>
            
            {/* Column 3: Cloud, AI & Technologies */}
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-6">
                <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Cloud, AI & Technologies</h3>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-center text-gray-600">Areas of Expertise</h4>
                 {skills.expertise.map((skill) => (
                  <div key={skill} className="bg-purple-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
                <h4 className="font-bold text-center pt-4 text-gray-600">Other Technologies</h4>
                {skills.technologies.map((skill) => (
                  <div key={skill} className="bg-purple-50 p-4 rounded-lg text-center font-medium text-gray-800">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="ml-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Data Science with GenAI Intern</h3>
                  <span className="text-blue-600 font-semibold bg-blue-100 px-4 py-1 rounded-full text-sm">
                    Jan 2025 – Mar 2025
                  </span>
                </div>
                <p className="text-lg text-indigo-600 font-semibold mb-4">Innomatics Research Labs, Hyderabad</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Worked with LLMs, Agentic AI, RAG, and NLP to develop AI-driven solutions</li>
                      <li>Utilized Gemini and ChatGPT LLMs for intelligent automation and text generation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Used Streamlit for interactive AI model deployment</li>
                      <li>Completed four small projects and one major project applying advanced GenAI techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 rounded-2xl shadow-xl">
              <div className="absolute -left-4 top-8 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div className="ml-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Freelance Q&A Authoring Expert</h3>
                  <span className="text-green-600 font-semibold bg-green-100 px-4 py-1 rounded-full text-sm">
                    Feb 2024 – Present
                  </span>
                </div>
                <p className="text-lg text-emerald-600 font-semibold mb-4">Chegg India</p>
                <p className="text-gray-700 leading-relaxed">
                  Creating high-quality educational content and solutions for students across various subjects, 
                  demonstrating expertise in problem-solving and educational content development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my technical skills through diverse projects spanning web development, AI/ML, and full-stack applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'AI/ML' 
                        ? 'bg-purple-100 text-purple-800' 
                        : project.category === 'Full Stack'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {project.category}
                    </span>
                    {project.duration && (
                      <Calendar className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  {project.duration && (
                    <p className="text-sm text-blue-600 font-medium mb-2">{project.duration}</p>
                  )}
                  {project.role && (
                    <p className="text-sm text-green-600 font-medium mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-1" />
                      Role: {project.role}
                    </p>
                  )}
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform group-hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.provider}</h3>
                </div>
                <div className="space-y-3">
                  {cert.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Activities & Others Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Extra-curricular Activities */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Extra-curricular Activities</h2>
              <div className="space-y-6">
                <div className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <Users className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Department Freshers Event Organizer</h4>
                    <p className="text-gray-700 text-sm">Served as a key organizer and departmental head for a freshers event, coordinating logistics, leading a team, and ensuring successful execution for 1400 participants.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                  <Code className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Competition Participant</h4>
                    <p className="text-gray-700 text-sm">Participated in Code Debugging, Prototype Design Competition at Malla Reddy University.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <Target className="w-6 h-6 text-purple-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Event Management</h4>
                    <p className="text-gray-700 text-sm">Organized and managed ice cream and game stalls at multiple university events, handling product sourcing, pricing, marketing, and customer interaction.</p>
                  </div>
                </div>
                
                <div className="flex items-start p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <Brain className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Innovation Leadership</h4>
                    <p className="text-gray-700 text-sm">Led a team for Ideathon, Startupathon conducted in Malla Reddy University.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hobbies & Languages */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hobbies</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                    <Brain className="w-6 h-6 text-red-500 mr-3" />
                    <span className="text-gray-700">Solving puzzles and Rubik's cubes</span>
                  </div>
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <Globe className="w-6 h-6 text-blue-500 mr-3" />
                    <span className="text-gray-700">Travelling</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Languages</h3>
                <div className="space-y-3">
                  {['English', 'Telugu', 'Hindi'].map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">{language}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">Ready to bring innovative ideas to life through code</p>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=dhanpalshivasai1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200 inline-flex items-center justify-center"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
                <a href="https://github.com/dhanpalshivasai" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/shivasaidhanpal" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025 Dhanpal Shivasai. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;