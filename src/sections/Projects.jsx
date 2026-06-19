import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    title: "Invoice Management System",
    description:
      "A full-stack invoice management platform designed to streamline invoice processing and product tracking. Upload invoices, manage suppliers, search products efficiently, and maintain historical pricing records for better business decisions.",
    features: [
      "Secure user authentication",
      "Upload and manage invoices",
      "Product and supplier management",
      "Intelligent product search",
      "Historical price tracking for duplicates",
      "Advanced filtering and sorting",
      "Dashboard with business insights",
      "REST API integration",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "Python", "SQL", "Docker", "AWS"],
    accent: "cyan",
    github: "https://github.com/Kajinth31/invoice-management-system",
    link: "",
  },
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio website built to showcase my skills, projects, certifications, education, and professional journey, with a seamless way for visitors to explore my work and get in touch.",
    features: [
      "Responsive design",
      "Interactive project showcase",
      "Skills and technology overview",
      "Certification display",
      "Education and experience sections",
      "Contact form",
      "Performance-optimized architecture",
    ],
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion", "Vite"],
    accent: "violet",
    github: "https://github.com",
    link: "https://example.com",
  },
  {
    title: "Certification Management System",
    description:
      "A web-based application to organize and manage professional and academic certificates — upload, store, categorize, and retrieve certifications through a simple, efficient interface.",
    features: [
      "User authentication",
      "Certificate upload and storage",
      "Certificate categorization",
      "Search and filtering",
      "CRUD operations for certificate records",
      "Responsive interface",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "MySQL"],
    accent: "orange",
    github: "https://github.com/Kajinth31",
    link: "https://example.com",
  },
];

const accentMap = {
  cyan: {
    text: "text-cyan-600 dark:text-cyan-400",
    dot: "bg-cyan-500 dark:bg-cyan-400",
    chip: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/20",
    glow: "hover:shadow-cyan-500/15 dark:hover:shadow-cyan-500/20",
    iconBorder: "hover:border-cyan-300 dark:hover:border-cyan-500/50",
  },
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500 dark:bg-violet-400",
    chip: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:border-violet-500/20",
    glow: "hover:shadow-violet-500/15 dark:hover:shadow-violet-500/20",
    iconBorder: "hover:border-violet-300 dark:hover:border-violet-500/50",
  },
  orange: {
    text: "text-orange-600 dark:text-orange-400",
    dot: "bg-orange-500 dark:bg-orange-400",
    chip: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20",
    glow: "hover:shadow-orange-500/15 dark:hover:shadow-orange-500/20",
    iconBorder: "hover:border-orange-300 dark:hover:border-orange-500/50",
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

function ProjectCard({ project, idx }) {
  const accent = accentMap[project.accent];

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-8 shadow-sm ${accent.glow} hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-shadow duration-300 overflow-hidden`}
    >
      <span className="absolute -top-2 right-4 text-7xl font-black text-slate-100 dark:text-slate-800/60 select-none pointer-events-none">
        {String(idx + 1).padStart(2, "0")}
      </span>

      <span
        className={`absolute top-0 left-0 h-[3px] w-0 group-hover:w-full ${accent.dot} transition-all duration-500 ease-out`}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0 mt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white ${accent.iconBorder} transition-colors`}
            >
              <FaGithub />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit live demo of ${project.title}`}
              className={`w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white ${accent.iconBorder} transition-colors`}
            >
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <p className={`text-xs font-semibold uppercase tracking-wider ${accent.text} mb-3`}>
            Key features
          </p>
          <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <FaCheckCircle className={`${accent.text} mt-0.5 shrink-0 text-xs`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium border ${accent.chip}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${accent.text} hover:gap-3 transition-all`}
          >
            View project <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function GithubCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-8 sm:p-10 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cyan-200/40 dark:bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Explore more
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            More projects on GitHub
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mb-4">
            Additional full-stack applications, React projects, Python apps,
            data analytics work, UI/UX experiments, academic coursework, and
            ongoing learning repositories.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Full-stack apps",
              "React projects",
              "Python apps",
              "Data analytics",
              "UI/UX experiments",
              "Academic coursework",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href="https://github.com/Kajinth31"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 px-6 py-3 rounded-xl font-semibold transition-colors whitespace-nowrap"
        >
          <FaGithub /> View more projects
        </a>
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-6 py-16 sm:py-20 overflow-hidden transition-colors duration-500"
    >
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full bg-cyan-200/30 dark:bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-violet-200/30 dark:bg-violet-500/10 blur-3xl" />

      <div className="max-w-5xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-cyan-600 dark:text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-3">
            Featured work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my recent work and accomplishments
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </motion.div>

        <GithubCTA />
      </div>
    </section>
  );
}

export default Projects;