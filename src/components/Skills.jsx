import React from 'react';

const SkillBadge = ({ name, badgeUrl }) => (
  <img
    src={badgeUrl}
    alt={`${name} badge`}
    className="h-7"
  />
);

const SkillSection = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Python", badgeUrl: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
        { name: "Java", badgeUrl: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
        { name: "C", badgeUrl: "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" },
        { name: "C++", badgeUrl: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
        { name: "C#", badgeUrl: "https://custom-icon-badges.demolab.com/badge/C%23-%23239120.svg?style=for-the-badge&logo=cshrp&logoColor=white" },
        { name: "HTML", badgeUrl: "https://img.shields.io/badge/HTML-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
        { name: "CSS", badgeUrl: "https://img.shields.io/badge/CSS-639?style=for-the-badge&logo=css&logoColor=fff" },
        { name: "JavaScript", badgeUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
        { name: "TypeScript", badgeUrl: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
        { name: "SQL", badgeUrl: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "Bash", badgeUrl: "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", badgeUrl: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
        { name: "Next.js", badgeUrl: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" },
        { name: "Node.js", badgeUrl: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
        // { name: "Chart.js", badgeUrl: "https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" },
        { name: "Flask", badgeUrl: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
        { name: "Spring Boot", badgeUrl: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
        { name: "Tailwind CSS", badgeUrl: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
        { name: "PyTorch", badgeUrl: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
        { name: "TensorFlow", badgeUrl: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
        { name: "Numpy", badgeUrl: "https://img.shields.io/badge/Numpy-777BB4?style=for-the-badge&logo=numpy&logoColor=white" },
        { name: "Matplotlib", badgeUrl: "https://custom-icon-badges.demolab.com/badge/Matplotlib-71D291?style=for-the-badge&logo=matplotlib&logoColor=fff" },
        { name: "Pandas", badgeUrl: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
        { name: "scikit-learn", badgeUrl: "https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white" },
        { name: "Hugging Face", badgeUrl: "https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" },
      ],
    },
    {
      title: "Cloud & Dev Tools",
      skills: [
        { name: "AWS", badgeUrl: "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg??style=for-the-badge&logo=aws&logoColor=white" },
        { name: "Azure", badgeUrl: "https://custom-icon-badges.demolab.com/badge/Microsoft%20Azure-0089D6?style=for-the-badge&logo=msazure&logoColor=white" },
        { name: "Google Cloud", badgeUrl: "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" },
        { name: "Git", badgeUrl: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
        { name: "GitlabCI", badgeUrl: "https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" },
        { name: "Docker", badgeUrl: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
        { name: "Postman", badgeUrl: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
        { name: "Firebase", badgeUrl: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
        { name: "Postgres", badgeUrl: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
        { name: "Linux", badgeUrl: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
      ],
    },
    {
      title: "Mathematics & Science",
      skills: [
        { name: "MATLAB", badgeUrl: "https://img.shields.io/badge/MATLAB-ED1C24?style=for-the-badge&logo=mathworks&logoColor=white" },
        { name: "R", badgeUrl: "https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white" },
        { name: "Mathematica", badgeUrl: "https://img.shields.io/badge/-Wolfram Mathematica-DD1100?style=for-the-badge&logo=wolframmathematica&logoColor=white" },
        { name: "Julia", badgeUrl: "https://img.shields.io/badge/Julia-9558B2?style=for-the-badge&logo=julia&logoColor=white" },
        { name: "LaTeX", badgeUrl: "https://img.shields.io/badge/LaTeX-008080?style=for-the-badge&logo=latex&logoColor=white" },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-8 px-4">
      <h2 className="text-3xl border-b-2 border-gray-100 pb-2 mb-8">Skills</h2>
      <div className="space-y-10">
        {skillGroups.map((group) => (
          <SkillSection key={group.title} title={group.title} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}