import React from 'react';

const PublicationItem = ({ title, authors, journal, year, links, note, darkMode }) => {
  return (
    <div className="relative group mb-10 last:mb-0">
      <div className="relative z-10">
        <h3 className={`text-xl font-bold ${darkMode ? ' text-slate-100 ' : ' text-slate-800 '} leading-snug pr-20`}>
          {title}
        </h3>

        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 max-w-[45vw]`}>
          {authors.map((author, index) => (
            <React.Fragment key={index}>
              <span className={author.includes("Hisham Bhatti") ? "font-semibold underline decoration-gray-400" : ""}>
                {author}
              </span>
              {/* Comma and space are now outside the underlined span */}
              {index < authors.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </p>

        <p className="text-gray-500 italic mt-1">
          {journal} {year && `· ${year}`}
        </p>

        {note && <p className="text-sm text-gray-400 mt-1">{note}</p>}

        <div className="flex gap-3 mt-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 border border-slate-700 text-xs font-bold tracking-widest uppercase rounded hover:bg-slate-700 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Publications({darkMode}) {
  const pubs = [
    {
      title: "On the Structure of Bad Science Matrices",
      authors: ["Alex Albors", "Hisham Bhatti", "Lukshya Ganjoo", "Raymond Guo", "Dmitriy Kunisky", "Rohan Mukherjee", "Alicia Stepin", "Tony Zeng"],
      journal: "Involve",
      year: "2024",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2408.00933" },
        { label: "PDF", url: "https://arxiv.org/pdf/2408.00933" }
      ]
    },
    {
      title: "Theoretical Assessment of Nanopore Protein Fingerprinting",
      authors: ["Melissa Queen", "Hisham Bhatti", "Jeff Nivala"],
      journal: "Biophysical Journal",
      year: "2024",
      links: [
        { label: "ResearchGate", url: "https://www.researchgate.net/publication/378094449_A_theoretical_assessment_of_nanopore_protein_fingerprinting" }
      ]
    },
    {
      title: "An Algorithm for Implementing Tait Graph Functionality in SageMath",
      authors: ["Hisham Bhatti", "Chase Wilson"],
      journal: "To be published",
      year: "",
      note: "Project developed during the 2024 NSF Mathematics REU @ CSU Chico.",
      links: [] // Add link here if you have a GitHub repo or report PDF
    }
  ];

  return (
    <section id="publications" className="pt-8 px-4">
      <h2 className="text-3xl border-b-2 border-gray-100 pb-2 mb-8">Publications</h2>
      <div className="space-y-4">
        {pubs.map((pub, index) => (
          <PublicationItem key={index} {...pub} darkMode={darkMode} />
        ))}
      </div>
    </section>
  );
}