const TimelineItem = ({ title, date, subtitle, location, darkMode }) => (
  <div className="relative pl-8 pb-6 group">
    {/* The Vertical Line */}
    <div className="absolute left-2.75 top-2 bottom-0 w-0.5 bg-gray-200 group-last:bg-transparent"></div>
    {/* The Circle Marker */}
    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-blue-500 bg-white group-hover:bg-blue-500 transition-colors duration-300"></div>

    <div className="flex flex-col">
      <h4 className="text-lg font-bold leading-tight">{title}</h4>
      <span className="text-sm font-medium text-blue-500 mb-1">{date}</span>
      <span className={`text-md font-semibold ${darkMode ? ' text-gray-300 ' : ' text-gray-700 '}`}>{subtitle}</span>
      <span className={`text-sm ${darkMode ? ' text-gray-400 ' : ' text-gray-500 '} mb-2 italic`}>{location}</span>
    </div>
  </div>
);

export default function Experience({darkMode}) {
  return (
    <section id="experience" className="pt-8 px-4">
      <h2 className="text-3xl mb-8 border-b-2 border-gray-100 pb-2">Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Education */}
        <div>
          <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${darkMode ? ' text-gray-200 ' : ' text-gray-500 '} uppercase tracking-widest`}>
            <i className="fa-solid fa-graduation-cap"></i> Education
          </h3>
          <div className="mt-4">
            <TimelineItem
              title="M.S. in Computer Science & Engineering"
              date="Sept 2025 - Present"
              subtitle="University of Washington"
              location="Seattle, WA"
              darkMode={darkMode}
            />
            <TimelineItem
              title="B.S. in CS, B.S. in Math, Minor in Physics"
              date="Sep 2021 - June 2025"
              subtitle="University of Washington"
              location="Seattle, WA"
              darkMode={darkMode}
            />
          </div>
        </div>

        {/* Work */}
        <div>
          <h3 className={`text-xl font-bold mb-8 flex items-center gap-2 ${darkMode ? ' text-gray-200 ' : ' text-gray-500 '} uppercase tracking-widest`}>
            <i className="fa-solid fa-briefcase"></i> Work
          </h3>
          <div className="">
            <TimelineItem
              title="Software Engineer Intern"
              date="2026"
              subtitle="Google"
              location="San Diego, CA"
              darkMode={darkMode}
            />
            <TimelineItem
              title="AI Engineer Intern"
              date="April 2025 - June 2025"
              subtitle="Revefi"
              location="Redmond, WA"
              darkMode={darkMode}
            />
             <TimelineItem
              title="Undergraduate Researcher @ NSF"
              date="June 2024 - August 2024"
              subtitle="Mathematics REU at CSU Chico"
              location="Chico, CA"
              darkMode={darkMode}
            />
            <TimelineItem
              title="Computational Biology Intern"
              date="June 2023 - Feb 2024"
              subtitle="Molecular Information & Systems Lab"
              location="Seattle, WA"
              darkMode={darkMode}
            />
          </div>
        </div>

      </div>
    </section>
  );
}