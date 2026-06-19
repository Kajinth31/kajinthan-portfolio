import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  FaReact, FaPython, FaJsSquare, FaGitAlt, FaArrowRight,
  FaGithub, FaLinkedin, FaWhatsapp, FaNodeJs, FaDatabase,
  FaCode, FaAward, FaChevronDown,
} from "react-icons/fa";
import { SiTailwindcss, SiDocker, SiLinux } from "react-icons/si";
import profileImage from "../assets/images/profile.webp";

/* ─── Typewriter ─── */
function useTypewriter(words, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && charIdx === current.length) delay = pause;
    if (deleting && charIdx === 0) { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); return; }
    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx((i) => i + 1); }
      else if (deleting) { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx((i) => i - 1); }
      else setDeleting(true);
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return displayed;
}

/* ─── Particle ─── */
function Particle({ x, y, delay }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-cyan-400/40 dark:bg-cyan-300/30 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ y: [0, -24, 0], opacity: [0, 0.7, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

/* ─── Twinkle star ─── */
function Sparkle({ x, y, size, delay }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.4], rotate: [0, 90, 0] }}
      transition={{ duration: 2.2 + delay * 0.5, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M8 0 L9 7 L16 8 L9 9 L8 16 L7 9 L0 8 L7 7 Z" fill="currentColor" className="text-cyan-400/60 dark:text-cyan-300/50" />
      </svg>
    </motion.div>
  );
}

/* ─── Orbit icon with tooltip ─── */
function OrbitIcon({ children, floatY, duration, className, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      animate={{ y: floatY }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-20 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.22 }}
        className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm
          p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800
          shadow-lg shadow-black/5 dark:shadow-black/30
          hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-xl
          transition-all duration-300 cursor-default"
      >
        {children}
        {/* Tooltip */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? -6 : 2, scale: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.18 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-semibold
            px-2 py-1 rounded-md pointer-events-none shadow-lg"
        >
          {label}
          <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── SVG energy lines from center to icon positions ─── */
function EnergyLines({ containerSize }) {
  const cx = containerSize / 2;
  const cy = containerSize / 2;
  const r = containerSize * 0.44;

  const iconAngles = [
    { angle: -55, color: "#06b6d4" },   // React  top-right
    { angle: -125, color: "#eab308" },  // JS     top-left
    { angle: 125, color: "#3b82f6" },   // Python bottom-left
    { angle: 55, color: "#f97316" },    // Git    bottom-right
    { angle: 0, color: "#06b6d4" },     // Tailwind right
    { angle: 180, color: "#22c55e" },   // Node   left
    { angle: -90, color: "#3b82f6" },   // Docker top
    { angle: 90, color: "#94a3b8" },    // Linux  bottom
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${containerSize} ${containerSize}`}
      overflow="visible"
    >
      <defs>
        {iconAngles.map((ia, i) => (
          <linearGradient key={i} id={`lg${i}`} gradientUnits="userSpaceOnUse"
            x1={cx} y1={cy}
            x2={cx + Math.cos((ia.angle * Math.PI) / 180) * r}
            y2={cy + Math.sin((ia.angle * Math.PI) / 180) * r}
          >
            <stop offset="0%" stopColor={ia.color} stopOpacity="0" />
            <stop offset="100%" stopColor={ia.color} stopOpacity="0.55" />
          </linearGradient>
        ))}
      </defs>
      {iconAngles.map((ia, i) => {
        const x2 = cx + Math.cos((ia.angle * Math.PI) / 180) * r;
        const y2 = cy + Math.sin((ia.angle * Math.PI) / 180) * r;
        return (
          <motion.line
            key={i}
            x1={cx} y1={cy} x2={x2} y2={y2}
            stroke={`url(#lg${i})`}
            strokeWidth="1.2"
            strokeDasharray="6 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
          />
        );
      })}
    </svg>
  );
}

/* ─── Conic sweep arc ─── */
function ConicSweep() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      className="absolute w-[64%] h-[64%] rounded-full pointer-events-none"
      style={{
        background: "conic-gradient(from 0deg, transparent 300deg, rgba(6,182,212,0.18) 340deg, rgba(6,182,212,0.55) 360deg)",
      }}
    />
  );
}

