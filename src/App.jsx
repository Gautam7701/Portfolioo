import { useState, useEffect, useRef, useCallback } from "react";
import Brainee from "../src/assets/assets/project1.png"
import dashboardImage from "../src/assets/assets/project2.png";
import socialImage from "../src/assets/assets/project3.png";
import promptspot from "../src/assets/assets/P4.png"
import irada from "../src/assets/assets/image.png"
import nikeshoes from "../src/assets/assets/P5.png"
import moviemate from "../src/assets/assets/Project7.png"
import hyrstack from "../src/assets/assets/hyrstack.png"
import connectree from "../src/assets/assets/connectree.png"
import vera from "../src/assets/assets/vera.png"
import afc from "../src/assets/assets/afc.png"

// ─────────────────────────────────────────────
//  ★  ALL PERSONAL DATA LIVES HERE — edit this
// ─────────────────────────────────────────────
const DATA = {
  name: "Gautam Gupta",
  role: "Frontend Developer",
  tagline: "Crafting interactive digital experiences that live at the intersection of design and code.",
  location: "Delhi NCR, India",
  email: "gautamgupta2606@gmail.com.com",
  resumeUrl: "/Gautam__Resume.pdf",
  socials: {
    github: "https://github.com/Gautam7701",
    linkedin: "https://www.linkedin.com/in/gautamgupta13/",
    twitter: "https://twitter.com",
  },
  about: {
    bio: [
      "I'm a frontend developer who obsesses over the details — micro-interactions, performance budgets, and the feeling a user gets when a UI just *works*.",
      "My journey started with curiosity about how pixels become experiences. Today I build scalable interfaces at the edge of what browsers can do.",
    ],
    highlights: ["React Developer", "15+ Projects Shipped", "Open Source Contributor", "AI Enthusiast"],
  },
  skills: {
    Frontend: ["React.js",
      "Next.js 15",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",],

    Styling: ["Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Styled Components",
      "Sass",
      "shadcn/ui"],
    AI_Integrations: [
      "OpenAI API",
      "Inngest",
      "Clerk (Auth)",
      "AI Streaming",
      "Prompt Engineering",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Prisma ORM",
      "NeonDB (PostgreSQL)",
    ],

  },
  projects: [
    {
      id: 1,
      title: "HyrStack – AI Career & Interview Preparation Platform",
      desc: "AI-powered career platform with mock interviews, AI resumes, career insights, authentication, dashboards, and PDF export.",
      tech: [
        "Next.js",
        "React.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "Tailwind CSS",
      ],
      image: hyrstack,
      gradient: "from-violet-600 to-indigo-600",
      live: "https://hyrstack.vercel.app/",
      github: "https://github.com/Gautam7701/HyrStack",
      featured: true,
    },
    {
      id: 4,
      title: "Connectr.ee – Personal Link Portfolio Platform",
      desc: "Full-stack link-in-bio platform allowing users to manage and showcase multiple links with authentication.",
      tech: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Authentication",
        "Vercel",
      ],
      image: connectree,
      gradient: "from-pink-500 to-rose-600",
      live: "https://connectr.ee/",
      github: "https://github.com/jaseemuddinn/connectree.git",
      featured: true,
    },
    {
      id: 2,
      title: "Brainee – AI-Powered Learning Platform",
      desc: "AI learning platform with chatbot, image generation, code generation, voice-to-text, and text summarization.",
      tech: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      image: Brainee,
      gradient: "from-cyan-500 to-blue-600",
      live: "https://brainee-theta.vercel.app/",
      github: "https://github.com/Gautam7701/Brainee",
      featured: true,
    },
    {
      id: 11,
      title: "AFC Namrata’s Kitchen – Digital Food Experience",

      desc: "A responsive restaurant website built to showcase homemade flavors with an interactive menu, online ordering flow, customer reviews, and a premium brand experience.",
      tech: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      image: afc,
      gradient: "from-cyan-500 to-blue-600",
      live: "https://namrataskitchen.vercel.app/",
      github: "https://github.com/Gautam7701/AFCNamrataKitchen",
      featured: true,
    },
    {
      id: 3,
      title: "Vera – Shopify E-Commerce Store",
      desc: "Production-ready Shopify store with optimized listings, referral system, and improved product visibility.",
      tech: [
        "Shopify",
        "Liquid",
        "HTML",
        "CSS",
        "JavaScript",
        "Razorpay",
      ],
      image: vera,
      gradient: "from-emerald-500 to-teal-600",
      live: "https://veraindia.co.in/",
      github: "#",
      featured: true,
    },
    {
      id: 5,
      title: "ShobhaDubai – Luxury Real Estate Platform",
      desc: "Luxury property showcase platform featuring premium real estate projects and immersive browsing experience.",
      tech: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
      ],
      image: dashboardImage,
      gradient: "from-amber-500 to-orange-600",
      live: "https://shobhadubai.vercel.app/",
      github: "https://github.com/Gautam7701/ShobhaDubai",
      featured: false,
    },
    {
      id: 6,
      title: "Jewelanaire – Jewellery E-Commerce Website",
      desc: "Premium jewellery e-commerce website built for a client with modern UI and responsive shopping experience.",
      tech: [
        "Shopify",
        "HTML",
        "CSS",
        "Razorpay",
        "UI/UX",
      ],
      image: socialImage,
      gradient: "from-purple-500 to-violet-600",
      live: "https://jewelanaire.com/",
      github: "#",
      featured: false,
    },
    {
      id: 7,
      title: "PromptSpot – Creative Prompt Sharing Platform",
      desc: "Open-source AI platform for discovering, creating, and sharing prompts for creative projects.",
      tech: [
        "React.js",
        "Next.js",
        "MongoDB",
        "Node.js",
        "Redux",
      ],
      image: promptspot,
      gradient: "from-sky-500 to-cyan-600",
      live: "https://promptspots.vercel.app/",
      github: "https://github.com/Gautam7701/Promptspot",
      featured: false,
    },
    {
      id: 8,
      title: "IRADA – Youth Environmental Summit",
      desc: "Event website built to increase participant engagement and provide information about environmental initiatives.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "JSX",
      ],
      image: irada,
      gradient: "from-green-500 to-emerald-600",
      live: "https://iraada.vercel.app/",
      github: "https://github.com/Gautam7701/irada/",
      featured: false,
    },
    {
      id: 9,
      title: "Nike Shoes – Frontend E-Commerce Platform",
      desc: "Modern shoe store interface featuring product showcases, reviews, offers, and responsive design.",
      tech: [
        "React.js",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
      ],
      image: nikeshoes,
      gradient: "from-red-500 to-orange-600",
      live: "https://nikefusion.netlify.app/",
      github: "https://github.com/Gautam7701/Nike",
      featured: false,
    },
    {
      id: 10,
      title: "MOVIEMATE – Movie Discovery Platform",
      desc: "Movie recommendation platform with API integration, real-time data fetching, and responsive UI.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Redux",
        "API",
      ],
      image: moviemate,
      gradient: "from-indigo-500 to-purple-600",
      live: "https://filmmate.netlify.app/",
      github: "https://github.com/Gautam7701/MovieMate",
      featured: false,
    },
  ],
  experience: [
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
      org: "Web Developer Internship",
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

// ─────────────────────────────────────────────
//  Utility: clamp mouse-relative value
// ─────────────────────────────────────────────
const lerp = (a, b, t) => a + (b - a) * t;

// ─────────────────────────────────────────────
//  Canvas Particle Field (Hero BG)
// ─────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      const count = Math.floor((W * H) / 9000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const mx = mouse.current.x;
      const my = mouse.current.y;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = dist < 120 ? 1 - dist / 120 : 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glow > 0 ? "99,179,237" : "148,163,184"},${p.alpha + glow * 0.6})`;
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,70,229,${0.15 * (1 - d / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.7,
      }}
    />
  );
}

// ─────────────────────────────────────────────
//  Custom Cursor
// ─────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const hovering = useRef(false);

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px,${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      hovering.current = true;
      ringRef.current?.classList.add("cursor-hover");
    };
    const onLeave = () => {
      hovering.current = false;
      ringRef.current?.classList.remove("cursor-hover");
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,[data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4F46E5",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "background 0.2s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1.5px solid rgba(79,70,229,0.6)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}

// ─────────────────────────────────────────────
//  Scroll Reveal Hook
// ─────────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─────────────────────────────────────────────
//  Tilt Card
// ─────────────────────────────────────────────
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 14;
    const y = ((e.clientY - top) / height - 0.5) * -14;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────
//  Magnetic Button
// ─────────────────────────────────────────────
function MagneticBtn({ children, className = "", onClick, href }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.35;
    const y = (e.clientY - top - height / 2) * 0.35;
    el.style.transform = `translate(${x}px,${y}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: "transform 0.3s cubic-bezier(.23,1,.32,1)", display: "inline-block" }}
    >
      {children}
    </Tag>
  );
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
function Nav({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = ["about", "projects", "experience", "skills", "contact"];

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 2rem",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(5,8,16,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(79,70,229,0.15)" : "none",
      transition: "all 0.3s ease",
    }}>
      {/* Logo */}
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#F1F5F9", letterSpacing: "-0.02em" }}>
        <span style={{ color: "#4F46E5" }}>&lt;</span>
        {DATA.name.split(" ")[0]}
        <span style={{ color: "#06B6D4" }}>/</span>
        <span style={{ color: "#4F46E5" }}>&gt;</span>
      </div>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem" }} className="nav-desktop">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: activeSection === l ? "#4F46E5" : "#94A3B8",
              textTransform: "capitalize",
              letterSpacing: "0.03em",
              transition: "color 0.2s",
              padding: "4px 0",
              position: "relative",
            }}
          >
            {l}
            {activeSection === l && (
              <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#4F46E5,#06B6D4)", borderRadius: 2 }} />
            )}
          </button>
        ))}
        <MagneticBtn
          href={DATA.resumeUrl}
          className=""
          style={{}}
        >
          <span style={{
            padding: "6px 16px",
            border: "1px solid rgba(79,70,229,0.5)",
            borderRadius: 6,
            fontSize: "0.875rem",
            color: "#A5B4FC",
            fontFamily: "'Inter', sans-serif",
            display: "block",
            transition: "all 0.2s",
          }}>
            Resume ↗
          </span>
        </MagneticBtn>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}>
        <span style={{ color: "#F1F5F9", fontSize: "1.4rem" }}>{open ? "✕" : "☰"}</span>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, background: "rgba(5,8,16,0.97)", backdropFilter: "blur(12px)",
          padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", borderBottom: "1px solid rgba(79,70,229,0.2)",
        }}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem", color: "#F1F5F9", textTransform: "capitalize", textAlign: "left",
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}


