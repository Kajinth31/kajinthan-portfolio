import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

function App() {
  return (
    // This wrapper handles the theme transition for the whole app
    <div className="bg-white dark:bg-[#030712] text-slate-900 dark:text-[#f1f5f9] transition-colors duration-300 min-h-screen">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;