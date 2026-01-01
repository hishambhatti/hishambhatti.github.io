import React, { useState } from "react";

// Placeholder Components for the Right Side
const About = () => <section id="about" className="min-h-screen py-20"><h2>About Me</h2><p>Content goes here...</p></section>;
const Experience = () => <section id="experience" className="min-h-screen py-20"><h2>Experience</h2><p>Content goes here...</p></section>;
const Portfolio = () => <section id="portfolio" className="min-h-screen py-20"><h2>Portfolio</h2></section>;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
      <div className="flex h-screen overflow-hidden">

        {/* Left Sidebar */}
        <aside className="w-1/3 border-r border-gray-300 px-20 py-10 flex flex-col justify-content">
          <div>
            <div className="w-full mb-4 aspect-square">
               <img className="rounded-lg" src="profile.jpeg" alt="Picture of Hisham Bhatti"></img>
            </div>
            <h1 className="text-3xl">Hisham Bhatti</h1>
            <p className="text-md text-gray-500 font-light">AI Ubicomp Researcher</p>
            <div className="flex gap-4 mt-4 mb-4 text-2xl text-gray-600">
              {/* These would be your 4 icons */}
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-brands fa-square-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-google-scholar"></i>
            </div>
          </div>

          <div className="border-t pt-6">
            <p><i className="fa-solid fa-location-dot"></i> Seattle, WA</p>
            <p><i className="fa-regular fa-file-lines"></i> Resume (as of July 2025)</p>
          </div>
        </aside>

        {/* RIGHT SIDE - Scrollable */}
        <main className="w-2/3 flex flex-col h-screen">

          {/* Top Navigation Panel */}
          <nav className="sticky top-0 bg-inherit border-b p-6 flex justify-between items-center z-10">
            <div className="flex gap-6 font-medium">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#publications">Publications</a>
              <a href="#skills">Skills</a>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Scrollable Content Area */}
          <div className="overflow-y-auto p-10 scroll-smooth">
            <About />
            <hr />
            <Experience />
            <hr />
            <Portfolio />
            {/* Add other sections here */}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;