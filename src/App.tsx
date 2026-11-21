import { useEffect, useRef, useState } from 'react'

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

const skillGroups = [
  {
    index: '01',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SCSS / SASS'],
  },
  {
    index: '02',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'],
  },
  {
    index: '03',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Vercel', 'Render'],
  },
  { index: '04', title: 'Additional', skills: ['Flutter', 'Dart'] },
]

const experience = [
  {
    role: 'Junior Front End Developer',
    company: 'Riksof Pvt Ltd',
    meta: 'Karachi · Apr 2025 — Present',
    points: [
      'Developed property search and application-flow UI for FirstKey Homes, a large-scale rental platform.',
      'Built Aero Athena analytics dashboards with airline log visualizations and interactive data views.',
      'Created responsive, cross-browser components using HTML, SCSS, JavaScript, and React.',
      'Translated Figma specifications into reusable and accessible React components.',
    ],
  },
  {
    role: 'Front End Developer Intern',
    company: 'DevelopersHub Corporation',
    meta: 'Remote · Mar 2025 — May 2025',
    points: [
      'Developed an eCommerce website interface from Figma designs.',
      'Built reusable, responsive components with HTML, CSS, JavaScript, and Tailwind CSS.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Prodigy InfoTech',
    meta: 'Remote · Sep 2024',
    points: [
      'Developed responsive and accessibility-focused UI components.',
      'Ensured consistent cross-browser compatibility.',
    ],
  },
]

const projects = [
  {
    number: '01',
    name: 'The Crochet Nook',
    category: 'Full-Stack E-Commerce Platform',
    description:
      'A warm, full-stack shopping experience with product discovery, category filters, cart management, custom orders, admin authentication, and MongoDB-powered inventory.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://crochet-nook.onrender.com',
    visual: 'shop',
    note: 'Payment gateway integration in progress',
  },
  {
    number: '02',
    name: 'FirstKey Homes',
    category: 'Professional Experience · Client Project',
    description:
      'Property search and application-flow interfaces for a large-scale rental platform, focused on reusable React components, responsive layouts, and polished user journeys.',
    tags: ['React', 'SCSS', 'Responsive UI'],
    visual: 'property',
  },
  
  {
    number: '04',
    name: 'CIE Examination Tool',
    category: 'Final Year Project · Team Lead · 4.00 GPA',
    description:
      'An examination management system for teachers supporting objective, subjective, and diagram-based questions with role-based student access controls.',
    tags: ['React', 'JavaScript', 'Role-Based Access'],
    visual: 'exam',
  },
  {
    number: '05',
    name: 'Pakistan Single Window',
    category: 'Mobile Application',
    description:
      'Contributed to the official PSW mobile app frontend, enhancing the goods declaration module with nested Q&A flows and dynamic form sections.',
    tags: ['Flutter', 'Dart', 'Dynamic Forms'],
    visual: 'mobile',
  },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ type }: { type: string }) {
  if (type === 'shop') {
    return (
      <div className="mock project-image-mock">
        <img src="/crochet_nook.jpg" alt="The Crochet Nook storefront featuring a handmade crochet bouquet" />
      </div>
    )
  }
  if (type === 'property') {
    return (
      <div className="mock project-image-mock">
        <img src="/fkh.png" alt="FirstKey Homes rental search homepage" />
      </div>
    )
  }
  
  if (type === 'exam') {
    return (
      <div className="mock exam-mock">
        <div className="exam-side"><b>CIE</b><span>Overview</span><span>Question bank</span><span>Examinations</span><span>Students</span></div>
        <div className="exam-main"><small>EXAM BUILDER</small><strong>Computer Science · Paper 2</strong><div className="question"><b>04</b><span>Explain the purpose of a stack in memory management.</span><i>10 marks</i></div><div className="exam-lines" /></div>
      </div>
    )
  }
  return (
    <div className="mock mobile-mock">
      <div className="phone phone-back"><b>PSW</b><span>Declaration status</span><i /><i /><i /></div>
      <div className="phone phone-front"><b>Goods Declaration</b><small>STEP 03 OF 06</small><strong>Consignment<br />information</strong><label>Country of origin</label><span>Select country</span><label>Package details</label><span>12 cartons</span><button>Continue →</button></div>
      <div className="mobile-orbit">PSW</div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`)
      document.documentElement.style.setProperty('--my', `${event.clientY}px`)
      if (heroRef.current) {
        const x = (event.clientX / window.innerWidth - 0.5) * 12
        const y = (event.clientY / window.innerHeight - 0.5) * 12
        heroRef.current.style.setProperty('--px', `${x}px`)
        heroRef.current.style.setProperty('--py', `${y}px`)
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="cursor-dot" />
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a href="#home" className="wordmark" onClick={closeMenu}>MK<span>®</span></a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <div className="mobile-social"><a href="https://mail.google.com/mail/?view=cm&to=khanmohib2001%40gmail.com" target="_blank" rel="noreferrer">Email</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
        <div className="nav-end">
          <span className="availability"><i /> Open to opportunities</span>
          <a className="button button-small" href="#contact">Let’s talk <Arrow diagonal /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><i /><i /></button>
        </div>
      </nav>

      <section className="hero section" id="home">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span>01</span> Hello, I’m Mohib Khan</p>
            <h1>Building digital experiences that <em>feel different.</em></h1>
            <p className="hero-description">Frontend developer crafting responsive, high-performance web experiences with React, JavaScript, and modern technologies. With a growing backend expertise, I turn ideas into complete digital products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Arrow /></a>
              <a className="text-link" href="#contact">Let’s connect <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art" ref={heroRef}>
            <div className="art-glow" />
            <img src="/mohib-hero-sculpture.png" alt="Abstract chrome and glass sculpture" />
            <span className="tech-label label-react">React.js</span>
            <span className="tech-label label-js">JavaScript</span>
            <span className="tech-label label-node">Node.js</span>
            <span className="tech-label label-mongo">MongoDB</span>
            <div className="orbit-line" />
          </div>
        </div>
        <div className="hero-footer">
          <div><span className="pulse" /> Available for select projects</div>
          <span>Karachi, PK · 24.8607° N</span>
          <a href="#about">Scroll to discover <b>↓</b></a>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-kicker reveal"><span>02 / ABOUT</span><i /></div>
        <div className="about-head reveal">
          <p>Design-minded developer.<br />System-level thinker.</p>
          <h2>A developer who thinks <em>beyond</em> the interface.</h2>
        </div>
        <div className="about-body reveal">
          <div className="about-shape"><div className="shape-core">MK</div><span>FRONTEND<br />DEVELOPER</span></div>
          <div className="about-text">
            <p>I’m a Front End Developer with over one year of professional experience building responsive and interactive web applications. I specialize in React.js, JavaScript, and modern CSS technologies, translating design concepts into polished digital experiences.</p>
            <p>Beyond frontend, I work with Node.js, Express.js, MongoDB, REST APIs, and JWT authentication—giving me a clear view of the bigger product picture.</p>
            <p>Currently at <strong>Riksof Pvt Ltd</strong>, contributing to real-world web applications, dashboards, and interactive interfaces.</p>
          </div>
        </div>
        <div className="stats reveal">
          <div><strong>1<span>+</span></strong><small>Years of<br />experience</small></div>
          <div><strong>5<span>+</span></strong><small>Projects &<br />contributions</small></div>
          <div><strong>BS</strong><small>Computer<br />Science</small></div>
          <div><strong>PK</strong><small>Karachi,<br />Pakistan</small></div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-kicker reveal"><span>03 / CAPABILITIES</span><i /></div>
        <div className="skills-intro reveal"><h2>A connected<br /><em>technology ecosystem.</em></h2><p>Tools are only powerful when they work together. My stack spans the full journey from expressive interface to resilient application.</p></div>
        <div className="skill-system reveal">
          <div className="skill-center"><span>CORE</span><b>Product<br />Engineering</b><i>React + Node</i></div>
          <div className="skill-rings" aria-hidden="true"><i /><i /><i /></div>
          {skillGroups.map((group, index) => (
            <div className={`skill-group skill-${index + 1}`} key={group.title}>
              <span>{group.index}</span><h3>{group.title}</h3>
              <p>{group.skills.map(skill => <b key={skill}>{skill}</b>)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-kicker reveal"><span>04 / EXPERIENCE</span><i /></div>
        <div className="experience-title reveal"><h2>Experience, built<br /><em>in the real world.</em></h2><p>Working alongside teams to ship thoughtful digital products, translate complex requirements, and turn design intent into robust interfaces.</p></div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item reveal" key={item.company}>
              <div className="timeline-index"><span>0{index + 1}</span><i /></div>
              <div className="timeline-role"><h3>{item.role}</h3><p>{item.company}</p><small>{item.meta}</small></div>
              <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-kicker reveal"><span>05 / SELECTED WORK</span><i /></div>
        <div className="projects-title reveal"><h2>Work that makes<br /><em>an impact.</em></h2><p>A selection of client contributions and independent products—from commerce to aviation analytics.</p></div>
        <div className="project-list">
          {projects.map(project => (
            <article className={`project project-${project.number} reveal`} key={project.number}>
              <div className="project-visual"><ProjectVisual type={project.visual} /><span className="project-number">{project.number}</span></div>
              <div className="project-info">
                <p>{project.category}</p><h3>{project.name}</h3><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <p className="project-description">{project.description}</p>
                {project.note && <small className="project-note"><i /> {project.note}</small>}
                {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="project-link">View live project <Arrow diagonal /></a> : <span className="project-link muted">Case contribution <Arrow /></span>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy section">
        <div className="section-kicker reveal"><span>06 / MY APPROACH</span><i /></div>
        <div className="philosophy-head reveal"><h2>Code with intention.<br /><em>Details with purpose.</em></h2></div>
        <div className="pillars">
          <article className="reveal"><span>01</span><div><h3>Pixel-perfect development</h3><p>Turning Figma designs into responsive, accurate, and accessible interfaces—without losing the nuance that makes a design special.</p></div></article>
          <article className="reveal"><span>02</span><div><h3>Interactive experiences</h3><p>Creating engaging interfaces with thoughtful motion, clear feedback, and interactions that support the story rather than interrupt it.</p></div></article>
          <article className="reveal"><span>03</span><div><h3>Full-stack understanding</h3><p>Thinking beyond the browser—with a working understanding of APIs, databases, authentication, and modern application architecture.</p></div></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orb" aria-hidden="true"><i /><i /><span>LET’S CREATE</span></div>
        <div className="section-kicker reveal"><span>07 / GET IN TOUCH</span><i /></div>
        <div className="contact-copy reveal">
          <p>Have an idea?</p>
          <h2>Let’s build<br />something <em>great.</em></h2>
          <p className="contact-description">I’m always interested in meaningful projects, creative collaborations, and opportunities to build something impactful.</p>
          <a className="contact-button" href="https://mail.google.com/mail/?view=cm&to=khanmohib2001%40gmail.com" target="_blank" rel="noreferrer"><span>Get in touch</span><Arrow diagonal /></a>
        </div>
        <div className="contact-meta reveal">
          <a href="https://mail.google.com/mail/?view=cm&to=khanmohib2001%40gmail.com" target="_blank" rel="noreferrer"><small>Email</small><span>khanmohib2001@gmail.com ↗</span></a>
          <a href="https://www.linkedin.com/in/mohib-khan-615368254/" target="_blank" rel="noreferrer" onClick={()=>{
            console.log("clicked")
          }}><small>Social</small><span>LinkedIn ↗</span></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><small>Code</small><span>GitHub ↗</span></a>
          <div><small>Based in</small><span>Karachi, Pakistan</span></div>
        </div>
      </section>

      <footer>
        <div><b>MOHIB KHAN</b><span>Front End Developer<br />with Full-Stack Capabilities</span></div>
        <div className="footer-links"><a href="https://www.linkedin.com/in/mohib-khan-615368254/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a href="https://mail.google.com/mail/?view=cm&to=khanmohib2001%40gmail.com" target="_blank" rel="noreferrer">Email</a></div>
        <span>© 2026 Mohib Khan</span><a href="#home">Back to top ↑</a>
      </footer>
    </main>
  )
}
