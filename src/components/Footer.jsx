import React from 'react'

export default function Footer({darkMode}) {
  return (
    <footer className={`mt-10 pb-10 border-t border-gray-200 pt-8 text-center text-sm ${darkMode ? ' text-gray-400 ' : ' text-gray-500 '} font-light`}>
      <p>© 2026 Hisham Bhatti. All rights reserved.</p>
      <p className="mt-2">
        Built with <span className="text-sky-500">React</span>,{" "}
        <span className="text-teal-500">Tailwind CSS</span>, and{" "}
        <span className="text-purple-500">Vite</span>.
      </p>
      <div className="mt-4">
        <a
          href="https://github.com/hishambhatti/hishambhatti.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className={`${darkMode ? ' hover:text-gray-200 ' : ' hover:text-gray-800 '} transition-colors inline-flex items-center gap-2`}
        >
          <i className="fa-brands fa-github text-lg"></i>
          View Source Code
        </a>
      </div>
    </footer>
  )
}
