import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Portfolio({ darkMode, projects }) {
  // 1. Added state to handle the modal popup
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`p-10 overflow-y-auto h-full ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-semibold">Full Portfolio</h1>
        <Link to="/" className="text-blue-500 hover:underline flex items-center gap-2 transition-colors">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
      </div>

      {/* 2. Modified Grid: Changed to 3 columns on large screens (lg:grid-cols-3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`flex flex-col rounded-xl overflow-hidden cursor-pointer transition transform hover:-translate-y-2 hover:shadow-xl
              ${darkMode ? 'bg-slate-800 border-0' : 'bg-gray-100 border-0'}`}
          >
            {/* Image Container matching Projects.js */}
            <div className="w-full aspect-video bg-white flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content matching Projects.js */}
            <div className="p-5 grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.short}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Reusable Modal Overlay (Copied from Projects component for consistency) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`${darkMode ? 'bg-slate-900' : 'bg-white'} w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative`}
            onClick={e => e.stopPropagation()}
          >
            <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-red-500 transition-colors"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-cover aspect-video bg-white" />

            <div className="px-8 pt-6 pb-8 overflow-y-auto">
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tools.map(tool => (
                  <span key={tool} className={`px-3 py-1 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} rounded-full text-xs font-medium`}>
                    {tool}
                  </span>
                ))}
              </div>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
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
    </div>
  );
}