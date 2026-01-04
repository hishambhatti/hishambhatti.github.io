import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import * as C from "./utils/projects.js"
import * as P from "./utils/publications.js"
import About from "./components/About";
import Experience from "./components/Experience"
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Typewriter from "./components/Typewriter";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "bg-slate-900 text-white transition transform" : "bg-white text-slate-900 transition transform"}>
        <div className="flex h-screen overflow-hidden">

          {/* Left Sidebar */}
          <aside className={`w-1/3 border-r-2 border-width border-gray-300 px-20 py-10 flex flex-col justify-content ${!darkMode? ' bg-[#FBF8FF]' : ' '}`}>
            <div>
              <div className="w-full mb-4 aspect-square">
                <img className="rounded-lg" src="profile.jpeg" alt="Picture of Hisham Bhatti"></img>
              </div>
              <h1 className="text-3xl">Hisham Bhatti</h1>
              <p className="text-md text-gray-500 font-light mb-0">
                <Typewriter
                  words={[
                    "AI Ubicomp Researcher",
                    "MS Student @ UW",
                    "Aspiring Software Developer"
                  ]}
                />
              </p>
              <div className={`flex gap-4 mt-0 mb-2 text-2xl ${darkMode ? ' text-gray-300 ' : ' text-gray-600 '}`}>
                {/* These would be your 4 icons */}
                <div className="flex gap-4 mt-4 mb-4 text-2xl">
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

            <div className="border-t-2 pt-6 text-gray-500"></div>

            <div className={`space-y-1 ${darkMode ? ' text-gray-300 ' : ' text-gray-600 '} font-light`}>
              <p><i className="fa-regular fa-envelope"></i> hishamb@cs.washington.edu</p>
              <p><i className="fa-solid fa-location-dot"></i>  Seattle, WA</p>
              <p>
                <i className="fa-regular fa-file-lines"></i>{" "}
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 hover:underline underline-offset-2 transition">
                  Resume
                </a>
                &nbsp;(as of July 2025)
              </p>
            </div>
          </aside>

          {/* RIGHT SIDE - Scrollable */}
          <main className="w-2/3 flex flex-col h-screen">
            <Routes>
              {/* Main landing page */}
              <Route path="/" element={
                <>
                  {/* Top Navigation Panel */}
                  <nav className="sticky top-0 bg-inherit px-14 py-6 flex justify-between items-center z-10">
                    <div className="flex gap-6 font-medium">
                      <a className={`transition transform ${darkMode ? ' hover:text-gray-400 ' : ' hover:text-gray-500'} `} href="#about">About</a>
                      <a className={`transition transform ${darkMode ? ' hover:text-gray-400 ' : ' hover:text-gray-500'} `} href="#experience">Experience</a>
                      <a className={`transition transform ${darkMode ? ' hover:text-gray-400 ' : ' hover:text-gray-500'} `} href="#portfolio">Portfolio</a>
                      <a className={`transition transform ${darkMode ? ' hover:text-gray-400 ' : ' hover:text-gray-500'} `} href="#publications">Publications</a>
                      <a className={`transition transform ${darkMode ? ' hover:text-gray-400 ' : ' hover:text-gray-500'} `} href="#skills">Skills</a>
                    </div>
                    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                  </nav>

                  {/* Scrollable Content Area */}
                  <div className="overflow-y-auto px-10 scroll-smooth">
                    <About />
                    <Experience darkMode={darkMode}/>
                    <Projects darkMode={darkMode} projects={C.projects.slice(0, 6)}/>
                    <Publications darkMode={darkMode} publications={P.publications}/>
                    <Skills darkMode={darkMode}/>
                    <Footer darkMode={darkMode}/>
                    {/* Add other sections here */}
                  </div>
                </>
              } />

              {/* Dedicated Portfolio Page */}
              <Route path="/portfolio" element={<Portfolio darkMode={darkMode} projects={C.projects}/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;