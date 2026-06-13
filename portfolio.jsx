import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'Socket.IO', 'RESTful APIs', 'MVC Architecture'],
    'Databases': ['MongoDB', 'SQL Server'],
    'Cloud & DevOps': ['AWS (EC2, S3, IAM, VPC)', 'Docker', 'Kubernetes', 'Linux', 'CI/CD', 'Application Deployment'],
    'Tools & Other': ['Git', 'GitHub', 'Postman', 'OOP', 'Data Structures', 'Design Patterns']
  };

  const projects = [
    {
      title: 'Plant Disease Diagnosis App',
      type: 'Graduation Project',
      description: 'Full-stack web and mobile application with AI-powered disease detection',
      tech: ['React', 'Node.js', 'MongoDB', 'AI'],
      highlights: ['RESTful APIs', 'Responsive UI', 'Disease detection & recommendations']
    },
    {
      title: 'E-Commerce Platform',
      type: 'Full-Stack Project',
      description: 'Complete furniture & accessories store with payment integration',
      tech: ['MERN Stack', 'Authentication', 'Shopping Cart'],
      highlights: ['Product catalog', 'Order management', 'Responsive design']
    },
    {
      title: 'Dental Clinic Booking System',
      type: 'Full-Stack Application',
      description: 'Online appointment scheduling platform for dental clinics',
      tech: ['React', 'Node.js', 'MongoDB'],
      highlights: ['Patient registration', 'Appointment scheduling', 'Clinic management']
    },
    {
      title: 'CRM System',
      type: 'Enterprise Project',
      description: 'Customer Relationship Management with advanced features',
      tech: ['React', 'Node.js', 'SQL Server'],
      highlights: ['Role-based access', 'Real-time updates', 'Advanced dashboards']
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: 'Beni Suef University',
      period: 'Sep 2020 – Jul 2024'
    },
    {
      degree: 'Specialized Diploma in Software Development',
      institution: 'Digilians Initiative – Ministry of Communications and IT',
      period: 'Dec 2023 – Aug 2024'
    }
  ];

  const certificates = [
    'Meta Front-End Developer Professional Certificate',
    'JavaScript Programming with React, Node & MongoDB',
    'DevOps Complete Course Specialization',
    'Delivering Quality Work with Agility – IBM'
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar navbar-dark navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <span className="brand-accent">EB</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container-fluid h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-lg-8 col-md-10">
              <div className="hero-content">
                <h1 className="display-3 fw-bold">
                  Eslam Mohamed <span className="text-accent">Badawy</span>
                </h1>
                <p className="lead text-muted mt-3">
                  Junior Full Stack Developer
                </p>
                <p className="hero-description mt-4">
                  Building responsive, data-driven web applications with React, Node.js, and modern development practices. 
                  Experienced in cloud platforms, DevOps, and delivering scalable solutions.
                </p>
                <div className="hero-cta mt-5">
                  <a href="#projects" className="btn btn-accent btn-lg me-3">View My Work</a>
                  <a href="#contact" className="btn btn-outline-accent btn-lg">Get in Touch</a>
                </div>
                <div className="hero-socials mt-5">
                  <a href="https://github.com/EslamBadawy1" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/eslambadawyy" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="mailto:eslammbadawy1@gmail.com" className="social-link">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section py-5">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="row">
            <div className="col-lg-6">
              <p className="text-muted fs-5 mb-4">
                I'm a junior full-stack developer with hands-on experience building responsive web applications. 
                My journey in software development has equipped me with strong skills across the entire development stack.
              </p>
              <p className="text-muted fs-5 mb-4">
                I specialize in frontend development with React and TypeScript, while also maintaining solid backend 
                expertise with Node.js and Express. I'm passionate about clean code, user experience, and continuous learning.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-stats">
                <div className="stat-card">
                  <h3 className="stat-number">4+</h3>
                  <p className="stat-label">Major Projects Delivered</p>
                </div>
                <div className="stat-card">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-label">Professional Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section py-5 bg-darker">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            {Object.entries(skills).map((category, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div className="skill-category">
                  <h4 className="skill-title text-accent">{category[0]}</h4>
                  <div className="skill-tags">
                    {category[1].map((skill, sidx) => (
                      <span key={sidx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section py-5">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="row">
            {projects.map((project, idx) => (
              <div key={idx} className="col-lg-6 mb-4">
                <div className="project-card">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, tidx) => (
                      <span key={tidx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, hidx) => (
                      <li key={hidx}>
                        <span className="highlight-icon">✓</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section py-5 bg-darker">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Full-Stack Developer Intern</h3>
                <p className="timeline-company">Digilians Initiative – MCIT</p>
                <ul className="timeline-description">
                  <li>Developed full-stack web applications using React, Node.js, MongoDB, and SQL Server</li>
                  <li>Designed and implemented RESTful APIs following MVC architecture</li>
                  <li>Performed CRUD operations and implemented backend business logic</li>
                  <li>Used Git and GitHub for collaboration and version control</li>
                  <li>Worked on real-world simulation projects using agile practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section py-5">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="row">
            {education.map((edu, idx) => (
              <div key={idx} className="col-lg-6 mb-4">
                <div className="education-card">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="section-subtitle mt-5">Professional Certifications</h3>
          <div className="certificates-grid">
            {certificates.map((cert, idx) => (
              <div key={idx} className="cert-item">
                <i className="fas fa-certificate cert-icon"></i>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section py-5 bg-darker">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead text-muted mb-5">
              Let's connect! I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="contact-methods">
              <div className="contact-card">
                <i className="fas fa-envelope contact-icon"></i>
                <a href="mailto:eslammbadawy1@gmail.com">eslammbadawy1@gmail.com</a>
              </div>
              <div className="contact-card">
                <i className="fas fa-phone contact-icon"></i>
                <a href="tel:+201068536700">+20 106 853 6700</a>
              </div>
              <div className="contact-card">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                <p>Cairo, Egypt</p>
              </div>
            </div>
            <div className="contact-socials mt-5">
              <a href="https://github.com/EslamBadawy1" target="_blank" rel="noopener noreferrer" className="btn btn-outline-accent">
                <i className="fab fa-github me-2"></i>GitHub
              </a>
              <a href="https://www.linkedin.com/in/eslambadawyy" target="_blank" rel="noopener noreferrer" className="btn btn-outline-accent">
                <i className="fab fa-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Eslam Mohamed Badawy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
