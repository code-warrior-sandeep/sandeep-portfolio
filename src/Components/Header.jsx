import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, } from "lucide-react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, []);

  // Sync dark mode with HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center px-5 md:px-10 py-4 shadow-md sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 transition-all duration-300">
      {/* 🧑‍💻 Logo / Name */}
      <div className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide flex items-center gap-2">
        <span className="text-blue-600 dark:text-blue-400">👨‍💻</span> Sandeep
      </div>

      {/* 🌐 Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 items-center font-medium text-gray-700 dark:text-gray-200">
        <Link to="/" className="hover:text-blue-500 transition">🏠 Home</Link>
        <Link to="/about" className="hover:text-blue-500 transition">🙋‍♂️ About</Link>
        <Link to="/projects" className="hover:text-blue-500 transition">💻 Projects</Link>
        <Link to="/contact" className="hover:text-blue-500 transition">📬 Contact</Link>
      </nav>

      {/* 🌙 Theme & Mobile Menu Controls */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-yellow-400" />
          ) : (
            <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
      </div>

      {/* 📱 Mobile Slide-Out Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 flex flex-col gap-5 md:hidden transition-all z-50">
          <Link
            to="/"
            className="hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            🏠 Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            🙋‍♂️ About
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            💻 Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            📬 Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
