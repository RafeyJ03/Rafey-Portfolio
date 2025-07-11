'use client';
import './globals.css'; 
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import LottiePlayer from "@/app/components/Lottiewrapper";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiDjango, SiTailwindcss, SiFlask,
  SiExpress, SiHtml5, SiCss3, SiGit, SiJira, SiGo, SiFirebase, SiJest, SiVercel, 
  SiPandas, SiNumpy, SiFramer, SiGithubactions, SiPostman, SiLinux, SiNextdotjs, SiPytest, SiAwsamplify
} from 'react-icons/si';
import JavaLogo from '@/app/components/icons/JavaLogo';
import {
  FaNode, FaGithub, FaLinkedin,
  FaMoon, FaSun, FaBars, FaTimes
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const skills = [
  { name: 'Python', icon: SiPython },  { name: 'Java', icon: JavaLogo },
  { name: 'JavaScript', icon: SiJavascript }, { name: 'Vercel', icon: SiVercel }, 
  { name: 'TypeScript', icon: SiTypescript }, { name: 'React', icon: SiReact },
  { name: 'Django', icon: SiDjango },  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Node.js', icon: FaNode },   { name: 'Flask', icon: SiFlask },
  { name: 'Express', icon: SiExpress },{ name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },       { name: 'Git', icon: SiGit },
  { name: 'Jira', icon: SiJira },      { name: 'Go', icon: SiGo },
  { name: 'Firebase', icon: SiFirebase},{ name: 'Pandas', icon: SiPandas },
  { name: 'Framer Motion', icon: SiFramer },{ name: 'Numpy', icon: SiNumpy },
  { name: 'Jest', icon: SiJest }, { name: 'GitHub Actions', icon: SiGithubactions }, 
  { name: 'Postman', icon: SiPostman }, { name: 'Linux', icon: SiLinux },
  { name: 'Next.js', icon: SiNextdotjs }, { name: 'Pytest', icon: SiPytest }, 
  { name: 'AWS Amplify', icon: SiAwsamplify }
];

const projects = [
  {
    title: 'FinVue Dashboard',
    description: 'A full‑stack finance dashboard that visualizes investments, crypto, and expenses in one place.',
    image1: '/project_photos/Finvue.png',
    image2: '/project_photos/Finvue1.png',
    tags: ['Flask', 'React', 'Finance'],
    github: 'https://github.com/Moe-Reda/FinVue'
  },
  {
    title: 'TieX Ticketing App',
    description: 'Event ticketing platform designed for African markets to digitize event access and reduce fraud.',
    image1: '/project_photos/Dribbble Shot HD - 2.jpg',
    image2: '/project_photos/yara.png',
    tags: ['Next.js', 'Stripe', 'Go'],
    github: 'https://www.tiexapp.com/'
  },
  {
    title: 'Mircroservice Architecture',
    description: 'A scalable microservices system handling 1000+ requests/sec with robust load balancing and fault tolerance. Automated deployment with Bash, optimized inter-service communication via HTTP, and reduced test cycle data entry time by 99% using a custom Python parser.',
    image1: '/project_photos/moa.png',
    image2: null,
    tags: ['Next.js', 'Stripe', 'Go'],
    github: 'https://github.com/RafeyJ03/MOA'
  },
  {
    title: 'Geometric Vision Toolkit',
    description: 'A collection of Python tools for visualizing 3D geometry, detecting lines and intersections, and analyzing keypoints using SIFT.',
    image1: '/project_photos/chess_projection.png',
    image2: '/project_photos/gradient.png',
    tags: ['Python', 'numpy', 'scipy', 'matplotlib'],
    github: 'https://github.com/RafeyJ03/geometric-visual-toolkit'
  },
  {
    title: 'RA Consulting Website',
    description: 'designed and developed a professional website for a consulting firm based in the MENA Region. The website created is a clean, modern platform that clearly presented the firm&apos;s services and gave potential clients an easy, secure way to get in touch.',
    image1: '/project_photos/RAC.jpg',
    image2: '/project_photos/RAC2.jpg',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Figma'],
    github: 'https://github.com/RafeyJ03/geometric-visual-toolkit'
  },

];

/* -------------------------------------------------------------------------- */
/*                            LOADING ANIMATION JSX                           */
/* -------------------------------------------------------------------------- */

const LoadingAnimation = () => (
  <motion.div
    /* ➜ flex‑col turns the row into a centered column  */
    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* 0.5 s – "RAFEY" ------------------------------------------------ */}
    <motion.h1
      className="text-6xl md:text-8xl font-bold tracking-widest text-white mb-4"
      initial={{ opacity: 0, y: 50, scale: 0.7 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      RAFEY&apos;S
    </motion.h1>

    {/* 1.5 s – underline (now centred because of flex‑col) ------------ */}
    <motion.div
      className="w-24 h-1 bg-cyan-400 rounded-full mb-4"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 5 }}
      transition={{ duration: 0.7, delay: 1.5, ease: 'easeOut' }}
    />

    {/* 2.0 s – "PORTFOLIO" -------------------------------------------- */}
    <motion.p
      className="text-cyan-400 text-2xl tracking-[0.3em] font-light mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
    >
      PORTFOLIO
    </motion.p>

    {/* 2.5 s – pulsing dots ------------------------------------------- */}
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 2.5 }}
    >
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*                               VARIANT HELPERS                              */
/* -------------------------------------------------------------------------- */

const sectionVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

/* -------------------------------------------------------------------------- */
/*                           BACKGROUND CIRCLES JSX                           */
/* -------------------------------------------------------------------------- */

const BackgroundCircles = ({ darkMode }: { darkMode: boolean }) => {
  const circles = [
    { size: 200, top: '10%', left: '5%',  delay: 0   },
    { size: 150, top: '20%', right:'10%', delay: 1   },
    { size: 300, top: '40%', left: '15%', delay: 2   },
    { size: 120, top: '60%', right:'20%', delay: 0.5 },
    { size: 180, top: '75%', left: '8%',  delay: 1.5 },
    { size: 250, top: '85%', right:'15%', delay: 2.5 },
    { size: 100, top: '30%', left: '60%', delay: 3   },
    { size: 220, top: '50%', right:'5%',  delay: 1.8 },
    { size: 150, top: '50%', right:'50%',  delay: 1.8 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border-2 ${darkMode ? 'border-white/20' : 'border-black/20'}`}
          style={{ width: c.size, height: c.size, top: c.top, left: c.left, right: c.right }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.4, 0.2], rotate: 360 }}
          transition={{ duration: 20, delay: c.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
};
export default function Home() {
  const [darkMode, setDarkMode]   = useState(true);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
  
    setLoading(false);
    if (res.ok) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong. Please try again.');
    }
  };
  

  /* Hide the loader at 4 s ---------------------------------- */
  useEffect(() => {
    const t = setTimeout(() => setShowLoader(false), 4000);
    return () => clearTimeout(t);
  }, []);

  /* Click‑outside for mobile nav ----------------------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  /* Smooth‑scroll anchors ----------------------------------- */
  useEffect(() => {
    document.querySelectorAll("a[href^='#']").forEach(a =>
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href')!);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
    );
  }, []);

  const bgColor      = darkMode ? 'bg-[#0a0a0a]' : 'bg-white';
  const textColor    = darkMode ? 'text-white'   : 'text-black';
  const borderColor  = darkMode ? 'border-white/10' : 'border-black/10';
  const altTextColor = darkMode ? 'text-neutral-400' : 'text-neutral-700';
  const sectionBgColor = darkMode ? 'bg-[#0a0a0a]' : 'bg-white';
  const cardBgColor = darkMode ? 'bg-[#111]' : 'bg-gray-50';
  const cardHoverBgColor = darkMode ? 'hover:bg-[#222]' : 'hover:bg-gray-100';

  return (
    <main className={`${bgColor} ${textColor} font-sans transition-all duration-500 relative overflow-hidden`}>

      {/* ------------------- LOADER -------------------- */}
      <AnimatePresence mode="wait">
        {showLoader ? (
          /* ----------- LOADING SCREEN -------- */
          <LoadingAnimation key="loader" />
        ) : (
          /* ----------- MAIN PAGE ------------ */
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BackgroundCircles darkMode={darkMode} />

        {/* Sticky & responsive navbar */}
        <motion.header
          className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md ${bgColor}/80 transition-all duration-500 ${borderColor} border-b px-6 py-4 flex items-center justify-between md:justify-between ${textColor}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
        >
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          <motion.h1 
            className="text-2xl font-semibold tracking-widest text-center w-full md:w-auto md:text-left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Rafey
          </motion.h1>
          
          <motion.nav 
            className={`hidden md:flex space-x-6 text-sm sm:text-base ${textColor}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, staggerChildren: 0.1 }}
          >
            {['About', 'Skills', 'Projects', 'Work', 'Hobbies', 'Contact'].map((item, index) => (
              <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              /* ←– motion entrance */
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
              whileHover={{ y: -2 }}
              /* ←– tailwind for underline */
              className="group relative inline-block"
            >
              {item}
              {/* underline */}
              <span
                className="
                  absolute left-0 -bottom-0.5 h-[2px] w-full
                  origin-left scale-x-0 bg-cyan-400 transition-transform duration-300
                  group-hover:scale-x-100
                "
              />
            </motion.a>
            ))}
          </motion.nav>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`ml-4 px-3 py-1 ${borderColor} border rounded-full flex items-center gap-2 text-sm hover:bg-white/10 transition`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />} <span className="hidden sm:inline">Toggle Theme</span>
          </motion.button>
        </motion.header>

        {/* Mobile nav menu */}
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${sectionBgColor} fixed top-16 left-0 w-full backdrop-blur p-6 flex flex-col items-start gap-4 ${textColor} z-40 md:hidden transition-all duration-500`}
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#work">Work</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#contact">Contact</a>
          </motion.div>
        )}

        {/* About Section - Text and Image */}
        <motion.section 
          id="about" 
          className={`scroll-mt-32 relative z-20 px-8 md:px-24 lg:px-32 xl:px-40 py-32 md:py-40 grid grid-cols-1 md:grid-cols-2 items-center gap-20 lg:gap-24 ${sectionBgColor} transition-all duration-500`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl"
          >
            <motion.h2 
              className={`${textColor} text-4xl md:text-5xl font-extrabold leading-tight tracking-tight`}
              variants={itemVariants}
            >
              Hey, I&apos;m Rafey 👋
            </motion.h2>
            <motion.div variants={itemVariants}>
              <TypeAnimation
                sequence={["Full-stack Developer", 1500, "Product-Driven Engineer", 1500, "Digital Infrastructure Architect", 1500]}
                wrapper="p"
                speed={40}
                className="text-2xl text-cyan-500 font-medium"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              className={`${altTextColor} text-lg md:text-xl leading-relaxed text-justify`}
              variants={itemVariants}
            >
              I&apos;m a final-year Computer Science and Financial Economics student at the University of Toronto, passionate about building clean, scalable systems that make a real impact. I combine a strong foundation in software and economic thinking to bridge tech with real-world challenges—whether it&apos;s optimizing backend performance or improving workflows.
              
              <br /><br />
              
              My strengths lie in full-stack development, backend architecture, SQL, and scalable microservices. I thrive in fast-moving, collaborative environments where design and iteration go hand-in-hand with purpose.
            </motion.p>

            
            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-cyan-600 text-white text-base font-semibold hover:bg-cyan-700 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            className={`w-full mx-auto md:mx-0 rounded-3xl overflow-hidden shadow-xl border ${borderColor}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/project_photos/Rafey.jpg" 
              alt="Profile" 
              width={500} 
              height={650} 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
        </motion.section>

        {/* Skills Section - Grid of Skills */}
        <motion.section 
          id="skills" 
          className={`scroll-mt-24 px-6 md:px-20 py-24 ${sectionBgColor} relative z-20 transition-all duration-500`} 
          variants={sectionVariants}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className={`text-4xl font-bold text-center mb-16 ${textColor}`}
            variants={itemVariants}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`group rounded-[20px] p-6 ${cardBgColor} ${cardHoverBgColor} ${borderColor} border transition-all duration-400 cursor-pointer`}
              >
                <Icon size={32} className={`mx-auto mb-2 group-hover:text-cyan-400 transition ${textColor}`} />
                <p className={`text-sm text-center ${textColor}`}>{name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section - Grid of Projects */}
        <motion.section 
          id="projects" 
          className={`scroll-mt-24 relative z-20 px-6 md:px-20 py-24 ${sectionBgColor} transition-all duration-500`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className={`text-4xl font-bold text-center mb-16 ${textColor}`}
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          <div className="space-y-32">
          {projects.map(({ title, description, image1, image2, tags, github }, i) => (
              <motion.div 
                key={title} 
                className="grid md:grid-cols-2 gap-10 items-center" 
                variants={itemVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                          {image2 ? (
            <motion.div 
              className="relative grid grid-cols-2 gap-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="rounded-[28px] overflow-hidden"
                whileHover={{ rotate: 1, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={image1} alt={title} width={600} height={400} className="rounded-[28px] object-cover w-full h-full" />
              </motion.div>
              <motion.div 
                className="rounded-[28px] overflow-hidden"
                whileHover={{ rotate: -1, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src={image2} alt="" width={600} height={400} className="rounded-[28px] object-cover w-full h-full" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              className="rounded-[28px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={image1} alt={title} width={1200} height={400} className="rounded-[28px] object-cover" />
            </motion.div>
          )}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
                  <p className={`text-sm mb-4 ${altTextColor}`}>{description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        className={`px-3 py-1 text-xs ${cardBgColor} rounded-full border ${borderColor}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + tagIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <motion.button 
                      className={`w-10 h-10 rounded-full ${borderColor} border ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} text-lg flex items-center justify-center transition`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      →
                    </motion.button>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Section - Work Experience */}
        <motion.section 
          id="work" 
          className={`scroll-mt-24 px-6 md:px-20 py-24 ${sectionBgColor} relative z-20 transition-all duration-500`} 
          variants={sectionVariants}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className={`text-4xl font-bold text-center mb-16 ${textColor}`}
            variants={itemVariants}
          >
            Work
          </motion.h2>
          <motion.div 
            className={`max-w-4xl mx-auto text-sm md:text-base font-mono border-y ${borderColor} divide-y ${borderColor}`}
            variants={itemVariants}
          >
            <motion.div 
              className={`flex justify-between py-4 px-2 md:px-4 ${cardHoverBgColor} transition-all duration-300 rounded-t-lg`}
              whileHover={{ x: 10, backgroundColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <span className={textColor}>Jun 2024 - Oct 2024</span>
                <span className={`text-xs ${altTextColor}`}>5-month internship</span>
              </div>
              <div className={`flex-1 text-center ${textColor}`}>Rize</div>
              <div className={`text-right ${textColor}`}>Software Engineer Intern | Django + React</div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Hobbies Section - Grid of Hobbies */}
        <motion.section 
          id="hobbies" 
          className={`scroll-mt-24 px-6 md:px-20 py-24 ${sectionBgColor} relative z-20 transition-all duration-500`} 
          variants={sectionVariants}
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2 
            className={`text-4xl font-bold text-center mb-16 ${textColor}`}
            variants={itemVariants}
          >
            Hobbies
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                src: "https://lottie.host/1f370681-8889-4daa-bcd8-9d8769659c70/w7r2idgSUN.json",
                title: "Football",
                description: "I enjoy the competitive nature and team spirit of the game."
              },
              {
                src: "https://lottie.host/aa940e7d-4b65-4f6a-a903-72d57b3f65f0/ltMSk7mPSR.json",
                title: "Formula 1",
                description: "Racing is a blend of speed, technology, and precision."
              },
              {
                src: "https://lottie.host/f47b0bbc-4282-4ce2-9245-fd77825c11c4/7vpz6U41d1.json",
                title: "Cars",
                description: "I love car design, engineering, and innovation."
              }
            ].map((hobby) => (
              <motion.div 
                key={hobby.title}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <LottiePlayer autoplay loop src={hobby.src} className="w-60 h-60 mx-auto" />
                </motion.div>
                <motion.h3 
                  className={`text-xl font-semibold mt-4 ${textColor}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {hobby.title}
                </motion.h3>
                <motion.p 
                  className={`${altTextColor}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {hobby.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact"
          className={`scroll-mt-24 relative z-20 px-8 md:px-24 lg:px-32 xl:px-40 py-20 md:py-32 ${sectionBgColor} transition-all duration-500`}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.h2 
                className={`${textColor} text-4xl md:text-5xl font-bold mb-4`}
                variants={itemVariants}
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p 
                className={`${altTextColor} text-lg md:text-xl mb-8`}
                variants={itemVariants}
              >
                Feel free to reach out to collaborate or just say hi!
              </motion.p>
              
              {/* Social Links */}
              <motion.div 
                className="flex justify-center gap-8 mb-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a 
                  href="https://github.com/RafeyJ03" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${textColor} hover:text-cyan-400 transition text-3xl`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/rafey-jawaid-52973313b/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${textColor} hover:text-cyan-400 transition text-3xl`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <motion.h3 
                className={`${textColor} text-2xl md:text-3xl font-semibold text-center mb-8`}
                variants={itemVariants}
              >
                Get In Touch
              </motion.h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {sent ? (
                  <p className="text-green-500 text-center font-medium">
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Name"
                        required
                        className={`w-full px-4 py-3 text-base border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-colors duration-300`}
                      />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your Email"
                        required
                        className={`w-full px-4 py-3 text-base border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} transition-colors duration-300`}
                      />
                    </div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className={`w-full px-4 py-3 text-base border ${borderColor} rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 ${darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-500'} transition-colors duration-300`}
                    ></textarea>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="px-8 py-3 rounded-full bg-cyan-600 text-white text-base font-semibold hover:bg-cyan-700 transition-colors duration-300"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Get in Touch'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer Section */}
        <motion.footer 
          className={`text-center text-sm ${altTextColor} mt-12 pb-8 relative z-20 transition-colors duration-500`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Rafey Jawaid. All rights reserved.
        </motion.footer>
      </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}