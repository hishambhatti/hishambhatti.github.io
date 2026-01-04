import React from 'react';

export default function ProjectModal({ project, darkMode, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl relative`}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 text-2xl hover:text-red-500 transition-colors z-10"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <img src={project.image} alt={project.title} className="w-full object-cover aspect-video bg-white" />

        <div className="px-8 pt-6 pb-8 overflow-y-auto">
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map(tool => (
              <span key={tool} className={`px-3 py-1 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'} rounded-full text-xs font-medium`}>
                {tool}
              </span>
            ))}
          </div>

          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
            {project.long}
          </p>

          <div className="flex gap-6 border-t pt-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
                <i className="fa-brands fa-github text-xl"></i> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
                <i className="fa-solid fa-arrow-up-right-from-square text-xl"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}