// function Hero() {
//   const [typed, setTyped] = useState("");
//   const [loaded, setLoaded] = useState(false);

//   const words = [
//     DATA.role,
//     "React Developer",
//     "Full Stack Developer",
//     "UI Engineer",
//     "Creative Developer",
//   ];
//   const wordIdx = useRef(0);
//   const charIdx = useRef(0);
//   const deleting = useRef(false);

//   useEffect(() => {
//     const t = setTimeout(() => setLoaded(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     const tick = () => {
//       const word = words[wordIdx.current];
//       if (!deleting.current) {
//         charIdx.current++;
//         setTyped(word.slice(0, charIdx.current));
//         if (charIdx.current === word.length) {
//           deleting.current = true;
//           setTimeout(tick, 1600);
//           return;
//         }
//       } else {
//         charIdx.current--;
//         setTyped(word.slice(0, charIdx.current));
//         if (charIdx.current === 0) {
//           deleting.current = false;
//           wordIdx.current = (wordIdx.current + 1) % words.length;
//         }
//       }
//       setTimeout(tick, deleting.current ? 45 : 75);
//     };
//     const t = setTimeout(tick, 600);
//     return () => clearTimeout(t);
//   }, []);

//   const scrollTo = (id) =>
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   const techStack = [
//     "React.js",
//     "Next.js 15",
//     "TypeScript",
//     "Tailwind CSS",
//     "Node.js",
//     "OpenAI API",
//     "Prisma",
//     "Framer Motion",
//   ];

//   const socials = [
//     {
//       label: "GitHub",
//       url: DATA.socials.github,
//       icon: (
//         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
//         </svg>
//       ),
//     },
//     {
//       label: "LinkedIn",
//       url: DATA.socials.linkedin,
//       icon: (
//         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//           <circle cx="4" cy="4" r="2" />
//         </svg>
//       ),
//     },
//     {
//       label: "Portfolio",
//       url: "https://gguptaa.vercel.app",
//       icon: (
//         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
//           <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section
//       id="hero"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//         background: "#050810",
//         padding: "0 7%",
//         fontFamily: "'Inter', sans-serif",
//       }}
//     >
//       {/* Particle background */}
//       <ParticleCanvas />

//       {/* Ambient glows */}
//       <div
//         style={{
//           position: "absolute",
//           top: "10%",
//           left: "-8%",
//           width: 520,
//           height: 520,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "5%",
//           right: "8%",
//           width: 380,
//           height: 380,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       {/* Main content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 2,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: "3rem",
//           opacity: loaded ? 1 : 0,
//           transform: loaded ? "translateY(0)" : "translateY(28px)",
//           transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(.23,1,.32,1)",
//         }}
//       >
//         {/* ─── LEFT SIDE ─── */}
//         <div style={{ flex: 1, maxWidth: "660px" }}>

//           {/* Eyebrow */}
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               marginBottom: "28px",
//               fontSize: "11px",
//               letterSpacing: "3.5px",
//               color: "#06B6D4",
//               fontWeight: 500,
//               textTransform: "uppercase",
//             }}
//           >
//             <span
//               style={{
//                 width: 7,
//                 height: 7,
//                 borderRadius: "50%",
//                 background: "#06B6D4",
//                 boxShadow: "0 0 8px rgba(6,182,212,0.8)",
//                 display: "inline-block",
//                 animation: "pulseDot 2s ease-in-out infinite",
//               }}
//             />
//             Available for Opportunities
//           </div>

//           {/* Name */}
//           <h1
//             style={{
//               fontFamily: "'Playfair Display', serif",
//               fontSize: "clamp(4.5rem, 9vw, 7.5rem)",
//               fontWeight: 700,
//               lineHeight: 0.92,
//               letterSpacing: "-0.04em",
//               color: "#F1F5F9",
//               margin: 0,
//             }}
//           >
//             GAUTAM
//             <br />
//             <span
//               style={{
//                 fontStyle: "italic",
//                 fontWeight: 400,
//                 background: "linear-gradient(100deg,#A5B4FC 0%,#06B6D4 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Gupta
//             </span>
//           </h1>

//           {/* Divider accent */}
//           <div
//             style={{
//               width: 48,
//               height: 2,
//               background: "linear-gradient(90deg,#6366F1,transparent)",
//               margin: "22px 0",
//             }}
//           />

//           {/* Typed role */}
//           <div
//             style={{
//               fontFamily: "'Space Grotesk', sans-serif",
//               fontSize: "clamp(1.3rem, 2.8vw, 1.85rem)",
//               fontWeight: 500,
//               color: "#A5B4FC",
//               letterSpacing: "-0.01em",
//               minHeight: "2.4rem",
//               marginBottom: "20px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             {typed}
//             <span
//               style={{
//                 display: "inline-block",
//                 width: 2,
//                 height: "1.2em",
//                 background: "#06B6D4",
//                 marginLeft: 3,
//                 verticalAlign: "middle",
//                 animation: "blink 0.75s step-end infinite",
//               }}
//             />
//           </div>

//           {/* Tagline */}
//           <p
//             style={{
//               fontSize: "1.05rem",
//               lineHeight: 1.8,
//               color: "#64748B",
//               maxWidth: "490px",
//               marginBottom: "36px",
//             }}
//           >
//             I build{" "}
//             <span style={{ color: "#94A3B8" }}>interactive web experiences</span>{" "}
//             using React, Next.js and AI.
//             <br />
//             Fast, beautiful, and memorable — from concept to deployment.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             style={{
//               display: "flex",
//               gap: "14px",
//               flexWrap: "wrap",
//               marginBottom: "40px",
//             }}
//           >
//             <MagneticBtn onClick={() => scrollTo("projects")}>
//               <span
//                 style={{
//                   display: "block",
//                   padding: "13px 30px",
//                   borderRadius: "10px",
//                   background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
//                   color: "#fff",
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "0.9rem",
//                   fontWeight: 600,
//                   cursor: "pointer",
//                   letterSpacing: "0.02em",
//                   boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-3px)";
//                   e.currentTarget.style.boxShadow =
//                     "0 8px 36px rgba(139,92,246,0.55)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow =
//                     "0 4px 24px rgba(99,102,241,0.35)";
//                 }}
//               >
//                 View Projects →
//               </span>
//             </MagneticBtn>

//            <MagneticBtn onClick={() => scrollTo("contact")}>
//   <span
//     style={{
//       display: "block",
//       padding: "13px 30px",
//       borderRadius: "10px",
//       border: "1px solid rgba(6,182,212,0.5)",
//       color: "#06B6D4",
//       background: "rgba(6,182,212,0.08)",
//       fontFamily: "'Inter', sans-serif",
//       fontSize: "0.9rem",
//       fontWeight: 500,
//       cursor: "pointer",
//       letterSpacing: "0.02em",
//       transition: "all 0.3s ease",
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.background = "rgba(6,182,212,0.18)";
//       e.currentTarget.style.borderColor = "rgba(6,182,212,0.9)";
//       e.currentTarget.style.transform = "translateY(-3px)";
//       e.currentTarget.style.boxShadow = "0 6px 24px rgba(6,182,212,0.25)";
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.background = "rgba(6,182,212,0.08)";
//       e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)";
//       e.currentTarget.style.transform = "translateY(0)";
//       e.currentTarget.style.boxShadow = "none";
//     }}
//   >
//     Let's Talk →
//   </span>
// </MagneticBtn>
//           </div>

//           {/* Socials */}
//           <div style={{ display: "flex", gap: "22px" }}>
//             {socials.map(({ label, url, icon }) => (
//               <a
//                 key={label}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 6,
//                   fontSize: "12px",
//                   color: "#334155",
//                   textDecoration: "none",
//                   fontWeight: 500,
//                   letterSpacing: "0.05em",
//                   transition: "color 0.2s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#A5B4FC")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
//               >
//                 {icon}
//                 {label}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ─── RIGHT SIDE ─── */}
//         <div style={{ flexShrink: 0, width: "300px" }}>

//           {/* Tech Stack Card */}
//           <div
//             style={{
//               background:
//                 "linear-gradient(160deg, rgba(99,102,241,0.1) 0%, rgba(255,255,255,0.03) 100%)",
//               border: "1px solid rgba(99,102,241,0.2)",
//               borderRadius: "20px",
//               padding: "28px",
//               marginBottom: "14px",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: "10px",
//                 textTransform: "uppercase",
//                 letterSpacing: "3px",
//                 color: "#4F46E5",
//                 fontFamily: "'Inter', sans-serif",
//                 fontWeight: 600,
//                 margin: "0 0 16px",
//               }}
//             >
//               Tech Stack
//             </p>

//             {/* Pills */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "8px",
//                 marginBottom: "24px",
//               }}
//             >
//               {techStack.map((tech) => (
//                 <span
//                   key={tech}
//                   style={{
//                     padding: "5px 12px",
//                     borderRadius: "20px",
//                     fontSize: "12px",
//                     fontFamily: "'Space Grotesk', sans-serif",
//                     fontWeight: 500,
//                     border: "1px solid rgba(165,180,252,0.2)",
//                     color: "#A5B4FC",
//                     background: "rgba(99,102,241,0.08)",
//                     letterSpacing: "0.02em",
//                   }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {/* Divider */}
//             <div
//               style={{
//                 height: 1,
//                 background: "rgba(255,255,255,0.06)",
//                 margin: "0 0 20px",
//               }}
//             />

//             {/* Stats grid */}
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: "12px",
//               }}
//             >
//               {[
//                 { num: "25", suffix: "+", label: "Projects" },
//                 { num: "10", suffix: "+", label: "Technologies" },
//               ].map(({ num, suffix, label }) => (
//                 <div
//                   key={label}
//                   style={{
//                     textAlign: "center",
//                     padding: "14px 10px",
//                     borderRadius: "12px",
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.06)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontFamily: "'Space Grotesk', sans-serif",
//                       fontSize: "1.6rem",
//                       fontWeight: 600,
//                       color: "#F1F5F9",
//                       lineHeight: 1,
//                       marginBottom: 4,
//                     }}
//                   >
//                     {num}
//                     <span style={{ fontSize: "1rem", color: "#4F46E5" }}>
//                       {suffix}
//                     </span>
//                   </div>
//                   <div
//                     style={{
//                       fontSize: "11px",
//                       color: "#475569",
//                       letterSpacing: "0.05em",
//                       textTransform: "uppercase",
//                       fontFamily: "'Inter', sans-serif",
//                     }}
//                   >
//                     {label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Open to Work card */}
//           <div
//             style={{
//               border: "1px solid rgba(6,182,212,0.25)",
//               borderRadius: "14px",
//               padding: "16px 20px",
//               display: "flex",
//               alignItems: "center",
//               gap: "12px",
//               background: "rgba(6,182,212,0.04)",
//             }}
//           >
//             <div
//               style={{
//                 width: 36,
//                 height: 36,
//                 borderRadius: "50%",
//                 background: "rgba(6,182,212,0.12)",
//                 border: "1px solid rgba(6,182,212,0.3)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexShrink: 0,
//               }}
//             >
//               <span
//                 style={{
//                   width: 10,
//                   height: 10,
//                   borderRadius: "50%",
//                   background: "#06B6D4",
//                   boxShadow: "0 0 10px rgba(6,182,212,0.7)",
//                   display: "block",
//                   animation: "pulseDot 2s ease-in-out infinite",
//                 }}
//               />
//             </div>
//             <div>
//               <div
//                 style={{
//                   fontSize: "13px",
//                   fontWeight: 600,
//                   color: "#E2E8F0",
//                   fontFamily: "'Inter', sans-serif",
//                   marginBottom: 2,
//                 }}
//               >
//                 Open to Work
//               </div>
//               <div
//                 style={{
//                   fontSize: "11px",
//                   color: "#475569",
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Frontend · Full Stack · Delhi NCR / Remote
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll cue */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 32,
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 8,
//           opacity: 0.35,
//           zIndex: 2,
//         }}
//       >
//         <span
//           style={{
//             color: "#94A3B8",
//             fontSize: "0.65rem",
//             letterSpacing: "0.18em",
//             fontFamily: "'Inter', sans-serif",
//             textTransform: "uppercase",
//           }}
//         >
//           scroll
//         </span>
//         <div
//           style={{
//             width: 1,
//             height: 40,
//             background: "linear-gradient(to bottom,#4F46E5,transparent)",
//             animation: "scrollLine 1.5s ease-in-out infinite",
//           }}
//         />
//       </div>

