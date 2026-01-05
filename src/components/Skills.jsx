import React from 'react';

const SkillBadge = ({ name, badgeUrl }) => (
  <img
    src={badgeUrl}
    alt={`${name} badge`}
    className="h-7"
  />
);

const SkillSection = ({ title, skills, darkMode }) => (
  <div className="mb-8">
    <h3 className={`text-sm uppercase tracking-widest ${darkMode ? ' text-gray-300 ' : ' text-gray-600 '} font-bold mb-4`}>{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

export default function Skills({darkMode, skills}) {
  return (
    <section id="skills" className={`pt-8 px-4`}>
      <h2 className="text-3xl border-b-2 border-gray-200 pb-2 mb-8">Skills</h2>
      <div className="space-y-10">
        {skills.map((group) => (
          <SkillSection key={group.title} title={group.title} skills={group.skills} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}