/* ══════════════════════════════════════════════════════════ */
export default function Home() {
  const prefersReduced = useReducedMotion();
  const orbitRef = useRef(null);
  const [containerSize, setContainerSize] = useState(400);

  // Mouse-tracking 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = useCallback((e) => {
    if (!orbitRef.current || prefersReduced) return;
    const rect = orbitRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY, prefersReduced]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0); mouseY.set(0);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) setContainerSize(e.contentRect.width);
    });
    if (orbitRef.current) obs.observe(orbitRef.current);
    return () => obs.disconnect();
  }, []);

  const roles = ["Full-Stack Developer", "Systems Engineer", "Problem Solver"];
  const typewriterText = useTypewriter(roles, 70, 2200);

  const particles = Array.from({ length: 12 }, (_, i) => ({ x: (i * 37 + 11) % 95, y: (i * 53 + 7) % 90, delay: i * 0.4 }));

  const sparkles = Array.from({ length: 10 }, (_, i) => ({
    x: 5 + (i * 29 + 13) % 88,
    y: 4 + (i * 41 + 17) % 88,
    size: 8 + (i % 3) * 4,
    delay: i * 0.28,
  }));

  const metrics = [
    { icon: <FaCode className="text-cyan-500" />, count: "15+", label: "Projects Completed" },
    { icon: <FaDatabase className="text-purple-500" />, count: "10+", label: "Tools & Frameworks" },
    { icon: <FaAward className="text-amber-500" />, count: "BEng", label: "Systems Engineer" },
  ];

  const techTags = ["React.js", "Python", "Node.js", "SQL", "Tailwind CSS", "REST APIs"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex items-center justify-center
        bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white
        px-4 sm:px-6 md:px-10 lg:px-12
        pt-20 sm:pt-24 lg:pt-16 pb-14
        overflow-hidden transition-colors duration-300"
    >
      {/* Grid */}
      <div className="absolute inset-0
        bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
        bg-[size:3.5rem_3.5rem]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]
        opacity-25 pointer-events-none" />

      {/* Blobs */}
      <motion.div animate={prefersReduced ? {} : { scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-48 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <motion.div animate={prefersReduced ? {} : { scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-32 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/15 dark:bg-blue-500/10 blur-[100px] pointer-events-none" />

      {!prefersReduced && particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ════ GRID ════ */}
      <div className="w-full max-w-[1400px] mx-auto
        grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]
        gap-10 lg:gap-8 xl:gap-14
        items-center relative z-10"
      >

        {/* ── LEFT ── */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible"
          className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.p variants={item}
            className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400
              font-semibold tracking-widest text-[11px] sm:text-xs uppercase mb-4
              bg-cyan-100/80 dark:bg-cyan-950/60 px-4 py-1.5 rounded-full
              border border-cyan-300/60 dark:border-cyan-700/40 backdrop-blur-sm"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Hello, I'm
          </motion.p>

          <motion.h1 variants={item}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold tracking-tight leading-none"
          >
            Kajinthan
            <br />
            <motion.span
              className="block mt-2 text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)", backgroundSize: "200% 200%" }}
              animate={prefersReduced ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              Mukunthan
            </motion.span>
          </motion.h1>

          <motion.h2 variants={item}
            className="text-base sm:text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400 mt-4 mb-1 h-7 flex items-center gap-2"
          >
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold min-w-0">{typewriterText}</span>
            <span className="w-[2px] h-5 bg-cyan-500 animate-[blink_0.9s_step-end_infinite] shrink-0" />
          </motion.h2>

          <motion.p variants={item}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-5 mt-2"
          >
            Computer Systems Engineering graduate passionate about software development, cloud computing,
            and modern web technologies. Driven to build innovative solutions and contribute to impactful projects.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-xl mb-6">
            {techTags.map((tag, idx) => (
              <motion.span key={idx} whileHover={{ scale: 1.06, y: -2 }}
                className="text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300
                  border border-slate-300 dark:border-slate-700/60 px-3 py-1 rounded-lg
                  hover:border-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center lg:justify-start mb-6">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600
                text-white px-7 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2
                shadow-lg shadow-cyan-500/25 transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              View Projects
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.button>
            <a
              href="https://www.linkedin.com/in/kajinthan-mukunthan-0a3004294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-slate-300 dark:border-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500 px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>

          <motion.div variants={item}
            className="flex gap-5 text-2xl justify-center lg:justify-start text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-6 w-full max-w-xl mb-5"
          >
            {[{ href: "https://github.com/Kajinth31", icon: <FaGithub /> }, { href: "https://www.linkedin.com/in/kajinthan-mukunthan-0a3004294/", icon: <FaLinkedin /> }, { href: "https://wa.me/447446563692", icon: <FaWhatsapp /> }]
              .map(({ href, icon }, i) => (
                <motion.a key={i} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ y: -5, color: "#06b6d4", scale: 1.15 }} whileTap={{ scale: 0.92 }}
                  className="transition-colors duration-200"
                >
                  {icon}
                </motion.a>
              ))}
          </motion.div>

          <motion.div variants={item} className="grid grid-cols-3 gap-3 w-full max-w-xl">
            {metrics.map((m, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.03 }}
                className="bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-2xl
                  border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md flex flex-col gap-1 transition-all duration-300 cursor-default"
              >
                <div className="text-xl sm:text-2xl">{m.icon}</div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight">{m.count}</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-wider leading-tight">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════ RIGHT — HERO IMAGE SIDE ════════ */}
        <div className="relative flex justify-center items-center w-full order-1 lg:order-2">
          <motion.div
            ref={orbitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={prefersReduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
            className="relative
              w-[270px] h-[270px]
              sm:w-[330px] sm:h-[330px]
              md:w-[390px] md:h-[390px]
              lg:w-full lg:h-auto lg:aspect-square
              max-w-[270px] sm:max-w-[330px] md:max-w-[410px]
              lg:max-w-[500px] xl:max-w-[560px]
              flex items-center justify-center mx-auto"
          >

            {/* ── Ambient glow ── */}
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.18, 1], opacity: [0.15, 0.32, 0.15] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[96%] h-[96%] rounded-full bg-cyan-500/20 dark:bg-cyan-500/15 blur-[70px]"
            />

            {/* ── Outer dashed ring ── */}
            <motion.div
              animate={prefersReduced ? {} : { rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] h-[90%] rounded-full border border-cyan-400/25 dark:border-cyan-400/20 border-dashed"
            />

            {/* ── Inner ring ── */}
            <motion.div
              animate={prefersReduced ? {} : { rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute w-[76%] h-[76%] rounded-full border border-slate-300/60 dark:border-slate-700/50"
            />

            {/* ── Conic radar sweep ── */}
            {!prefersReduced && <ConicSweep />}

            {/* ── SVG energy lines ── */}
            {!prefersReduced && <EnergyLines containerSize={containerSize} />}

            {/* ── Twinkle sparkles in orbit zone ── */}
            {!prefersReduced && sparkles.map((s, i) => <Sparkle key={i} {...s} />)}

            {/* ── Profile image ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative z-10 w-[56%] h-[56%]"
              style={{ transform: "translateZ(20px)" }}
            >
              {/* Pulse ring 1 */}
              <motion.div
                animate={prefersReduced ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute -inset-2 rounded-full border-2 border-cyan-400/50 dark:border-cyan-400/40"
              />
              {/* Pulse ring 2 — offset timing */}
              <motion.div
                animate={prefersReduced ? {} : { scale: [1, 1.28, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1.25 }}
                className="absolute -inset-2 rounded-full border border-cyan-300/30 dark:border-cyan-500/20"
              />

              <motion.img
                src={profileImage}
                alt="Kajinthan Mukunthan"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 16 }}
                className="w-full h-full rounded-full object-cover
                  border-[3px] sm:border-4 border-cyan-500/60 dark:border-cyan-400/70
                  shadow-xl shadow-cyan-500/20
                  bg-slate-200 dark:bg-slate-800"
              />

              {/* ── Glossy overlay on image ── */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)" }}
              />
            </motion.div>

            {/* ── Floating status badge ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              style={{ transform: "translateZ(30px)" }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30
                flex items-center gap-2
                bg-white/95 dark:bg-slate-900/95 backdrop-blur-md
                border border-emerald-300/60 dark:border-emerald-700/40
                px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/10
                whitespace-nowrap"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"
              />
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide">
                Available for work
              </span>
            </motion.div>

            {/* ── Orbit icons with tooltips ── */}
            <OrbitIcon floatY={[0, -10, 0]} duration={4} className="top-[6%] right-[8%] text-cyan-500 dark:text-cyan-400" label="React.js">
              <FaReact className="animate-[spin_14s_linear_infinite] text-lg sm:text-2xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[0, 9, 0]} duration={4.6} className="top-[10%] left-[8%] text-yellow-500 dark:text-yellow-400" label="JavaScript">
              <FaJsSquare className="text-lg sm:text-2xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[0, -8, 0]} duration={5.2} className="bottom-[10%] left-[9%] text-blue-500 dark:text-yellow-500" label="Python">
              <FaPython className="text-lg sm:text-2xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[0, 10, 0]} duration={4.8} className="bottom-[10%] right-[9%] text-orange-500" label="Git">
              <FaGitAlt className="text-lg sm:text-2xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[0, 6, 0]} duration={5.4} className="top-[45%] right-[1%] text-cyan-500" label="Tailwind CSS">
              <SiTailwindcss className="text-base sm:text-xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[0, -6, 0]} duration={5.8} className="top-[45%] left-[1%] text-green-500" label="Node.js">
              <FaNodeJs className="text-base sm:text-xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[-6, 6, -6]} duration={4.2} className="top-[1%] left-[42%] -translate-x-1/2 text-blue-500" label="Docker">
              <SiDocker className="text-base sm:text-xl" />
            </OrbitIcon>

            <OrbitIcon floatY={[6, -6, 6]} duration={4.9} className="bottom-[7%] left-[42%] -translate-x-1/2 text-slate-600 dark:text-slate-300" label="Linux">
              <SiLinux className="text-base sm:text-xl" />
            </OrbitIcon>

          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <FaChevronDown className="text-xs" />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}