//       <style>{`
//         @keyframes pulseDot {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50%       { opacity: 0.5; transform: scale(0.8); }
//         }
//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50%       { opacity: 0; }
//         }
//         @keyframes scrollLine {
//           0%, 100% { opacity: 0.4; transform: scaleY(1); }
//           50%       { opacity: 1;   transform: scaleY(1.15); }
//         }
//       `}</style>
//     </section>
//   );
// }

function Hero() { const [typed, setTyped] = useState(""); const [loaded, setLoaded] = useState(false); const words = [DATA.role, "React Developer", "Full Stack Developer", "UI Engineer", "Creative Developer"]; const wordIdx = useRef(0); const charIdx = useRef(0); const deleting = useRef(false); useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []); useEffect(() => { const tick = () => { const word = words[wordIdx.current]; if (!deleting.current) { charIdx.current++; setTyped(word.slice(0, charIdx.current)); if (charIdx.current === word.length) { deleting.current = true; setTimeout(tick, 1400); return; } } else { charIdx.current--; setTyped(word.slice(0, charIdx.current)); if (charIdx.current === 0) { deleting.current = false; wordIdx.current = (wordIdx.current + 1) % words.length; } } setTimeout(tick, deleting.current ? 50 : 80); }; const t = setTimeout(tick, 600); return () => clearTimeout(t); }, []); const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); return (<section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: "radial-gradient(ellipse at 20% 50%, rgba(79,70,229,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.06) 0%, transparent 60%), #050810", }}> <ParticleCanvas /> {/* Decorative glows */} <div style={{ position: "absolute", top: "20%", left: "10%", width: 300, height: 300, borderRadius: "50%", background: "rgba(79,70,229,0.06)", filter: "blur(80px)", pointerEvents: "none" }} /> <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 250, height: 250, borderRadius: "50%", background: "rgba(6,182,212,0.05)", filter: "blur(80px)", pointerEvents: "none" }} /> <div style={{ position: "relative", zIndex: 1, maxWidth: 800, padding: "0 2rem", textAlign: "center", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 0.9s cubic-bezier(.23,1,.32,1)", }}> {/* Eyebrow */} <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, marginBottom: "1.5rem", border: "1px solid rgba(79,70,229,0.3)", background: "rgba(79,70,229,0.07)", fontSize: "0.8rem", color: "#A5B4FC", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", }}> <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06B6D4", display: "inline-block", animation: "pulse 2s infinite" }} /> Available for opportunities </div> {/* Name */} 
<h1
style={{
  position: "relative",
  whiteSpace: "nowrap",
  fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
  fontSize: "clamp(3rem, 9vw, 7rem)",
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: "-0.07em",
  marginBottom: "1rem",
  color: "transparent",
  background: "linear-gradient(180deg,#ffffff 10%,#a5b4fc 55%,#6366f1 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  textShadow: "0 0 50px rgba(99,102,241,.35)",
}}
>
  {DATA.name}

  <span
  style={{
    position:"absolute",
    right:"-18px",
    bottom:"10px",
    width:"10px",
    height:"10px",
    borderRadius:"50%",
    background:"#06B6D4",
    boxShadow:"0 0 25px #06B6D4",
    animation:"pulse 2s infinite"
  }}
  />
</h1> <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", fontWeight: 500, color: "#4F46E5", marginBottom: "1.5rem", minHeight: "2.5rem", letterSpacing: "-0.02em", }}> {typed} <span style={{ borderRight: "2px solid #06B6D4", animation: "blink 0.7s infinite", marginLeft: 2 }} /> </div> {/* Tagline */} <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "#94A3B8", lineHeight: 1.7, maxWidth: 560, margin: "0 auto 2.5rem", }}> {DATA.tagline} </p> {/* CTAs */} <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem", }} > <MagneticBtn onClick={() => scrollTo("projects")}> <span style={{ position: "relative", overflow: "hidden", display: "block", padding: "14px 34px", background: "linear-gradient(135deg,#6366F1,#8B5CF6,#4F46E5)", borderRadius: 12, fontSize: "0.95rem", fontWeight: 600, color: "#fff", fontFamily: "'Inter',sans-serif", letterSpacing: "0.02em", boxShadow: "0 0 35px rgba(99,102,241,.45)", transition: "all .35s ease", cursor: "pointer", }} onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px) scale(1.04)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(139,92,246,.65)"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 35px rgba(99,102,241,.45)"; }} > View Projects → </span> </MagneticBtn> <MagneticBtn onClick={() => scrollTo("contact")}>
  <span
    style={{
      display: "block",
      padding: "13px 30px",
      borderRadius: "10px",
      border: "1px solid rgba(6,182,212,0.5)",
      color: "#06B6D4",
      background: "rgba(6,182,212,0.08)",
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.9rem",
      fontWeight: 500,
      cursor: "pointer",
      letterSpacing: "0.02em",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(6,182,212,0.18)";
      e.currentTarget.style.borderColor = "rgba(6,182,212,0.9)";
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 6px 24px rgba(6,182,212,0.25)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "rgba(6,182,212,0.08)";
      e.currentTarget.style.borderColor = "rgba(6,182,212,0.5)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    Let's Talk →
  </span>
</MagneticBtn> </div> {/* Socials */} <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}> {[{ label: "GitHub", url: DATA.socials.github, icon: "⌥" }, { label: "LinkedIn", url: DATA.socials.linkedin, icon: "in" },].map(({ label, url, icon }) => (<a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#64748B", fontSize: "0.8rem", fontFamily: "'Inter', sans-serif", display: "flex", alignItems: "center", gap: 6, textDecoration: "none", transition: "color 0.2s", }} onMouseEnter={(e) => e.currentTarget.style.color = "#A5B4FC"} onMouseLeave={(e) => e.currentTarget.style.color = "#64748B"} > <span style={{ fontSize: "0.9rem" }}>{icon}</span> {label} </a>))} </div> </div> {/* Scroll cue */} <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4, }}> <span style={{ color: "#94A3B8", fontSize: "0.7rem", letterSpacing: "0.15em", fontFamily: "'Inter',sans-serif", textTransform: "uppercase" }}>scroll</span> <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #4F46E5, transparent)", animation: "scrollLine 1.5s ease-in-out infinite" }} /> </div> </section>); }

// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" ref={ref} style={{
      padding: "120px 2rem",
      maxWidth: 1100,
      margin: "0 auto",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "all 0.8s cubic-bezier(.23,1,.32,1)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        {/* Left: text */}
        <div>
          <div style={{ fontSize: "0.75rem", color: "#4F46E5", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            About
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#F1F5F9",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}>
            Developer by craft,<br />
            <span style={{ color: "#4F46E5" }}>designer</span> by taste
          </h2>

          {DATA.about.bio.map((p, i) => (
            <p key={i} style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem", color: "#94A3B8",
              lineHeight: 1.8, marginBottom: "1.2rem",
            }}>{p}</p>
          ))}

          <a href={DATA.resumeUrl} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            marginTop: "1.5rem", color: "#A5B4FC",
            fontFamily: "'Inter', sans-serif", fontSize: "0.9rem",
            textDecoration: "none",
            borderBottom: "1px solid rgba(165,180,252,0.3)",
            paddingBottom: 2,
          }}>
            Download Resume ↓
          </a>
        </div>

        {/* Right: highlights + avatar placeholder */}
        <div>
          {/* Avatar placeholder */}
          <div style={{
            width: "100%", aspectRatio: "1", maxWidth: 360, margin: "0 auto 2rem",
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(79,70,229,0.15), rgba(6,182,212,0.1))",
            border: "1px solid rgba(79,70,229,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ fontSize: "6rem", opacity: 0.3 }}>👤</div>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0,
              height: "100%",
              background: "linear-gradient(135deg, rgba(79,70,229,0.05), transparent)",
            }} />
            {/* Corner accents */}
            <div style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderTop: "2px solid #4F46E5", borderLeft: "2px solid #4F46E5" }} />
            <div style={{ position: "absolute", bottom: 12, right: 12, width: 20, height: 20, borderBottom: "2px solid #06B6D4", borderRight: "2px solid #06B6D4" }} />
            <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(5,8,16,0.7)", backdropFilter: "blur(8px)", borderRadius: 8, padding: "8px 12px", border: "1px solid rgba(79,70,229,0.2)" }}>
              <div style={{ color: "#F1F5F9", fontSize: "0.8rem", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600 }}>{DATA.location}</div>
            </div>
          </div>

          {/* Highlight cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {DATA.about.highlights.map((h, i) => (
              <div key={i} style={{
                padding: "16px", borderRadius: 12,
                background: "rgba(241,245,249,0.03)",
                border: "1px solid rgba(241,245,249,0.07)",
                textAlign: "center",
              }}>
                <div style={{ color: "#F1F5F9", fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>{h}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  PROJECTS
// ─────────────────────────────────────────────
function Projects() {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "featured" ? DATA.projects.filter((p) => p.featured) : DATA.projects;

  return (
    <section id="projects" style={{ padding: "120px 2rem", background: "rgba(241,245,249,0.01)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <div style={{
          opacity:  1 , transform: "translateY(0)" ,
          transition: "all 0.7s cubic-bezier(.23,1,.32,1)",
          marginBottom: "4rem",
        }}>
          <div style={{ fontSize: "0.75rem", color: "#4F46E5", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Work
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#F1F5F9",
              lineHeight: 1.1, letterSpacing: "-0.03em",
            }}>
              Selected<br /><span style={{ color: "#4F46E5" }}>Projects</span>
            </h2>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["all", "featured"].map((f) => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: "8px 18px", borderRadius: 100, border: "1px solid",
                  borderColor: filter === f ? "#4F46E5" : "rgba(241,245,249,0.1)",
                  background: filter === f ? "rgba(79,70,229,0.15)" : "transparent",
                  color: filter === f ? "#A5B4FC" : "#64748B",
                  fontFamily: "'Inter',sans-serif", fontSize: "0.8rem",
                  cursor: "pointer", textTransform: "capitalize",
                  transition: "all 0.2s",
                }}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <TiltCard>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position:"relative",
          opacity:  1,
          transform: "translateY(0)",
          transition: `all 0.7s cubic-bezier(.23,1,.32,1) ${delay}ms`,
          borderRadius: 16,
          border: "1px solid",
          borderColor: hovered ? "rgba(79,70,229,0.4)" : "rgba(241,245,249,0.08)",
          background: hovered ? "rgba(79,70,229,0.06)" : "rgba(241,245,249,0.02)",
          overflow: "hidden",
          cursor: "default",
          transition: "border-color 0.3s, background 0.3s",
        }}
      >
        {/* Image / gradient header */}
        {/* Image Header */}
        <div
          style={{
            height: 180,
            position: "relative",
            overflow: "hidden",
            background: "#111827",
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              display: "block",
              background:"red"
            }}
          />

          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent, rgba(5,8,16,0.6))",
            }}
          />

          {project.featured && (
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(5,8,16,0.7)",
                backdropFilter: "blur(8px)",
                borderRadius: 100,
                padding: "4px 10px",
                fontSize: "0.7rem",
                color: "#fff",
              }}
            >
              Featured
            </div>
          )}
        </div>
      
        {project.featured && (
          <div style={{
            position: "absolute", top: 12, right: 12,
            background: "rgba(5,8,16,0.6)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 100, padding: "4px 10px",
            fontSize: "0.7rem", color: "#F1F5F9",
            fontFamily: "'Inter',sans-serif", letterSpacing: "0.05em",
          }}>
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: "1.15rem", fontWeight: 700,
          color: "#F1F5F9", marginBottom: "0.6rem",
          letterSpacing: "-0.01em",
        }}>
          {project.title}
        </h3>
        <p style={{
          fontFamily: "'Inter',sans-serif",
          fontSize: "0.875rem", color: "#64748B",
          lineHeight: 1.7, marginBottom: "1.2rem",
        }}>
          {project.desc}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
          {project.tech.map((t) => (
            <span key={t} style={{
              padding: "4px 10px", borderRadius: 100,
              background: "rgba(79,70,229,0.1)",
              border: "1px solid rgba(79,70,229,0.2)",
              fontSize: "0.72rem", color: "#A5B4FC",
              fontFamily: "'Inter',sans-serif",
            }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: "block", textAlign: "center",
            padding: "9px", borderRadius: 8,
            background: "rgba(79,70,229,0.15)",
            border: "1px solid rgba(79,70,229,0.3)",
            color: "#A5B4FC", fontSize: "0.8rem",
            fontFamily: "'Inter',sans-serif", textDecoration: "none",
            transition: "all 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(79,70,229,0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(79,70,229,0.15)"}
          >
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
            flex: 1, display: "block", textAlign: "center",
            padding: "9px", borderRadius: 8,
            background: "rgba(241,245,249,0.04)",
            border: "1px solid rgba(241,245,249,0.1)",
            color: "#94A3B8", fontSize: "0.8rem",
            fontFamily: "'Inter',sans-serif", textDecoration: "none",
            transition: "all 0.2s",
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(241,245,249,0.08)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(241,245,249,0.04)"}
          >
            GitHub →
          </a>
        </div>
      </div>
    </TiltCard>
  );
}

// ─────────────────────────────────────────────
//  EXPERIENCE
// ─────────────────────────────────────────────
function Experience() {
  const [ref, visible] = useReveal();
  const icons = { work: "💼", cert: "🏅", award: "🏆", edu: "🎓" };
  const colors = { work: "#4F46E5", cert: "#06B6D4", award: "#F59E0B", edu: "#10B981" };

  return (
    <section id="experience" style={{ padding: "120px 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }} ref={ref}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(.23,1,.32,1)", marginBottom: "4rem",
        }}>
          <div style={{ fontSize: "0.75rem", color: "#4F46E5", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Journey
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#F1F5F9",
            lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            Experience &<br /><span style={{ color: "#4F46E5" }}>Achievements</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 0, top: 8, bottom: 0,
            width: 2,
            background: "linear-gradient(to bottom, #4F46E5, rgba(79,70,229,0.1))",
          }} />

          {DATA.experience.map((item, i) => (
            <div key={i} style={{
              position: "relative", marginBottom: "2.5rem",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: `all 0.7s cubic-bezier(.23,1,.32,1) ${i * 100}ms`,
            }}>
              {/* Dot */}
              <div style={{
                position: "absolute", left: -2 - 8,
                top: 6, width: 14, height: 14,
                borderRadius: "50%",
                background: colors[item.type] || "#4F46E5",
                border: "2px solid #050810",
                boxShadow: `0 0 10px ${colors[item.type]}60`,
              }} />

              <div style={{
                background: "rgba(241,245,249,0.02)",
                border: "1px solid rgba(241,245,249,0.07)",
                borderRadius: 12, padding: "1.25rem 1.5rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1rem" }}>{icons[item.type]}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk',sans-serif",
                      fontSize: "1rem", fontWeight: 700, color: "#F1F5F9",
                    }}>
                      {item.title}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: 2 }}>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: colors[item.type] }}>{item.org}</span>
                      <span style={{ color: "#334155", fontSize: "0.7rem" }}>·</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#475569" }}>{item.year}</span>
                    </div>
                  </div>
                </div>
                <p style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: "0.875rem", color: "#64748B",
                  lineHeight: 1.7, margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  SKILLS
