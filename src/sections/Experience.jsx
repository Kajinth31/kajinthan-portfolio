import { motion } from "framer-motion";
import {
  FaCode, FaVideo, FaPaintBrush, FaUsers, FaCompass,
  FaLaptop, FaBriefcase, FaStar,
} from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { MdCampaign } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

/* ─── Data ─── */
const freelance = [
  {
    title: "Web Development",
    icon: <FaCode />,
    color: "cyan",
    desc: "Building responsive, modern websites and web apps for clients using React, Tailwind CSS, and Node.js.",
    tags: ["React", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    title: "Video Editing",
    icon: <FaVideo />,
    color: "rose",
    desc: "Producing polished video content — promos, reels, and event highlights — with professional post-production.",
    tags: ["Premiere Pro", "After Effects", "Color Grading"],
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    color: "purple",
    desc: "Designing clean, user-centred interfaces and prototypes that balance aesthetics with usability.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const activities = [
  {
    role: "Vice Secretary",
    org: "Student Council",
    icon: <FaUsers />,
    color: "blue",
    desc: "Supporting council operations, coordinating student events, and representing the student body in institutional decisions.",
  },
  {
    role: "Digital Marketer",
    org: "Pathfinder Club",
    icon: <MdCampaign />,
    color: "amber",
    desc: "Managing social media presence, designing promotional content, and running digital campaigns to grow club engagement.",
  },
  {
    role: "Member",
    org: "ICT Hub",
    icon: <HiLightningBolt />,
    color: "emerald",
    desc: "Collaborating with peers on tech initiatives, workshops, and innovation projects within the campus ICT community.",
  },
];

/* ─── Helpers ─── */
const colorMap = {
  cyan:    { bg: "bg-cyan-100 dark:bg-cyan-950/50",    border: "border-cyan-200 dark:border-cyan-800/40",    icon: "text-cyan-600 dark:text-cyan-400",    hover: "hover:border-cyan-400/60 dark:hover:border-cyan-500/50",    tag: "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40", glow: "hover:shadow-cyan-500/10",   bar: "from-cyan-500 to-blue-500" },
  rose:    { bg: "bg-rose-100 dark:bg-rose-950/50",    border: "border-rose-200 dark:border-rose-800/40",    icon: "text-rose-600 dark:text-rose-400",    hover: "hover:border-rose-400/60 dark:hover:border-rose-500/50",    tag: "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/40", glow: "hover:shadow-rose-500/10",   bar: "from-rose-500 to-pink-500" },
  purple:  { bg: "bg-purple-100 dark:bg-purple-950/50",border: "border-purple-200 dark:border-purple-800/40",icon: "text-purple-600 dark:text-purple-400",hover: "hover:border-purple-400/60 dark:hover:border-purple-500/50",tag: "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/40", glow: "hover:shadow-purple-500/10", bar: "from-purple-500 to-violet-500" },
  blue:    { bg: "bg-blue-100 dark:bg-blue-950/50",    border: "border-blue-200 dark:border-blue-800/40",    icon: "text-blue-600 dark:text-blue-400",    hover: "hover:border-blue-400/60 dark:hover:border-blue-500/50",    tag: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40", glow: "hover:shadow-blue-500/10",   bar: "from-blue-500 to-cyan-500" },
  amber:   { bg: "bg-amber-100 dark:bg-amber-950/50",  border: "border-amber-200 dark:border-amber-800/40",  icon: "text-amber-600 dark:text-amber-400",  hover: "hover:border-amber-400/60 dark:hover:border-amber-500/50",  tag: "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/40", glow: "hover:shadow-amber-500/10", bar: "from-amber-500 to-orange-500" },
  emerald: { bg: "bg-emerald-100 dark:bg-emerald-950/50",border:"border-emerald-200 dark:border-emerald-800/40",icon:"text-emerald-600 dark:text-emerald-400",hover:"hover:border-emerald-400/60 dark:hover:border-emerald-500/50",tag:"bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",glow:"hover:shadow-emerald-500/10",bar:"from-emerald-500 to-teal-500" },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400
      font-semibold tracking-widest text-[11px] uppercase mb-4
      bg-cyan-100/80 dark:bg-cyan-950/60 px-4 py-1.5 rounded-full
      border border-cyan-300/60 dark:border-cyan-700/40 backdrop-blur-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse inline-block" />
      {children}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
};

/* ══════════════════════════════════════════════════════════ */
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full flex items-center justify-center
        bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white
        px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 overflow-hidden
        transition-colors duration-300"
    >
      {/* ── Grid ── */}
      <div className="absolute inset-0
        bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
        bg-[size:3.5rem_3.5rem]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_55%,transparent_100%)]
        opacity-20 pointer-events-none" />

      {/* ── Blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[440px] h-[440px] rounded-full bg-purple-500/15 dark:bg-purple-500/10 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute -bottom-32 -left-20 w-[380px] h-[380px] rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* ══ HEADER ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center text-center"
        >
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Experience &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Activities
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-xl">
            Freelance work, leadership roles, and community involvement that define who I am beyond the classroom.
          </p>
        </motion.div>

        {/* ══ FREELANCE ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-7"
        >
          <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40">
            <FaBriefcase className="text-cyan-600 dark:text-cyan-400 text-lg" />
          </div>
          <h3 className="text-xl font-bold tracking-tight">Freelance Work</h3>
          <span className="ml-1 text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full
            bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400
            border border-emerald-200 dark:border-emerald-800/40 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Active
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {freelance.map((item, i) => {
            const c = colorMap[item.color];
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className={`group relative overflow-hidden
                  bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                  border ${c.border} ${c.hover}
                  rounded-2xl p-5 sm:p-6
                  shadow-sm hover:shadow-xl ${c.glow}
                  transition-all duration-300 cursor-default flex flex-col gap-4`}
              >
                {/* Top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r ${c.bar}`}
                />

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700
                  bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${c.bg} border ${c.border} ${c.icon}`}>
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {item.tags.map((tag, j) => (
                    <span key={j} className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ══ ACTIVITIES ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-7"
        >
          <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40">
            <FaStar className="text-purple-600 dark:text-purple-400 text-lg" />
          </div>
          <h3 className="text-xl font-bold tracking-tight">Leadership &amp; Activities</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((act, i) => {
            const c = colorMap[act.color];
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className={`group relative overflow-hidden
                  bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                  border ${c.border} ${c.hover}
                  rounded-2xl p-5 sm:p-6
                  shadow-sm hover:shadow-xl ${c.glow}
                  transition-all duration-300 cursor-default`}
              >
                {/* Top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r ${c.bar}`}
                />

                {/* Shimmer */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                  transition-transform duration-700
                  bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ${c.bg} border ${c.border} ${c.icon}`}
                  >
                    {act.icon}
                  </motion.div>

                  <div className="min-w-0">
                    <p className={`text-[11px] font-bold tracking-widest uppercase mb-1 ${c.icon}`}>
                      {act.role}
                    </p>
                    <h4 className="font-bold text-sm sm:text-base leading-snug mb-2">{act.org}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{act.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}