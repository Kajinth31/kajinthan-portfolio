import { motion } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone,
  FaWhatsapp, FaArrowUp, FaCode, FaHeart,
} from "react-icons/fa";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Education",  href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { icon: FaGithub,   href: "https://github.com/Kajinth31",        label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kajinthan-mukunthan-0a3004294/",       label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/447446563692",             label: "WhatsApp" },
  { icon: FaEnvelope, href: "mailto:kajinthanthanmukunthan@gmail.com", label: "Email" },
  { icon: FaPhone,    href: "tel:+447446563692",            label: "Phone" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.08 },
  }),
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">

      {/* ── Subtle top glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]
        bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent pointer-events-none" />
      <motion.div
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px]
          rounded-full bg-cyan-500/20 blur-[80px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-14 pb-8">

        {/* ══ TOP ROW ══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-4"
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600
                flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-cyan-500/25">
                KM
              </div>
              <div>
                <p className="font-extrabold text-lg leading-none text-slate-900 dark:text-white">Kajinthan</p>
                <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">Mukunthan</p>
              </div>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Systems Engineering graduate building modern web experiences, crafting designs, and bringing ideas to life.
            </p>

            {/* Social icons */}
            <div className="flex gap-2 flex-wrap">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  whileHover={{ y: -4, scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center
                    bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                    text-slate-500 dark:text-slate-400
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                    shadow-sm hover:shadow-md hover:shadow-cyan-500/10
                    transition-all duration-200"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map(({ label, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-sm text-slate-500 dark:text-slate-400
                      hover:text-cyan-600 dark:hover:text-cyan-400
                      transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700
                      group-hover:bg-cyan-500 transition-colors duration-200 shrink-0" />
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact snapshot */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { icon: FaEnvelope, text: "kajinthanthanmukunthan@gmail.com", href: "kajinthanthanmukunthan@gmail.com" },
                { icon: FaPhone,    text: "+44 7446563692",       href: "tel:+447446563692" },
              ].map(({ icon: Icon, text, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2.5 text-sm
                      text-slate-500 dark:text-slate-400
                      hover:text-cyan-600 dark:hover:text-cyan-400
                      transition-colors duration-200 group"
                  >
                    <span className="w-7 h-7 rounded-lg flex items-center justify-center
                      bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                      group-hover:border-cyan-400/50 dark:group-hover:border-cyan-500/40
                      transition-colors duration-200 shrink-0">
                      <Icon className="text-xs text-cyan-500" />
                    </span>
                    {text}
                  </motion.a>
                </li>
              ))}

              <li className="mt-1">
                <motion.a
                  href="/Mukunthan_Kajinthan_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2
                    bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600
                    text-white text-xs font-semibold px-4 py-2.5 rounded-xl
                    shadow-md shadow-cyan-500/20 relative overflow-hidden
                    transition-all duration-300"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                    transition-transform duration-700
                    bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  Download Resume
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ══ DIVIDER ══ */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-6" />

        {/* ══ BOTTOM ROW ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeUp} custom={3}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            © {year} Kajinthan Mukunthan. All rights reserved.
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">·</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-rose-500 text-[10px]" /> &amp; <FaCode className="text-cyan-500 text-[10px]" /> React
            </span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-2 text-xs font-semibold
              text-slate-400 dark:text-slate-500
              hover:text-cyan-600 dark:hover:text-cyan-400
              bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
              hover:border-cyan-400/50 dark:hover:border-cyan-500/40
              px-3 py-2 rounded-xl shadow-sm
              transition-all duration-200"
          >
            <FaArrowUp className="text-[10px]" />
            Back to top
          </motion.button>
        </motion.div>

      </div>
    </footer>
  );
}