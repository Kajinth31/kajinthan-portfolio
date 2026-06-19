import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaExternalLinkAlt, FaCalendarAlt, FaUniversity } from "react-icons/fa";

/* ─── Data from screenshots ─── */
const education = [
  {
    year: "2026",
    degree: "BSc Computer Systems Engineering",
    institution: "University of Sunderland",
    icon: <FaGraduationCap />,
    accent: "cyan",
  },
  {
    year: "2024",
    degree: "HND in Software Engineering",
    institution: "Esoft Metro Campus",
    icon: <FaGraduationCap />,
    accent: "blue",
  },
];

const certifications = [
  { name: "Machine Learning", issuer: "Great Learning Academy" },
  { name: "Artificial Intelligence", issuer: "Great Learning Academy" },
  { name: "Java", issuer: "Sololearn" },
  { name: "UI/UX", issuer: "IBM" },
  { name: "Wordpress", issuer: "Coursera" },
  { name: "UI/UX Competition", issuer: "ESOFT Metro Campus – Jaffna" },
];

const certDriveLink = "https://drive.google.com/drive/folders/191CiZAEPZAXMhXEtl5pJKkTUIHtuSvX_"; // replace with real link

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.15 },
  }),
};

/* ─── Section label ─── */
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

/* ══════════════════════════════════════════════════════════ */
export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full flex items-center justify-center
        bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white
        px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 overflow-hidden
        transition-colors duration-300"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0
        bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
        dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
        bg-[size:3.5rem_3.5rem]
        [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]
        opacity-20 pointer-events-none" />

      {/* ── Ambient blobs ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full
          bg-cyan-500/15 dark:bg-cyan-500/10 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full
          bg-blue-500/15 dark:bg-blue-500/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* ══ HEADER ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center text-center"
        >
          <SectionLabel>Background</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Education &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Certifications
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-xl">
            My academic journey and professional credentials that shape my expertise.
          </p>
        </motion.div>

        {/* ══ MAIN GRID — Education left, Certs right ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* ── EDUCATION ── */}
          <div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40">
                <FaGraduationCap className="text-cyan-600 dark:text-cyan-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Education</h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-transparent dark:from-cyan-500/40 dark:via-blue-500/30" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeLeft}
                    className="relative group"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      whileInView={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      viewport={{ once: true }}
                      className="absolute -left-[25px] top-4 w-3 h-3 rounded-full
                        bg-cyan-500 dark:bg-cyan-400
                        border-2 border-slate-50 dark:border-slate-950
                        shadow-[0_0_8px_2px] shadow-cyan-400/50 z-10"
                    />

                    {/* Card */}
                    <motion.div
                      whileHover={{ x: 6, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="ml-4 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                        border border-slate-200 dark:border-slate-800
                        hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                        rounded-2xl p-5 sm:p-6
                        shadow-sm hover:shadow-lg hover:shadow-cyan-500/10
                        transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Shimmer on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase mb-2 flex items-center gap-1.5">
                            <FaCalendarAlt className="shrink-0" />
                            {edu.year}
                          </p>
                          <h4 className="text-base sm:text-lg font-bold leading-snug mb-1">{edu.degree}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5">
                            <FaUniversity className="shrink-0 text-blue-400" />
                            {edu.institution}
                          </p>
                        </div>
                        {/* Accent blob */}
                        <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                          <FaGraduationCap className="text-lg" />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CERTIFICATIONS ── */}
          <div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40">
                <FaAward className="text-purple-600 dark:text-purple-400 text-xl" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Certifications</h3>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="group relative overflow-hidden
                    bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                    border border-slate-200 dark:border-slate-800
                    hover:border-purple-400/60 dark:hover:border-purple-500/50
                    rounded-2xl p-4 sm:p-5
                    shadow-sm hover:shadow-lg hover:shadow-purple-500/10
                    transition-all duration-300 cursor-default"
                >
                  {/* Top accent bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="absolute top-0 left-0 right-0 h-[2px] origin-left
                      bg-gradient-to-r from-cyan-500 to-purple-500"
                  />

                  {/* Shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    transition-transform duration-700
                    bg-gradient-to-r from-transparent via-purple-500/5 to-transparent pointer-events-none" />

                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                      className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/50
                        border border-purple-200/60 dark:border-purple-800/30 shrink-0"
                    >
                      <FaAward className="text-purple-600 dark:text-purple-400 text-sm" />
                    </motion.div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm leading-snug mb-1 truncate">{cert.name}</h4>
                      <p className="text-slate-500 dark:text-slate-500 text-xs leading-snug">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Drive link */}
            <motion.a
              href={certDriveLink}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={7}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-6 inline-flex items-center gap-2
                bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600
                text-white text-sm font-semibold
                px-5 py-3 rounded-xl shadow-lg shadow-cyan-500/20
                relative overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                transition-transform duration-700
                bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <FaExternalLinkAlt className="text-xs" />
              View Certification Drive
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}