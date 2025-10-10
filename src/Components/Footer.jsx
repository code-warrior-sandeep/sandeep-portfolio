import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {year} <span className="font-semibold text-blue-600 dark:text-blue-400">Sandeep</span>. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="https://github.com/code-warrior-sandeep" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">🧑‍💻 GitHub</a>
          <a href="https://www.linkedin.com/in/code-warrior-sandeep" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">💼 LinkedIn</a>
          <a href="mailto:mrsandeepsinghunique@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">📧 Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
