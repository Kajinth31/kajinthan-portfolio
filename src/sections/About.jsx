import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaTools, FaRobot } from "react-icons/fa";

function About() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut", delay },
  });
    const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Mukunthan_Kajinthan_Resume.pdf";
    link.download = "Mukunthan_Kajinthan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
    }),
    hover: {
      y: -6,
      scale: 1.02,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const features = [
    { icon: FaCode,     title: "Web Development", desc: "Modern full-stack applications" },
    { icon: FaDatabase, title: "Data Analytics",   desc: "Insights from complex data" },
    { icon: FaRobot,    title: "AI Integration",  desc: "Building intelligent applications using AI APIs and modern automation tools." },
    { icon: FaTools,    title: "System Design",    desc: "Robust computer architectures" },
  ];

  const tickerSkills = [
    "REACT.JS", "PYTHON", "NODE.JS", "SQL", "TAILWIND CSS",
    "REST APIS", "DOCKER", "LINUX", "SYSTEM DESIGN", "DATA ANALYTICS",
  ];

  return (
    <section
      id="about"
      className="relative scroll-mt-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-16 sm:py-20 px-6 md:px-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TWO-COLUMN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — heading + text + button, each animated independently */}
          <div className="flex flex-col gap-7">

            <motion.div {...fadeUp(0)}>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                About <span className="text-cyan-500">Me</span>
              </h2>
              <p className="mt-3 text-slate-500 dark:text-slate-400 text-lg">
                Get to know more about my journey
              </p>
            </motion.div>

            <motion.p
              {...fadeUp(0.1)}
              className="text-lg leading-relaxed text-slate-700 dark:text-slate-400"
            >
              I'm a Computer Systems Engineering graduate with a passion for building
              scalable and efficient software solutions. With expertise in full-stack
              development, cloud technologies, and data analytics, I create innovative
              applications that solve real-world problems.
            </motion.p>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg leading-relaxed text-slate-700 dark:text-slate-400"
            >
              My journey in tech started with a curiosity about how systems work at the
              core level. This led me to pursue Computer Systems Engineering, where I
              developed a strong foundation in both software architectures and hardware
              systems engineering.
            </motion.p>

            <motion.div {...fadeUp(0.3)}>
              <button onClick={downloadResume} className="group px-8 py-4 rounded-2xl bg-cyan-600 text-white font-semibold text-lg transition-all hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center gap-3 w-fit">
                <span>Download Resume</span>
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block"
                >
                  ↓
                </motion.span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT — 2×2 card grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="group p-7 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-default transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-500/10 text-cyan-500 text-2xl mb-5 group-hover:bg-cyan-500/20 transition-colors duration-300"
                >
                  <item.icon />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILLS TICKER */}
        <div className="mt-20 border-t border-slate-200 dark:border-slate-800 pt-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center uppercase tracking-[3px] text-xs text-slate-400 dark:text-slate-500 font-medium"
          >
            Technologies I Work With
          </motion.p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap w-max"
            >
              {[...tickerSkills, ...tickerSkills].map((skill, index) => (
                <span
                  key={index}
                  className="mx-10 text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase hover:text-cyan-500 transition-colors duration-300 cursor-default"
                >
                  {skill}
                  <span className="ml-10 text-cyan-500/40">·</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
