import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

export default function Portfolio({ darkMode, projects }) {
  // 1. Added state to handle the modal popup
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`p-10 overflow-y-auto h-full ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl">Full Portfolio</h1>
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

      <ProjectModal
        project={selectedProject}
        darkMode={darkMode}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}