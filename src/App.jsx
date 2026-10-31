import { useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import './App.css';

const profile = {
  name: 'Awais Farooqui',
  title: 'Data Analyst • Data Engineer • AI Enthusiast',
  email: 'farooqui.awais@gmail.com',
  github: 'https://github.com/m-farooqui',
};

const projects = [
  {
    slug: 'sql-user-group', title: 'SQL Server User Group Website', category: 'Full-stack development',
    summary: 'A community hub for meetings, announcements, jobs, resources, and hands-on SQL and Python practice.',
    overview: 'A community website designed to make SQL Server user-group information and practical learning resources accessible in one place.',
    role: 'Designed and developed the website and learning features.',
    stack: ['React-free static frontend', 'Python', 'FastAPI', 'Nginx', 'Docker', 'SQLite'],
    features: ['Meeting and event information', 'Announcements and community resources', 'SQL and Python learning exercises', 'Domain-based datasets for practice'],
    architecture: ['Browser / Nginx', 'FastAPI endpoints', 'Practice datasets and exercises'],
    challenges: 'Coordinating the frontend and API endpoints, and ensuring learning datasets load correctly.',
    lessons: 'Container networking, API integration, and designing learning tools around real datasets.',
    repo: 'https://github.com/m-farooqui/cassug-sql-website',
  },
  {
    slug: 'lambda-ingestion', title: 'Lambda Data Ingestion Architecture', category: 'Data engineering',
    summary: 'Exploring batch and streaming ingestion using containerized infrastructure.',
    overview: 'A hands-on data architecture project for understanding batch and streaming processing patterns.',
    role: 'Built and configured the local containerized learning environment.',
    stack: ['Kafka', 'Spark', 'Trino', 'MinIO', 'Docker'],
    features: ['Containerized services', 'Streaming ingestion experiments', 'Batch processing workflows'],
    architecture: ['Data sources', 'Kafka / Spark', 'MinIO / Trino'],
    challenges: 'Configuring services to communicate reliably in a local environment.',
    lessons: 'Trade-offs between batch and streaming architectures.',
    repo: 'https://github.com/m-farooqui/Lamda-Data-Ingestion',
  },
  {
    slug: 'micro-batch', title: 'Micro-Batch Data Architecture', category: 'Data engineering',
    summary: 'A local environment for orchestration, micro-batch processing, analytics, and monitoring.',
    overview: 'An experimental micro-batch architecture built to understand the path from raw data to queryable outputs.',
    role: 'Configured the project structure and local data infrastructure.',
    stack: ['Airflow', 'Spark', 'PostgreSQL', 'Trino', 'Docker'],
    features: ['Workflow orchestration', 'Micro-batch processing', 'SQL-based analytics'],
    architecture: ['PostgreSQL', 'Airflow / Spark', 'Trino analytics'],
    challenges: 'Coordinating services and repeatable local runs.',
    lessons: 'Orchestration, processing, and query-layer responsibilities.',
    repo: 'https://github.com/m-farooqui/Micro-Batch-Ingestion-data-Architecture',
  },
  {
    slug: 'ai-assistant', title: 'Personal AI Assistant', category: 'Artificial intelligence',
    summary: 'An experimental assistant with specialized computer, email, and finance agents.',
    overview: 'A personal project exploring how specialized AI agents can coordinate practical workflows.',
    role: 'Implemented and tested agent workflows in Python.',
    stack: ['Python', 'OpenAI Agents SDK', 'FastAPI'],
    features: ['Specialized agents', 'Tool-assisted workflows', 'API experimentation'],
    architecture: ['User request', 'Agent orchestration', 'Specialized tools'],
    challenges: 'Separating agent responsibilities and validating tool results.',
    lessons: 'Agent design, tool boundaries, and safe workflow testing.',
    repo: null,
  },
  {
    slug: 'finance-hub', title: 'Finance Hub Mobile App', category: 'Mobile development',
    summary: 'A Flutter application for bills, debts, sinking funds, and financial goals.',
    overview: 'A mobile-first budgeting application focused on recurring expenses and practical money allocation.',
    role: 'Designed the app structure and developed Flutter screens and workflows.',
    stack: ['Flutter', 'Dart', 'Android'],
    features: ['Bills and debts', 'Sinking funds', 'Daily spending envelopes', 'Goals and reports'],
    architecture: ['Flutter interface', 'Application state', 'Local persistence'],
    challenges: 'Keeping multiple budget views consistent and testing Android builds.',
    lessons: 'Mobile UI design, state management, and deployment workflows.',
    repo: null,
  },
  {
    slug: 'riverbend', title: 'Riverbend Analytics Platform', category: 'Business intelligence',
    summary: 'A fictional beverage business with transactional data, dimensional modeling, and Power BI reporting.',
    overview: 'A realistic learning project connecting operational data sources to an analytics-ready star schema.',
    role: 'Built the database models, SQL transformations, and reporting environment.',
    stack: ['PostgreSQL', 'SQL', 'Power BI', 'Docker', 'FastAPI'],
    features: ['Synthetic business transactions', 'Dimension and fact tables', 'Read-only reporting access'],
    architecture: ['Operational sources', 'PostgreSQL staging', 'Star schema / Power BI'],
    challenges: 'Modeling source data consistently and configuring reporting access.',
    lessons: 'Dimensional modeling and analytics system integration.',
    repo: null,
  },
];

const skillGroups = [
  ['Analytics', 'SQL', 'Python', 'Power BI', 'Data visualization'],
  ['Data engineering', 'PostgreSQL', 'SQL Server', 'Spark', 'Kafka', 'Airflow'],
  ['Development', 'React', 'JavaScript', 'FastAPI', 'Flutter'],
  ['Infrastructure & AI', 'Docker', 'Git', 'GitHub', 'Nginx', 'AI agents'],
];

function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const links = [['About', '/#about'], ['Experience', '/#experience'], ['Projects', '/projects'], ['Skills', '/#skills'], ['Education', '/#education'], ['Contact', '/#contact']];
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <Link to="/" className="logo" onClick={() => setOpen(false)}>awais<span>.dev</span></Link>
    <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    <div className={`nav-links ${open ? 'open' : ''}`}>
      {links.map(([label, href]) => href.startsWith('/#') ? <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a> : <NavLink key={label} to={href} onClick={() => setOpen(false)}>{label}</NavLink>)}
      <button className="theme-button" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
    </div>
  </nav></header>;
}

