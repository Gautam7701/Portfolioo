import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMonitor,
  FiSend,
  FiStar,
  FiTool,
  FiX,
} from "react-icons/fi";
import Brainee from "./assets/assets/project1.png";
import dashboardImage from "./assets/assets/project2.png";
import socialImage from "./assets/assets/project3.png";
import promptspot from "./assets/assets/P4.png";
import irada from "./assets/assets/image.png";
import nikeshoes from "./assets/assets/P5.png";
import moviemate from "./assets/assets/Project7.png";
import hyrstack from "./assets/assets/hyrstack.png";
import connectree from "./assets/assets/connectree.png";
import vera from "./assets/assets/vera.png";
import afc from "./assets/assets/afc.png";
import "./App.css";

const DATA = {
  name: "Gautam Gupta",
  role: "Frontend Developer",
  tagline: "Crafting interactive digital experiences that live at the intersection of design and code.",
  location: "Delhi NCR, India",
  email: "gautamgupta2606@gmail.com",
  resumeUrl: "/Gautam_Resume.pdf",
  socials: {
    github: "https://github.com/Gautam7701",
    linkedin: "https://www.linkedin.com/in/gautamgupta13/",
    twitter: "https://twitter.com",
  },
  about: {
    bio: [
      "I'm a frontend developer who obsesses over the details - micro-interactions, performance budgets, and the feeling a user gets when a UI just *works*.",
      "My journey started with curiosity about how pixels become experiences. Today I build scalable interfaces at the edge of what browsers can do.",
    ],
    highlights: ["React Developer", "15+ Projects Shipped", "Open Source Contributor", "AI Enthusiast"],
  },
  skills: {
    Frontend: ["React.js", "Next.js 15", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    Styling: ["Tailwind CSS", "Framer Motion", "GSAP", "Styled Components", "Sass", "shadcn/ui"],
    AI_Integrations: ["OpenAI API", "Inngest", "Clerk (Auth)", "AI Streaming", "Prompt Engineering"],
    Backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Prisma ORM", "NeonDB (PostgreSQL)"],
  },
  projects: [
    {
      id: 1,
      title: "HyrStack - AI Career & Interview Preparation Platform",
      desc: "AI-powered career platform with mock interviews, AI resumes, career insights, authentication, dashboards, and PDF export.",
      tech: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Prisma", "Clerk", "Tailwind CSS"],
      image: hyrstack,
      gradient: "from-violet-600 to-indigo-600",
      live: "https://hyrstack.vercel.app/",
      github: "https://github.com/Gautam7701/HyrStack",
      featured: true,
    },
    {
      id: 4,
      title: "Connectr.ee - Personal Link Portfolio Platform",
      desc: "Full-stack link-in-bio platform allowing users to manage and showcase multiple links with authentication.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "Authentication", "Vercel"],
      image: connectree,
      gradient: "from-pink-500 to-rose-600",
      live: "https://connectr.ee/",
      github: "https://github.com/jaseemuddinn/connectree.git",
      featured: true,
    },
    {
      id: 2,
      title: "Brainee - AI-Powered Learning Platform",
      desc: "AI learning platform with chatbot, image generation, code generation, voice-to-text, and text summarization.",
      tech: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      image: Brainee,
      gradient: "from-cyan-500 to-blue-600",
      live: "https://brainee-theta.vercel.app/",
      github: "https://github.com/Gautam7701/Brainee",
      featured: true,
    },
    {
      id: 11,
      title: "AFC Namrata's Kitchen - Digital Food Experience",
      desc: "A responsive restaurant website built to showcase homemade flavors with an interactive menu, online ordering flow, customer reviews, and a premium brand experience.",
      tech: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      image: afc,
      gradient: "from-cyan-500 to-blue-600",
      live: "https://namrataskitchen.vercel.app/",
      github: "https://github.com/Gautam7701/AFCNamrataKitchen",
      featured: true,
    },
    {
      id: 3,
      title: "Vera - Shopify E-Commerce Store",
      desc: "Production-ready Shopify store with optimized listings, referral system, and improved product visibility.",
      tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Razorpay"],
      image: vera,
      gradient: "from-emerald-500 to-teal-600",
      live: "https://veraindia.co.in/",
      github: "#",
      featured: true,
    },
    {
      id: 5,
      title: "ShobhaDubai - Luxury Real Estate Platform",
      desc: "Luxury property showcase platform featuring premium real estate projects and immersive browsing experience.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux"],
      image: dashboardImage,
      gradient: "from-amber-500 to-orange-600",
      live: "https://shobhadubai.vercel.app/",
      github: "https://github.com/Gautam7701/ShobhaDubai",
      featured: false,
    },
    {
      id: 6,
      title: "Jewelanaire - Jewellery E-Commerce Website",
      desc: "Premium jewellery e-commerce website built for a client with modern UI and responsive shopping experience.",
      tech: ["Shopify", "HTML", "CSS", "Razorpay", "UI/UX"],
      image: socialImage,
      gradient: "from-purple-500 to-violet-600",
      live: "https://jewelanaire.com/",
      github: "#",
      featured: false,
    },
    {
      id: 7,
      title: "PromptSpot - Creative Prompt Sharing Platform",
      desc: "Open-source AI platform for discovering, creating, and sharing prompts for creative projects.",
      tech: ["React.js", "Next.js", "MongoDB", "Node.js", "Redux"],
      image: promptspot,
      gradient: "from-sky-500 to-cyan-600",
      live: "https://promptspots.vercel.app/",
      github: "https://github.com/Gautam7701/Promptspot",
      featured: false,
    },
    {
      id: 8,
      title: "IRADA - Youth Environmental Summit",
      desc: "Event website built to increase participant engagement and provide information about environmental initiatives.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "JSX"],
      image: irada,
      gradient: "from-green-500 to-emerald-600",
      live: "https://iraada.vercel.app/",
      github: "https://github.com/Gautam7701/irada/",
      featured: false,
    },
    {
      id: 9,
      title: "Nike Shoes - Frontend E-Commerce Platform",
      desc: "Modern shoe store interface featuring product showcases, reviews, offers, and responsive design.",
      tech: ["React.js", "Redux", "JavaScript", "Tailwind CSS"],
      image: nikeshoes,
      gradient: "from-red-500 to-orange-600",
      live: "https://nikefusion.netlify.app/",
      github: "https://github.com/Gautam7701/Nike",
      featured: false,
    },
    {
      id: 10,
      title: "MOVIEMATE - Movie Discovery Platform",
      desc: "Movie recommendation platform with API integration, real-time data fetching, and responsive UI.",
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Redux", "API"],
      image: moviemate,
      gradient: "from-indigo-500 to-purple-600",
      live: "https://filmmate.netlify.app/",
      github: "https://github.com/Gautam7701/MovieMate",
      featured: false,
    },
  ],
  experience: [
    {
      year: "2026",
      title: "Frontend Developer Intern",
      org: "ONNOFF",
      type: "work",
      desc: "Built and optimized high-performance brand websites focused on premium UI, animations, and responsiveness. Implemented smooth motion interactions using React.js and Next.js to deliver cinematic, storytelling-driven web experiences.",
    },
    {
      year: "2025",
      title: "Freelance Frontend Developer",
      org: "Independent Projects",
      type: "work",
      desc: "Delivered two freelance web projects for clients, building responsive and interactive websites using React.js. Managed complete frontend development from UI implementation to deployment.",
    },
    {
      year: "2025",
      title: "Frontend Developer",
      org: "React.js | Web Development",
      type: "work",
      desc: "Building modern web applications with React.js, JavaScript, and frontend technologies. Focused on smooth animations, reusable components, and performance-driven interfaces.",
    },
    {
      year: "2024",
      title: "Frontend Developer Intern",
      org: "Vera",
      type: "work",
      desc: "Developed responsive user interfaces, reusable components, and optimized frontend experiences while working with modern web development practices.",
    },
    {
      year: "2024",
      title: "Technical Organizer",
      org: "The ACE - Tech Event",
      type: "award",
      desc: "Managed technical operations for a tech event with 300+ participants and 15+ speakers. Handled website, presentations, and complete technical workflow.",
    },
    {
      year: "2024",
      title: "Technical Volunteer",
      org: "Google Developer Student Club",
      type: "work",
      desc: "Supported technical execution for a tech event with 500+ attendees, managing digital platforms and technical requirements.",
    },
    {
      year: "2024",
      title: "Community Member",
      org: "Rotaract Club of Delhi South East",
      type: "work",
      desc: "Organized social initiatives including Greenathon, where 450+ saplings were planted across multiple locations.",
    },
    {
      year: "2022 - 2026",
      title: "B.Tech Computer Science Engineering",
      org: "Computer Science & Engineering",
      type: "edu",
      desc: "Focused on software development, frontend engineering, web technologies, and building real-world applications.",
    },
  ],
};

