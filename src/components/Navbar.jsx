import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Experience", "Contact"];

  return (
    // Added transition-colors for smooth mode switching
    <nav className="fixed top-4 left-0 w-full z-50 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 rounded-full px-6 py-3 flex justify-between items-center shadow-lg transition-all duration-300">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 hover:scale-105 transition-transform">
          MK
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm font-medium transition duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="rounded-full bg-slate-200 dark:bg-slate-800/80 p-2 text-slate-800 dark:text-slate-100 transition hover:bg-slate-300 dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          
          <a
            href="/Mukunthan_Kajinthan_Resume.pdf"
            className="bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md shadow-cyan-500/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="text-slate-600 dark:text-slate-300" aria-label="Toggle theme">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button className="text-2xl text-slate-800 dark:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Glassy) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden mt-2 mx-4 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 p-6 shadow-2xl transition-colors duration-300"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-700 dark:text-slate-200 text-lg transition hover:text-cyan-600 dark:hover:text-cyan-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;