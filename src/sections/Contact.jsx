import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaWhatsapp,
  FaPaperPlane, FaCheckCircle,
} from "react-icons/fa";

/* ─── Your real contact details ─── */
const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "kajinthanmukunthan@gmail.com",
    link: "kajinthanmukunthan@gmail.com",
    color: "cyan",
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "+447446563692",
    link: "tel:+447446563692",
    color: "blue",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "London, United Kingdom",
    link: "#",
    color: "purple",
  },
];

const socials = [
  { icon: FaGithub,   href: "https://github.com/Kajinth31",   label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/kajinthan-mukunthan-0a3004294/",  label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/447446563692",        label: "WhatsApp" },
];

const colorMap = {
  cyan:   { bg: "bg-cyan-100 dark:bg-cyan-950/50",    border: "border-cyan-200 dark:border-cyan-800/40",    icon: "text-cyan-600 dark:text-cyan-400" },
  blue:   { bg: "bg-blue-100 dark:bg-blue-950/50",    border: "border-blue-200 dark:border-blue-800/40",    icon: "text-blue-600 dark:text-blue-400" },
  purple: { bg: "bg-purple-100 dark:bg-purple-950/50",border: "border-purple-200 dark:border-purple-800/40",icon: "text-purple-600 dark:text-purple-400" },
};

/* ─── Reusable label ─── */
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

/* ─── Input field ─── */
function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass = `w-full bg-slate-100/80 dark:bg-slate-800/60 backdrop-blur-sm
  border border-slate-200 dark:border-slate-700/60
  rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white
  placeholder-slate-400 dark:placeholder-slate-500
  focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-500
  focus:ring-2 focus:ring-cyan-400/20 dark:focus:ring-cyan-500/20
  transition-all duration-200`;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
};

/* ══════════════════════════════════════════════════════════ */
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await emailjs.send(
      "service_pb1tmmq",
      "template_s5bzzob",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "yCA6SufGNVhVPVFpt"
    );

    setStatus("sent");

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setStatus("idle");
    }, 3000);

  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
    setStatus("idle");
  }
};
  return (
    <section
      id="contact"
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
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-32 w-[460px] h-[460px] rounded-full
          bg-cyan-500/15 dark:bg-cyan-500/10 blur-[110px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full
          bg-purple-500/15 dark:bg-purple-500/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* ══ HEADER ══ */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mb-16 flex flex-col items-center text-center"
        >
          <SectionLabel>Let's Talk</SectionLabel>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Touch
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-base sm:text-lg max-w-xl">
            Have a project in mind, a question, or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        {/* ══ MAIN GRID ══ */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">

          {/* ── LEFT — info + socials ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you need a website, a design, or just want to collaborate —
              feel free to reach out and let's make something great together.
            </p>

            {/* Contact info cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((info, i) => {
                const c = colorMap[info.color];
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ x: 6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-4
                      bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                      border border-slate-200 dark:border-slate-800
                      hover:border-cyan-400/50 dark:hover:border-cyan-500/40
                      rounded-2xl px-4 py-3.5
                      shadow-sm hover:shadow-md hover:shadow-cyan-500/10
                      transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.bg} border ${c.border} ${c.icon}`}>
                      <info.icon className="text-base" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{info.title}</p>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              <span className="text-[11px] text-slate-400 dark:text-slate-600 uppercase tracking-widest font-semibold">or find me on</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.12 }}
                  whileTap={{ scale: 0.92 }}
                  title={label}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                    bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
                    border border-slate-200 dark:border-slate-800
                    hover:border-cyan-400/60 dark:hover:border-cyan-500/50
                    text-slate-500 dark:text-slate-400
                    hover:text-cyan-600 dark:hover:text-cyan-400
                    shadow-sm hover:shadow-md hover:shadow-cyan-500/10
                    transition-all duration-300 text-sm font-semibold"
                >
                  <Icon className="text-lg" />
                  <span className="hidden sm:inline text-xs">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — form ── */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 70, damping: 18, delay: 0.15 } } }}
            className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm
              border border-slate-200 dark:border-slate-800
              rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 dark:shadow-black/30
              overflow-hidden"
          >
            {/* Top accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyan-500 to-blue-600"
            />

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [0.8, 1.15, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60
                      border border-emerald-200 dark:border-emerald-800/40
                      flex items-center justify-center"
                  >
                    <FaCheckCircle className="text-3xl text-emerald-500" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name">
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required
                        placeholder="Kajinthan Mukunthan"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <input
                      type="text" name="subject" value={formData.subject}
                      onChange={handleChange} required
                      placeholder="Web Development Project"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Message">
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} required rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status !== "sending" ? { scale: 1.03 } : {}}
                    whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                    className="group relative overflow-hidden w-full
                      bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600
                      text-white font-semibold py-3.5 rounded-xl
                      flex items-center justify-center gap-2
                      shadow-lg shadow-cyan-500/25
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition-all duration-300"
                  >
                    {/* shimmer */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
                      transition-transform duration-700
                      bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}