// ─────────────────────────────────────────────
function Skills() {
  const [ref, visible] = useReveal();
  const catColors = {
    Frontend: { bg: "rgba(79,70,229,0.1)", border: "rgba(79,70,229,0.25)", tag: "rgba(79,70,229,0.15)", text: "#A5B4FC", dot: "#4F46E5" },
    Styling: { bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.2)", tag: "rgba(6,182,212,0.12)", text: "#67E8F9", dot: "#06B6D4" },
    Tools: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", tag: "rgba(16,185,129,0.12)", text: "#6EE7B7", dot: "#10B981" },
    AI_Integrations: { bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)", tag: "rgba(236,72,153,0.12)", text: "#F9A8D4", dot: "#EC4899" },
    Backend: { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", tag: "rgba(245,158,11,0.12)", text: "#FCD34D", dot: "#F59E0B" },
  };

  return (
    <section id="skills" style={{ padding: "120px 2rem", background: "rgba(241,245,249,0.01)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(.23,1,.32,1)", marginBottom: "4rem", textAlign: "center",
        }}>
          <div style={{ fontSize: "0.75rem", color: "#4F46E5", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Toolkit
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#F1F5F9",
            lineHeight: 1.1, letterSpacing: "-0.03em",
          }}>
            Skills & <span style={{ color: "#4F46E5" }}>Technologies</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {Object.entries(DATA.skills).map(([cat, skills], ci) => {
            const c = catColors[cat];
            return (
              <div key={cat} style={{
                padding: "1.75rem",
                borderRadius: 16,
                background: c.bg,
                border: `1px solid ${c.border}`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(.23,1,.32,1) ${ci * 120}ms`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, boxShadow: `0 0 10px ${c.dot}` }} />
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#F1F5F9" }}>{cat}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {skills.map((s) => (
                    <SkillTag key={s} label={s} bg={c.tag} text={c.text} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillTag({ label, bg, text }) {
  const [h, setH] = useState(false);
  return (
    <span
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-block", padding: "6px 12px", borderRadius: 100,
        background: h ? text + "22" : bg,
        color: text, fontSize: "0.78rem",
        fontFamily: "'Inter',sans-serif",
        transition: "all 0.2s",
        transform: h ? "translateY(-2px)" : "none",
        cursor: "default",
      }}>
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────
function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "120px 2rem 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s cubic-bezier(.23,1,.32,1)", textAlign: "center", marginBottom: "4rem",
        }}>
          <div style={{ fontSize: "0.75rem", color: "#4F46E5", fontFamily: "'Inter',sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Contact
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700, color: "#F1F5F9",
            lineHeight: 1.05, letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}>
            Let's build something<br />
            <span style={{ color: "#4F46E5" }}>remarkable together</span>
          </h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "1rem", color: "#64748B", maxWidth: 480, margin: "0 auto" }}>
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* Left: info */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s cubic-bezier(.23,1,.32,1) 0.1s",
          }}>
            {[
              { label: "Email", value: DATA.email, href: `mailto:${DATA.email}`, icon: "✉" },
              { label: "LinkedIn", value: "Connect with me", href: DATA.socials.linkedin, icon: "in" },
              { label: "GitHub", value: "View my code", href: DATA.socials.github, icon: "⌥" },
            ].map(({ label, value, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1rem",
                padding: "1.25rem", borderRadius: 12, marginBottom: "0.75rem",
                background: "rgba(241,245,249,0.02)",
                border: "1px solid rgba(241,245,249,0.07)",
                textDecoration: "none", transition: "all 0.2s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(79,70,229,0.3)"; e.currentTarget.style.background = "rgba(79,70,229,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(241,245,249,0.07)"; e.currentTarget.style.background = "rgba(241,245,249,0.02)"; }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "rgba(79,70,229,0.12)",
                  border: "1px solid rgba(79,70,229,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", color: "#A5B4FC", flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#F1F5F9" }}>{label}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#64748B" }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right: form */}
          <div style={{
            opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.8s cubic-bezier(.23,1,.32,1) 0.2s",
          }}>
            {sent ? (
              <div style={{
                textAlign: "center", padding: "3rem",
                background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: 16,
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "1.2rem", color: "#6EE7B7", fontWeight: 700 }}>Message sent!</div>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#64748B", marginTop: 8 }}>I'll get back to you soon.</div>
              </div>
            ) : (
              <div onSubmit={handleSubmit} style={{
                background: "rgba(241,245,249,0.02)",
                border: "1px solid rgba(241,245,249,0.08)",
                borderRadius: 16, padding: "2rem",
              }}>
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key} style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#94A3B8", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 14px",
                        background: "rgba(241,245,249,0.04)",
                        border: "1px solid rgba(241,245,249,0.1)",
                        borderRadius: 8, color: "#F1F5F9",
                        fontFamily: "'Inter',sans-serif", fontSize: "0.9rem",
                        outline: "none", boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => e.target.style.borderColor = "rgba(79,70,229,0.5)"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(241,245,249,0.1)"}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#94A3B8", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    Message
                  </label>
                  <textarea
                    placeholder="What would you like to discuss?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%", padding: "12px 14px",
                      background: "rgba(241,245,249,0.04)",
                      border: "1px solid rgba(241,245,249,0.1)",
                      borderRadius: 8, color: "#F1F5F9",
                      fontFamily: "'Inter',sans-serif", fontSize: "0.9rem",
                      outline: "none", boxSizing: "border-box", resize: "vertical",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "rgba(79,70,229,0.5)"}
                    onBlur={(e) => e.target.style.borderColor = "rgba(241,245,249,0.1)"}
                  />
                </div>
                <MagneticBtn onClick={() => setSent(true)}>
                  <span style={{
                    display: "block", width: "100%", padding: "13px",
                    background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                    borderRadius: 8, color: "#fff",
                    fontFamily: "'Inter',sans-serif", fontSize: "0.9rem", fontWeight: 600,
                    textAlign: "center", cursor: "pointer",
                    boxShadow: "0 0 30px rgba(79,70,229,0.25)",
                  }}>
                    Send Message →
                  </span>
                </MagneticBtn>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(241,245,249,0.05)",
      padding: "2rem",
      textAlign: "center",
    }}>
      <div style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.8rem", color: "#334155" }}>
        Designed & built by <span style={{ color: "#4F46E5" }}>{DATA.name}</span> · {new Date().getFullYear()}
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
//  LOADER
// ─────────────────────────────────────────────
function Loader({ done }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9000,
      background: "#050810",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column",
      opacity: done ? 0 : 1,
      pointerEvents: done ? "none" : "all",
      transition: "opacity 0.6s ease 0.2s",
    }}>
      <div style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontSize: "1.1rem", color: "#4F46E5",
        letterSpacing: "0.15em",
        marginBottom: "1.5rem",
        animation: "pulse 1s infinite",
      }}>
        {DATA.name.split("").map((c, i) => (
          <span key={i} style={{
            opacity: 0,
            animation: `fadeInChar 0.05s ease forwards`,
            animationDelay: `${i * 60}ms`,
            display: "inline-block",
          }}>{c === " " ? "\u00A0" : c}</span>
        ))}
      </div>
      <div style={{ width: 120, height: 2, background: "rgba(79,70,229,0.2)", borderRadius: 2, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, #4F46E5, #06B6D4)",
          borderRadius: 2,
          animation: "loadBar 1s ease forwards",
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
//  ROOT APP
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "projects", "experience", "skills", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Global styles injected via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; cursor: none; }
        body { background: #050810; color: #F1F5F9; overflow-x: hidden; }
        ::selection { background: rgba(79,70,229,0.35); color: #F1F5F9; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: #4F46E5; border-radius: 2px; }
        a { cursor: none; }
        button { cursor: none; }
        .cursor-hover { width: 60px !important; height: 60px !important; top: -30px !important; left: -30px !important; border-color: rgba(79,70,229,0.9) !important; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
        @keyframes loadBar { from { width: 0%; } to { width: 100%; } }
        @keyframes fadeInChar { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          #about > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <Loader done={loaded} />
      <CustomCursor />
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