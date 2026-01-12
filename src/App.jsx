import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import * as C from "./utils/projects.js";
import * as P from "./utils/publications.js";
import * as S from "./utils/skills.js";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Typewriter from "./components/Typewriter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className={`${darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"} transition-colors min-h-screen flex flex-col md:flex-row md:h-screen md:overflow-hidden`}>

        {/* MOBILE NAV: Stays sticky at the very top on phones */}
        <nav className={`sticky top-0 z-50 w-full border-b border-gray-200 px-6 py-4 flex justify-between items-center md:hidden ${darkMode ? "bg-slate-900" : "bg-white"}`}>
          <button onClick={toggleMenu} className="text-2xl p-2 focus:outline-none">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className={`absolute top-full left-0 w-full shadow-2xl flex flex-col p-6 space-y-4 z-50 ${darkMode ? 'bg-slate-800' : 'bg-white border-b border-gray-200'}`}>
              <a onClick={toggleMenu} href="#about" className="text-lg font-medium">About</a>
              <a onClick={toggleMenu} href="#experience" className="text-lg font-medium">Experience</a>
              <a onClick={toggleMenu} href="#portfolio" className="text-lg font-medium">Projects</a>
              <a onClick={toggleMenu} href="#publications" className="text-lg font-medium">Publications</a>
              <a onClick={toggleMenu} href="#skills" className="text-lg font-medium">Skills</a>
            </div>
          )}
        </nav>

        {/* Left Sidebar: Exact Desktop Spacing Restored */}
        <aside className={`w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-gray-300 px-10 md:px-20 py-10 flex flex-col ${!darkMode ? 'bg-[#F8F2FF]' : ''} md:overflow-y-auto`}>
          <div>
            {/* Image: Restored w-full for desktop, limited max-width for mobile */}
            <div className="w-full max-w-72 md:max-w-none mb-4 aspect-square mx-auto md:mx-0">
              <img className="rounded-lg object-cover w-full h-full" src="profile2.jpg" alt="Hisham Bhatti" />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl">Hisham Bhatti</h1>
              <p className={`text-md ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-light mb-4`}>
                <Typewriter
                  words={["AI Ubicomp Researcher", "MS Student @ UW", "Versatile Software Developer"]}
                />
              </p>

              <div className={`flex justify-center md:justify-start gap-4 mt-0 mb-4 text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <a href="mailto:hishamb@uw.edu" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                  <i className="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/hisham-bhatti/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                  <i className="fa-brands fa-square-linkedin"></i>
                </a>
                <a href="https://github.com/hishambhatti" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=FAJ4chsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                  <i className="fa-brands fa-google-scholar"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t-2 mx-12 md:mx-0 pt-0 md:pt-6 text-gray-500"></div>

          {/* Resume/Contact: Exact Old Spacing Restored */}
          <div className={`space-y-1 mt-6 md:mt-0 ${darkMode ? 'text-gray-300' : 'text-gray-600'} mx-12 md:mx-0 font-light md:text-left`}>
            <p><i className="fa-regular fa-envelope"></i> hishamb@cs.washington.edu</p>
            <p><i className="fa-solid fa-location-dot"></i> Seattle, WA</p>
            <p>
              <i className="fa-regular fa-file-lines"></i>{" "}
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 hover:underline underline-offset-2 transition">
                Resume
              </a>
              &nbsp;(as of July 2025)
            </p>
          </div>
        </aside>

        {/* Scrollable Right */}
        <main className="w-full md:w-2/3 flex flex-col md:h-screen md:overflow-y-auto">
          <Routes>
            <Route path="/" element={
              <>
                {/* Desktop Nav: Fixed Transparency with solid Background */}
                <nav className={`hidden md:flex sticky top-0 px-14 py-6 justify-between items-center z-20 ${darkMode ? "bg-slate-900" : "bg-white"}`}>
                  <div className="flex gap-6 font-medium">
                    <a className={`transition transform ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'}`} href="#about">About</a>
                    <a className={`transition transform ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'}`} href="#experience">Experience</a>
                    <a className={`transition transform ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'}`} href="#portfolio">Projects</a>
                    <a className={`transition transform ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'}`} href="#publications">Publications</a>
                    <a className={`transition transform ${darkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'}`} href="#skills">Skills</a>
                  </div>
                  <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                </nav>

                <div className="px-6 md:px-10 scroll-smooth">
                  <About />
                  <Experience darkMode={darkMode}/>
                  <Projects darkMode={darkMode} projects={C.projects.slice(0, 6)}/>
                  <Publications darkMode={darkMode} publications={P.publications}/>
                  <Skills darkMode={darkMode} skills={S.skills}/>
                  <Footer darkMode={darkMode}/>
                </div>
              </>
            } />
            <Route path="/portfolio" element={<Portfolio darkMode={darkMode} projects={C.projects}/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;