const navLinks = ["about", "projects", "experience", "skills", "contact"];
const sectionIds = ["hero", ...navLinks];

const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function useLenis() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reduceMotion]);
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function MagneticButton({ children, className = "", href, onClick, disabled = false, ariaLabel, type = "button" }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event) => {
    if (reduceMotion || disabled || !ref.current || event.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * 0.16}px, ${y * 0.22}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0, 0, 0)";
  };

  const sharedProps = {
    ref,
    className: `magnetic ${className}`,
    onPointerMove: handlePointerMove,
    onPointerLeave: reset,
    onBlur: reset,
    "aria-label": ariaLabel,
  };

  if (href) {
    return (
      <a
        {...sharedProps}
        href={disabled ? undefined : href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button {...sharedProps} type={type} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {children}
    </button>
  );
}

function CursorAura() {
  const [cursor, setCursor] = useState({ x: -120, y: -120, active: false, visible: false });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return undefined;

    const onMove = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const active = Boolean(target?.closest("a, button, .project-card, .skill-chip"));
      setCursor({ x: event.clientX, y: event.clientY, active, visible: true });
    };
    const onLeave = () => setCursor((current) => ({ ...current, visible: false }));

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      className={`cursor-aura ${cursor.active ? "is-active" : ""} ${cursor.visible ? "is-visible" : ""}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    />
  );
}

function ParticleField() {
  const canvasRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    const mouse = { x: -1000, y: -1000 };
    let animationFrame = 0;
    let particles = [];
    let width = 0;
    let height = 0;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = reduceMotion ? 36 : Math.min(110, Math.max(46, Math.floor((width * height) / 12000)));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: 0.8 + Math.random() * 1.6,
        orbit: index % 5,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const gradient = context.createRadialGradient(width * 0.65, height * 0.32, 0, width * 0.65, height * 0.32, width * 0.72);
      gradient.addColorStop(0, "rgba(56, 189, 248, 0.09)");
      gradient.addColorStop(0.45, "rgba(59, 130, 246, 0.035)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reduceMotion) {
          particle.x += particle.vx + Math.sin(Date.now() * 0.0004 + particle.orbit) * 0.06;
          particle.y += particle.vy + Math.cos(Date.now() * 0.00035 + particle.orbit) * 0.05;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(0, 1 - distance / 170);

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius + glow * 2.4, 0, Math.PI * 2);
        context.fillStyle = `rgba(${glow > 0 ? "125, 211, 252" : "148, 163, 184"}, ${0.16 + glow * 0.52})`;
        context.fill();

        for (let next = index + 1; next < particles.length; next += 1) {
          const target = particles[next];
          const lineDx = particle.x - target.x;
          const lineDy = particle.y - target.y;
          const lineDistance = Math.sqrt(lineDx * lineDx + lineDy * lineDy);

          if (lineDistance < 92) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(target.x, target.y);
            context.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - lineDistance / 92)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      });

      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    const handlePointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [reduceMotion]);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}

function Nav({ activeSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const goTo = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand-mark" href="#hero" onClick={(event) => {
        event.preventDefault();
        goTo("hero");
      }}>
        <span>G</span>
        <strong>Gautam</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <button
            key={link}
            type="button"
            className={activeSection === link ? "is-active" : ""}
            onClick={() => goTo(link)}
          >
            {link}
          </button>
        ))}
      </nav>

      <div className="header-actions">
        <MagneticButton className="nav-resume" href={DATA.resumeUrl} ariaLabel="Download Gautam Gupta resume">
          Resume <FiArrowUpRight aria-hidden="true" />
        </MagneticButton>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navLinks.map((link) => (
              <button key={link} type="button" onClick={() => goTo(link)}>
                {link}
              </button>
            ))}
            <a href={DATA.resumeUrl}>Download resume</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionHeading({ eyebrow, title, accent, align = "left" }) {
  return (
    <motion.div
      className={`section-heading align-${align}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title}
        {accent && <span>{accent}</span>}
      </h2>
    </motion.div>
  );
}

