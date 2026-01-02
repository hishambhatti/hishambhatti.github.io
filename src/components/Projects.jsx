import React, { useState } from 'react';

const projects = [
  {
    title: "Meme Generator",
    short: "Deep learning and computer vision to generate meme captions.",
    long: "By using an LLM to generate data, we perform distillation to train a smaller, transformer-based model to extract humorous context from images and craft an amusing caption.",
    image: "project_pics/meme-generator.png",
    tools: ["PyTorch", "Flask", "React", "Tailwind CSS", "Google Cloud"],
    demo: "https://hishambhatti.com/meme-generator/",
    github: "https://github.com/hishambhatti/meme-generator"
  },
  {
    title: "Human Health Sounds",
    short: "Interactive visualization of thousands of human health sounds via t-SNE.",
    long: "We organize thousands of human health sounds among six classes from the open-source VocalSound dataset, using machine learning (t-SNE) to cluster these sounds purely through their acoustic properties.",
    image: "project_pics/health-sounds.png",
    tools: ["Python", "Flask", "Hugging Face", "React", "D3.js"],
    demo: "https://hishambhatti.com/human-health-sounds/",
    github: "https://github.com/ubicomplab/human-health-sounds"
  },
  {
    title: "Mini Google",
    short: "A multithreaded file search engine with a POSIX-compliant web server.",
    long: "Built in C/C++ to handle concurrent users using a custom doubly-linked list and hash table for document indexing. Features HTML rendering and input sanitization.",
    image: "project_pics/mini-google.png",
    tools: ["C", "C++", "POSIX", "Networking"],
    demo: null,
    github: "https://github.com/hishambhatti/mini-google"
  },
  {
    title: "SVD Image Compression",
    short: "Visualize image compression using singular value decomposition.",
    long: "This project uses SVD to reduce an image's rank. Users can upload images and see a dashboard with statistics on how the k-approximation changes quality.",
    image: "project_pics/image-compression-svd.png",
    tools: ["Python", "NumPy", "React", "Tailwind CSS"],
    demo: "https://hishambhatti.com/image-compression-svd/",
    github: "https://github.com/hishambhatti/image-compression-svd"
  },
  {
    title: "Periodic Pairs",
    short: "A science-themed matching game where you design the board.",
    long: "A raw frontend project built with no frameworks or libraries. Focuses on DOM manipulation and custom CSS layouts for an educational matching game.",
    image: "project_pics/periodic-pairs.jpeg",
    tools: ["HTML", "CSS", "Vanilla JS"],
    demo: "https://hishambhatti.com/periodic-pairs/",
    github: "https://github.com/hishambhatti/periodic-pairs"
  },
  {
    title: "CLT Statistics",
    short: "Interactive visualization of the Central Limit Theorem using D3.",
    long: "Interactivity and simulation are effective educational tools; our project aims to leverage them to teach statistical concepts to students using D3.js simulations.",
    image: "project_pics/clt-statistics.png",
    tools: ["D3.js", "Javascript", "Simulation"],
    demo: "https://clt-statistics-a5e31b.pages.cs.washington.edu",
    github: "https://github.com/hishambhatti/clt-statistics"
  }
];

export default function Projects({darkMode}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-0">
      <h2 className="text-3xl mb-8 border-b-2 border-gray-100 pb-2">Projects</h2>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`min-w-[300px] md:min-w-[350px] ${
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
            <div className="p-5 flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-clamp-2`}>
                {project.short}
              </p>
            </div>
          </div>
        ))}

        {/* The "View All" Card */}
        <div className="min-w-[300px] flex items-center justify-center bg-blue-50 dark:bg-slate-800 border-2 border-dashed border-blue-400 rounded-xl snap-center">
            <button className="text-blue-500 font-bold hover:underline flex flex-col items-center">
                <i className="fa-solid fa-arrow-right text-3xl mb-2"></i>
                View All Portfolio
            </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-2xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover aspect-video" />

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
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