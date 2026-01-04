import React, { useState } from 'react';

const projects = [
  {
    title: "Meme Generator",
    short: "An application using deep learning and computer vision to generate meme captions.",
    long: "We train a transformer-based model to extract humorous context from images and craft an amusing caption. Users can upload their own image and explore the quality of generated captions.",
    image: "project_pics/meme-generator.png",
    tools: ["PyTorch", "Flask", "React", "Tailwind CSS", "GCP", "Deep Learning"],
    demo: "https://hishambhatti.com/meme-generator/",
    github: "https://github.com/hishambhatti/meme-generator"
  },
  {
    title: "Human Health Sounds",
    short: "An interactive visualization to organize thousands of human health sounds via t-SNE.",
    long: "We organize thousands of health sounds among six classes from the open-source VocalSound dataset, using machine learning (t-SNE) to cluster these sounds purely through their acoustic properties.",
    image: "project_pics/health-sounds.png",
    tools: ["Python", "Hugging Face", "React", "Unsupervised Learning", "Health"],
    demo: "https://hishambhatti.com/human-health-sounds/",
    github: "https://github.com/ubicomplab/human-health-sounds"
  },
  {
    title: "Mini Google",
    short: "A multithreaded file search engine with a POSIX-compliant web server.",
    long: "A multithreaded file search engine built in C/C++ to handle concurrent users using a custom doubly-linked list and hash table for document indexing. Uses HTML rendering and input sanitization.",
    image: "project_pics/mini-google.png",
    tools: ["C", "C++", "POSIX", "Networking"],
    demo: null,
    github: "https://github.com/hishambhatti/mini-google"
  },
  {
    title: "SVD Image Compression",
    short: "A tool to simulate image compression using singular value decomposition.",
    long: "Uses singular value decomposition, a method of unsupervised learning, to approximate images. Users see a dashboard with insightful statistics to visualize how the quality changes with k.",
    image: "project_pics/image-compression-svd.png",
    tools: ["Python", "React", "Javascript", "Tailwind CSS", "Linear Algebra"],
    demo: "https://hishambhatti.com/image-compression-svd/",
    github: "https://github.com/hishambhatti/image-compression-svd"
  },
  {
    title: "Periodic Pairs",
    short: "A simple matching game for science-type icons, where you design your own gameboard!",
    long: "This is a simple matching game for science-type icons! The twist is that YOU design your own gameboard! Everything in this game is raw frontend (HTML, CSS, Javascript). No frameworks, no libraries.",
    image: "project_pics/periodic-pairs.jpeg",
    tools: ["HTML", "CSS", "Javascript"],
    demo: "https://hishambhatti.com/periodic-pairs/",
    github: "https://github.com/hishambhatti/periodic-pairs"
  },
  {
    title: "CLT Statistics",
    short: "An interactive visualization of the Central Limit Theorem using the Javascript D3 library.",
    long: "Interactivity and simulation are effective educational tools, and our project provides interactive visualizations to teach the Central Limit Theorem (CLT) to students.",
    image: "project_pics/clt-statistics.png",
    tools: ["D3.js", "Javascript", "Statistics", "Education"],
    demo: "https://clt-statistics-a5e31b.pages.cs.washington.edu",
    github: "https://github.com/hishambhatti/clt-statistics"
  }
];

export default function Projects({darkMode}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="pt-8 px-4">
      <h2 className="text-3xl mb-8 border-b-2 border-gray-100 pb-2">Projects</h2>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`min-w-75 md:min-w-87.5 ${
              darkMode ? 'bg-slate-800 border-0' : 'bg-gray-100 border-gray-400 border-0'
            } rounded-xl overflow-hidden cursor-pointer transition transform hover:-translate-y-2 hover:shadow-xl snap-center flex flex-col`}
          >
            {/* Image Container with fixed Aspect Ratio and White Background */}
            <div className="w-full aspect-video bg-white flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content Area */}
            <div className="p-5 grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-clamp-2`}>
                {project.short}
              </p>
            </div>
          </div>
        ))}

        {/* The "View All" Card */}
        <div className={`min-w-75 flex items-center justify-center ${darkMode ? ' bg-slate-800 ' : ' bg-blue-50 '} border-2 border-dashed border-blue-400 rounded-xl snap-center transition transform hover:shadow-xl`}>
            <button className={`${darkMode ? ' text-gray-50' : ' text-blue-500 '} font-bold flex flex-col items-center`}>
                <i className="fa-solid fa-arrow-right text-3xl mb-2"></i>
                View Portfolio
            </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className={`${darkMode ? ' dark:bg-slate-900 ' : ' bg-white '} w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative`} onClick={e => e.stopPropagation()}>
            {/* The "X" button */}
            <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 text-gray-500 text-2xl ${darkMode ? ' hover:text-slate-800 ' : ' hover:text-slate-800'}`}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-cover aspect-video bg-white" />

            <div className="px-8 pt-6 pb-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tools.map(tool => (
                  <span key={tool} className={`px-3 py-1 ${darkMode ? 'dark:bg-blue-900/30 dark:text-blue-400' : ' bg-blue-100 text-blue-600'} rounded-full text-xs font-medium`}>
                    {tool}
                  </span>
                ))}
              </div>

              <p className={`${darkMode ? ' dark:text-gray-300 ' : ' text-gray-600 '} mb-4 leading-relaxed`}>
                {selectedProject.long}
              </p>

              <div className="flex gap-6 border-t pt-6">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
                    <i className="fa-brands fa-github text-xl"></i> Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
                    <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}