function Hero() {
  const words = useMemo(() => [DATA.role, "React Developer", "Full Stack Developer", "UI Engineer", "Creative Developer"], []);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((index) => (index + 1) % words.length), 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="hero" className="hero-section">
      <ParticleField />
      <div className="hero-grid" aria-hidden="true" />
      <motion.div
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="availability-pill" variants={fadeUp}>
          <span />
          {DATA.location}
        </motion.div>

        <motion.h1 variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <span>Hey, I'm</span>
          <strong>Gautam</strong>
        </motion.h1>

        <motion.div className="hero-role" variants={fadeUp}>
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              initial={{ y: 18, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -18, opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.32 }}
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p className="hero-copy" variants={fadeUp}>
          {DATA.tagline}
        </motion.p>

        <motion.div className="hero-actions" variants={fadeUp}>
          <MagneticButton className="button button-primary" onClick={() => scrollToSection("projects")}>
            View Projects <FiArrowUpRight aria-hidden="true" />
          </MagneticButton>
          <MagneticButton className="button button-secondary" onClick={() => scrollToSection("contact")}>
            Let's Talk <FiSend aria-hidden="true" />
          </MagneticButton>
        </motion.div>

        <motion.div className="hero-socials" variants={fadeUp}>
          <a href={DATA.socials.github} target="_blank" rel="noopener noreferrer">
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a href={DATA.resumeUrl}>
            <FiDownload aria-hidden="true" /> Resume
          </a>
        </motion.div>
      </motion.div>

      <button className="scroll-cue" type="button" onClick={() => scrollToSection("about")} aria-label="Scroll to about section">
        <span>Scroll</span>
        <FiArrowDown aria-hidden="true" />
      </button>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-shell about-grid">
        <div>
          <SectionHeading eyebrow="About" title="Developer by craft," accent="designer by taste" />
          <motion.div
            className="about-copy"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            {DATA.about.bio.map((paragraph) => (
              <motion.p key={paragraph} variants={fadeUp}>
                {paragraph.replaceAll("*", "")}
              </motion.p>
            ))}
            <motion.a className="inline-link" href={DATA.resumeUrl} variants={fadeUp}>
              Download Resume <FiDownload aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="profile-panel"
          initial={{ opacity: 0, y: 36, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="profile-initials">GG</div>
          <div className="profile-meta">
            <span><FiMapPin aria-hidden="true" /> {DATA.location}</span>
            <strong>{DATA.role}</strong>
          </div>
        </motion.div>

        <motion.div
          className="highlight-strip"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {DATA.about.highlights.map((highlight, index) => (
            <motion.div className="highlight-card" key={highlight} variants={fadeUp}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{highlight}</strong>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("all");
  const projects = filter === "featured" ? DATA.projects.filter((project) => project.featured) : DATA.projects;

  return (
    <section id="projects" className="section projects-section">
      <div className="section-shell">
        <div className="section-topline">
          <SectionHeading eyebrow="Work" title="Selected" accent="production work" />
          <div className="filter-tabs" role="tablist" aria-label="Project filter">
            {["all", "featured"].map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                className={filter === item ? "is-active" : ""}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const hasGithub = project.github && project.github !== "#";

  return (
    <motion.article
      className={`project-card project-card-${(index % 4) + 1}`}
      layout
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 18, scale: 0.98 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.58, delay: Math.min(index * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
    >
      <div className="project-media">
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        <div className="project-shine" aria-hidden="true" />
        {project.featured && (
          <span className="featured-badge">
            <FiStar aria-hidden="true" /> Featured
          </span>
        )}
      </div>
      <div className="project-content">
        <div>
          <span className="project-index">{String(project.id).padStart(2, "0")}</span>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
        <div className="tech-list" aria-label={`${project.title} technology stack`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo <FiArrowUpRight aria-hidden="true" />
          </a>
          {hasGithub ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub <FiGithub aria-hidden="true" />
            </a>
          ) : (
            <span className="disabled-link" aria-label="GitHub repository is private or unavailable">
              Private <FiGithub aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Experience() {
  const iconMap = {
    work: FiBriefcase,
    award: FiStar,
    edu: FiCode,
    cert: FiTool,
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="section-shell narrow-shell">
        <SectionHeading eyebrow="Journey" title="Experience &" accent="achievements" align="center" />
        <motion.div
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {DATA.experience.map((item) => {
            const Icon = iconMap[item.type] || FiBriefcase;
            return (
              <motion.article className={`timeline-card type-${item.type}`} key={`${item.year}-${item.title}`} variants={fadeUp}>
                <div className="timeline-node">
                  <Icon aria-hidden="true" />
                </div>
                <div className="timeline-content">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.org}</strong>
                  <p>{item.desc}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const categoryIcons = {
    Frontend: FiMonitor,
    Styling: FiStar,
    AI_Integrations: FiCode,
    Backend: FiTool,
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="section-shell">
        <SectionHeading eyebrow="Toolkit" title="Skills &" accent="technologies" align="center" />
        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {Object.entries(DATA.skills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || FiCode;
            return (
              <motion.article className="skill-card" key={category} variants={fadeUp}>
                <div className="skill-card-head">
                  <Icon aria-hidden="true" />
                  <h3>{category.replace("_", " ")}</h3>
                </div>
                <div className="skill-chips">
                  {skills.map((skill) => (
                    <span className="skill-chip" key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shell contact-grid">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's build something" accent="remarkable together" />
          <motion.p
            className="contact-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Open to full-time roles, freelance projects, and interesting collaborations.
          </motion.p>

          <motion.div
            className="contact-links"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.a variants={fadeUp} href={`mailto:${DATA.email}`}>
              <FiMail aria-hidden="true" />
              <span><strong>Email</strong>{DATA.email}</span>
            </motion.a>
            <motion.a variants={fadeUp} href={DATA.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin aria-hidden="true" />
              <span><strong>LinkedIn</strong>Connect with me</span>
            </motion.a>
            <motion.a variants={fadeUp} href={DATA.socials.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" />
              <span><strong>GitHub</strong>View my code</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                className="sent-state"
                key="sent"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                <FiSend aria-hidden="true" />
                <h3>Message sent!</h3>
                <p>I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    value={form.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    placeholder="What would you like to discuss?"
                    rows="5"
                  />
                </label>
                <MagneticButton className="button button-primary form-submit" type="submit">
                  Send Message <FiSend aria-hidden="true" />
                </MagneticButton>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Designed & built by <span>{DATA.name}</span> - {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function Portfolio() {
  useLenis();
  const activeSection = useActiveSection();

  return (
    <>
      <CursorAura />
      <Nav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
