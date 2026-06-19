import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const categories = [
  { key: "frontend", label: "frontend", items: ["React", "JS/TS", "Tailwind"] },
  { key: "backend", label: "backend", items: ["Node.js", "Python", "SQL"] },
  { key: "ai_data", label: "ai_data", items: ["ChatGPT",
  "GitHub Copilot","Gemini","Claude","Cursor AI","Perplexity","OpenAI API","Hugging Face",] },
  { key: "cloud_ops", label: "cloud_ops", items: ["AWS", "Docker", "Linux", "CI/CD"] },
  { key: "design", label: "design", items: ["Figma", "UI/UX", "Motion"] },
];

const script = categories.map((c) => ({
  command: `print(skills["${c.label}"])`,
  output: c,
}));

const TYPE_SPEED = 48;
const LINE_PAUSE = 650;
const LOOP_PAUSE = 2100;

const useTerminalPlayer = (lines) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [completedLines, setCompletedLines] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => setRunning(true);

  useEffect(() => {
    if (!running) return;
    const currentCommand = lines[lineIndex]?.command ?? "";

    if (charCount < currentCommand.length) {
      timerRef.current = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(timerRef.current);
    }

    if (completedLines <= lineIndex) {
      timerRef.current = setTimeout(() => setCompletedLines(lineIndex + 1), 150);
      return () => clearTimeout(timerRef.current);
    }

    if (lineIndex < lines.length - 1) {
      timerRef.current = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharCount(0);
      }, LINE_PAUSE);
      return () => clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setLineIndex(0);
      setCharCount(0);
      setCompletedLines(0);
    }, LOOP_PAUSE);
    return () => clearTimeout(timerRef.current);
  }, [running, charCount, lineIndex, completedLines, lines]);

  return { lineIndex, charCount, completedLines, start, running };
};

const Skills = () => {
  const { lineIndex, charCount, completedLines, start, running } = useTerminalPlayer(script);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Blobs - Adjusted for both modes */}
      <div className="pointer-events-none absolute top-0 left-1/3 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-wide mb-3"
          >
            # what i work with
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white font-mono"
          >
            My Tech<span className="text-emerald-500 dark:text-emerald-400">_</span>Stack
          </motion.h2>
        </div>

        {/* Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          onViewportEnter={start}
          className="rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-[#1e1e1e] shadow-2xl shadow-slate-200/50 dark:shadow-black/40 overflow-hidden transition-colors duration-500"
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-300 dark:border-slate-800 bg-slate-200/60 dark:bg-slate-900/60 transition-colors duration-500">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-slate-500 dark:text-slate-500 text-xs font-mono">
              ~/portfolio/skills.py
            </span>
          </div>

          <div className="p-4 sm:p-6 min-h-[320px]">
            {!running && (
              <span className="font-mono text-[13px] text-slate-500">
                $ python skills.py
              </span>
            )}

            {running &&
              script.map((entry, idx) => {
                if (idx > lineIndex) return null;
                const isActiveLine = idx === lineIndex;
                const typedCommand = isActiveLine
                  ? entry.command.slice(0, charCount)
                  : entry.command;
                const fullyTyped = !isActiveLine || charCount >= entry.command.length;
                const showOutput = idx < completedLines;

                return (
                  <div key={entry.command} className="mb-1">
                    <div className="flex items-start gap-2 font-mono text-[13px] sm:text-sm">
                      <span className="text-slate-400 dark:text-slate-500 shrink-0">&gt;&gt;&gt;</span>
                      <span className="break-all text-slate-800 dark:text-slate-200">
                        <PyHighlight code={typedCommand} />
                        {isActiveLine && !fullyTyped && (
                          <span className="inline-block w-[7px] h-[1em] bg-emerald-500 dark:bg-emerald-400 ml-0.5 align-middle animate-pulse" />
                        )}
                      </span>
                    </div>

                    <AnimatePresence>
                      {showOutput && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.25 }}
                          className="pl-7 pt-1.5 pb-2 font-mono text-[12px] sm:text-[13px]"
                        >
                          <span className="text-slate-500">[</span>
                          <div className="flex flex-wrap gap-1.5 mt-1 pl-3">
                            {entry.output.items.map((item, i) => (
                              <motion.span
                                key={item}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06, duration: 0.2 }}
                                className="text-[#a11] dark:text-[#ce9178]" 
                              >
                                '{item}'{i < entry.output.items.length - 1 ? "," : ""}
                              </motion.span>
                            ))}
                          </div>
                          <span className="text-slate-500">]</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PyHighlight = ({ code }) => {
  const match = code.match(/^(print)(\()(skills)(\[)(")([a-z_]*)("?)(\]?)(\)?)$/);
  if (!match) {
    return <span className="text-slate-800 dark:text-slate-200">{code}</span>;
  }
  const [, kw, lp, obj, lb, q1, key, q2, rb, rp] = match;
  return (
    <>
      {/* Function name */}
      <span className="text-[#795e26] dark:text-[#dcdcaa]">{kw}</span>
      <span className="text-slate-800 dark:text-slate-300">{lp}</span>
      {/* Object */}
      <span className="text-[#001080] dark:text-[#9cdcfe]">{obj}</span>
      <span className="text-slate-800 dark:text-slate-300">{lb}</span>
      {/* String key */}
      <span className="text-[#a11] dark:text-[#ce9178]">{q1}{key}{q2}</span>
      <span className="text-slate-800 dark:text-slate-300">{rb}{rp}</span>
    </>
  );
};

export default Skills;