function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-icon">⌘ <span>{project.category}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tags">{project.stack.slice(0, 4).map(s => <span key={s}>{s}</span>)}</div>
    <div className="card-actions"><Link to={`/projects/${project.slug}`} className="text-link">View case study →</Link>
    {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="muted-link">GitHub ↗</a>}</div>
  </article>;
}

function ProjectsList({ compact = false }) {
  return <section className="section alt" id="projects"><div className="container">
    <div className="section-head"><p className="eyebrow">SELECTED WORK</p><h2>{compact ? 'Featured Projects' : 'Project Portfolio'}</h2><p>Explore the ideas, architecture, technologies, and lessons behind my work.</p></div>
    <div className="project-grid">{projects.slice(0, compact ? 3 : undefined).map(p => <ProjectCard key={p.slug} project={p} />)}</div>
    {compact && <div className="center"><Link className="button secondary" to="/projects">Explore all projects →</Link></div>}
  </div></section>;
}

function Home() {
  return <main>
    <section className="hero container" id="home"><div><p className="eyebrow">WELCOME TO MY PORTFOLIO</p><h1>Hi, I'm <span>Awais Farooqui.</span></h1><h2>{profile.title}</h2><p className="lead">I turn data into insights, build practical applications, and explore technologies that solve real-world problems.</p><div className="actions"><Link to="/projects" className="button primary">Explore My Work →</Link><a href="/#contact" className="button secondary">Get in Touch</a></div><div className="social"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div></div>
    <div className="profile-card"><div className="photo-ring"><img src="/images/profile.jpg" alt="Portrait of Awais Farooqui" onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('missing'); }} /></div><h3>{profile.name}</h3><p>Building with data, code & curiosity.</p><div className="tags centered-tags"><span>Analytics</span><span>Engineering</span><span>AI</span></div></div></section>
    <section id="about" className="section alt"><div className="container"><div className="section-head"><p className="eyebrow">GET TO KNOW ME</p><h2>About Me</h2></div><div className="two-col"><div><h3>Curious about technology. Passionate about learning.</h3><p>I'm Awais, a technology enthusiast with experience in data analytics and a growing portfolio of projects across data engineering, software development, and artificial intelligence.</p><p>I enjoy understanding how systems work, experimenting with new tools, and turning ideas into functioning applications.</p></div><div className="panel"><h3>What drives me</h3><p><strong>01 · Continuous learning</strong><br/>Exploring technologies and developing useful skills.</p><p><strong>02 · Problem solving</strong><br/>Building practical solutions to meaningful challenges.</p><p><strong>03 · Community</strong><br/>Sharing knowledge and learning from others.</p></div></div></div></section>
    <section id="experience" className="section"><div className="container"><div className="section-head"><p className="eyebrow">MY BACKGROUND</p><h2>Professional Experience</h2></div><div className="panel"><span className="eyebrow">2022 – 2024</span><h3>Data Analyst · MVP Health Care</h3><p>Experience in data analytics, business reporting, and using data to support informed decisions.</p></div></div></section>
    <ProjectsList compact />
    <section id="skills" className="section"><div className="container"><div className="section-head"><p className="eyebrow">MY TOOLKIT</p><h2>Technical Skills</h2></div><div className="skill-grid">{skillGroups.map(([title, ...items]) => <div className="panel" key={title}><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
    <section id="education" className="section alt"><div className="container"><div className="section-head"><p className="eyebrow">LEARNING JOURNEY</p><h2>Education & Continuous Learning</h2></div><div className="panel"><h3>Always learning</h3><p>I'm expanding my knowledge of computer science, data engineering, artificial intelligence, and modern software development through study and hands-on projects.</p></div></div></section>
    <section id="contact" className="section contact"><div className="container"><p className="eyebrow">LET'S CONNECT</p><h2>Have an idea? Let's talk.</h2><p>I'm interested in connecting with people working in data, analytics, software development, and emerging technologies.</p><a className="button primary" href={`mailto:${profile.email}`}>Send Me an Email →</a></div></section>
  </main>;
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  if (!project) return <main className="section container"><h1>Project not found</h1><Link to="/projects" className="text-link">← Back to projects</Link></main>;
  return <main><section className="detail-hero"><div className="container"><Link to="/projects" className="back-link">← All projects</Link><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="detail-intro">{project.summary}</p><div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="actions">{project.repo && <a className="button primary" href={project.repo} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>}</div></div></section>
    <section className="section"><div className="container detail-grid"><div className="detail-main"><h2>Project overview</h2><p>{project.overview}</p><h2>My contribution</h2><p>{project.role}</p><h2>Key features</h2><ul>{project.features.map(x => <li key={x}>{x}</li>)}</ul><h2>Architecture</h2><div className="architecture">{project.architecture.map((x, i) => <div className="architecture-step" key={x}><span>{x}</span>{i < project.architecture.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div><p className="note">Conceptual overview — not a complete infrastructure diagram.</p><h2>Challenges</h2><p>{project.challenges}</p><h2>Lessons learned</h2><p>{project.lessons}</p><div className="next-project"><Link className="button secondary" to="/projects">← Explore more projects</Link></div></div><aside className="detail-side"><div className="panel"><h3>Project at a glance</h3><p><strong>Area</strong><br/>{project.category}</p><p><strong>Tools</strong><br/>{project.stack.join(', ')}</p><p><strong>Code</strong><br/>{project.repo ? <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-link">GitHub repository ↗</a> : 'Repository link coming soon'}</p></div><div className="panel"><h3>Screenshots</h3><p>Application screenshots and verified architecture visuals will be added here.</p></div></aside></div></section>
  </main>;
}

function Footer() { return <footer className="footer"><div className="container footer-inner"><Link to="/" className="logo">awais<span>.dev</span></Link><p>© {new Date().getFullYear()} Awais Farooqui · Built with React</p><a href="#top" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>Back to top ↑</a></div></footer>; }

function ScrollToHash() {
  // Handles links to sections from project detail routes.
  const { pathname, hash } = window.location;
  if (pathname === '/' && hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 0);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  return <BrowserRouter><div className={`app ${theme}`}><Header theme={theme} toggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} /><ScrollToHash /><Routes><Route path="/" element={<Home />} /><Route path="/projects" element={<ProjectsList />} /><Route path="/projects/:slug" element={<ProjectDetail />} /><Route path="*" element={<main className="section container"><h1>Page not found</h1><Link to="/">Return home</Link></main>} /></Routes><Footer /></div></BrowserRouter>;
}
