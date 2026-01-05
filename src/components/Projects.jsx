import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

export default function Projects({darkMode, projects}) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="pt-8 px-4">
      <h2 className="text-3xl mb-8 border-b-2 border-gray-200 pb-2">Projects</h2>

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
        <Link
          to="/portfolio"
          className={`min-w-75 flex items-center justify-center border-2 border-dashed border-blue-400 rounded-xl snap-center transition-all duration-300
            ${darkMode ? 'bg-slate-800/50 hover:bg-slate-800' : 'bg-blue-50 hover:bg-blue-100'}
            group hover:shadow-2xl hover:-translate-y-2`}
        >
            <div className={`${darkMode ? 'text-gray-50' : 'text-blue-500'} font-bold flex flex-col items-center group-hover:scale-110 transition-transform`}>
                <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-arrow-right text-xl"></i>
                </div>
                <span className="uppercase tracking-wider text-sm">View Full Portfolio</span>
            </div>
        </Link>
      </div>

      {/* Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        darkMode={darkMode}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}