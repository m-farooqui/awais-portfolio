import { useState } from "react";
import "./App.css";

const portfolio = {
  name: "Awais Farooqui",
  title: "Data Analyst • Data Engineer • AI Enthusiast",
  email: "farooqui.awais@gmail.com",
  github: "https://github.com/m-farooqui",
  linkedin: "", // Add your LinkedIn profile URL here.
};

const projects = [
  {
    title: "SQL Server User Group Website",
    category: "Full-Stack Development",
    description:
      "A community website featuring SQL learning resources, interactive practice environments, datasets, announcements, and events.",
    technologies: ["Python", "FastAPI", "Docker", "SQL", "Nginx"],
    github: "https://github.com/m-farooqui/cassug-sql-website",
  },
  {
    title: "Lambda Data Ingestion Architecture",
    category: "Data Engineering",
    description:
      "A data ingestion architecture exploring batch and streaming processing with containerized data infrastructure.",
    technologies: ["Apache Kafka", "Spark", "Trino", "MinIO", "Docker"],
    github: "https://github.com/m-farooqui/Lamda-Data-Ingestion",
  },
  {
    title: "Micro-Batch Data Architecture",
    category: "Data Engineering",
    description:
      "A micro-batch processing environment incorporating orchestration, distributed processing, SQL analytics, and monitoring.",
    technologies: ["Airflow", "Spark", "PostgreSQL", "Trino", "Docker"],
    github:
      "https://github.com/m-farooqui/Micro-Batch-Ingestion-data-Architecture",
  },
  {
    title: "Personal AI Assistant",
    category: "Artificial Intelligence",
    description:
      "An experimental AI assistant designed around specialized agents for computer tasks, email workflows, and personal finance.",
    technologies: ["Python", "OpenAI Agents SDK", "FastAPI"],
    github: portfolio.github,
  },
  {
    title: "Finance Hub Mobile Application",
    category: "Mobile Development",
    description:
      "A personal finance application for tracking bills, debts, sinking funds, financial goals, and spending allocations.",
    technologies: ["Flutter", "Dart", "Android"],
    github: portfolio.github,
  },
  {
    title: "Riverbend Analytics Platform",
    category: "Business Intelligence",
    description:
      "A fictional beverage business analytics platform featuring transactional systems, a dimensional data warehouse, and reporting.",
    technologies: ["PostgreSQL", "SQL", "Power BI", "Docker", "FastAPI"],
    github: portfolio.github,
  },
];

const skills = [
  {
    title: "Data Analytics",
    items: ["SQL", "Python", "Power BI", "Data Visualization", "Data Modeling"],
  },
  {
    title: "Data Engineering",
    items: ["PostgreSQL", "SQL Server", "Apache Spark", "Kafka", "Airflow"],
  },
  {
    title: "Software Development",
    items: ["React", "JavaScript", "FastAPI", "Flutter", "REST APIs"],
  },
  {
    title: "Infrastructure & AI",
    items: ["Docker", "Git", "GitHub", "Nginx", "AI Agents"],
  },
];

const experience = [
  {
    role: "Data Analyst",
    organization: "MVP Health Care",
    period: "2022 – 2024",
    description:
      "Professional experience in data analytics and working with business information to support reporting and analysis.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${theme}`}>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#home" className="logo" onClick={closeMenu}>
            awais<span>.dev</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <button
              type="button"
              className="theme-button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Awais Farooqui.</span>
            </h1>

            <h2>{portfolio.title}</h2>

            <p className="hero-description">
              I enjoy transforming data into meaningful insights, building
              practical applications, and exploring technologies that solve
              real-world problems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button primary">
                Explore My Work →
              </a>

              <a href="#contact" className="button secondary">
                Get in Touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a href={`mailto:${portfolio.email}`}>
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-avatar">AF</div>
              <h3>{portfolio.name}</h3>
              <p>Building with data, code & curiosity.</p>

              <div className="profile-tags">
                <span>Analytics</span>
                <span>Engineering</span>
                <span>AI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">GET TO KNOW ME</p>
              <h2>About Me</h2>
            </div>

            <div className="about-grid">
              <div>
                <h3>Curious about technology. Passionate about learning.</h3>

                <p>
                  I'm Awais, a technology enthusiast with a background in
                  data analytics and a growing portfolio of projects across
                  data engineering, software development, and artificial
                  intelligence.
                </p>

                <p>
                  I enjoy understanding how systems work, experimenting
                  with new tools, and turning ideas into functioning
                  applications.
                </p>

                <p>
                  My projects range from building data pipelines and
                  analytics platforms to developing mobile applications
                  and AI-powered assistants.
                </p>
              </div>

              <div className="about-highlight">
                <h3>What drives me</h3>

                <div className="highlight-item">
                  <span>01</span>
                  <div>
                    <h4>Continuous Learning</h4>
                    <p>Exploring new technologies and developing useful skills.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span>02</span>
                  <div>
                    <h4>Problem Solving</h4>
                    <p>Building practical solutions to meaningful challenges.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <span>03</span>
                  <div>
                    <h4>Community</h4>
                    <p>Sharing knowledge and learning from other professionals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY BACKGROUND</p>
              <h2>Professional Experience</h2>
              <p>A look at my professional journey.</p>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-card" key={job.organization}>
                  <span className="period">{job.period}</span>
                  <h3>{job.role}</h3>
                  <h4>{job.organization}</h4>
                  <p>{job.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Featured Projects</h2>
              <p>
                A selection of projects exploring analytics, engineering,
                application development, and AI.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top">
                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="project-icon">⌘</span>
                  </div>

                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="technology-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub →
                  </a>
                </article>
              ))}
            </div>

            <div className="centered-action">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                View All GitHub Repositories ↗
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">MY TOOLKIT</p>
              <h2>Technical Skills</h2>
              <p>Technologies and tools I work with and continue to explore.</p>
            </div>

            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.title}>
                  <h3>{group.title}</h3>

                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">LEARNING JOURNEY</p>
              <h2>Education & Continuous Learning</h2>
            </div>

            <div className="education-card">
              <div className="education-icon">🎓</div>

              <div>
                <h3>Always Learning</h3>
                <p>
                  I'm continually expanding my knowledge of computer science,
                  data engineering, artificial intelligence, and modern
                  software development.
                </p>

                <p>
                  My learning approach combines technical study with
                  hands-on projects and experimentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-content">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Have an idea? Let's talk.</h2>

            <p>
              I'm interested in connecting with people working in data,
              analytics, software development, and emerging technologies.
            </p>

            <a
              href={`mailto:${portfolio.email}`}
              className="button primary"
            >
              Send Me an Email →
            </a>

            <div className="contact-links">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a href={`mailto:${portfolio.email}`}>
                Email ↗
              </a>

              {portfolio.linkedin && (
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="logo">
            awais<span>.dev</span>
          </a>

          <p>
            © {new Date().getFullYear()} Awais Farooqui.
            Built with React.
          </p>

          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;