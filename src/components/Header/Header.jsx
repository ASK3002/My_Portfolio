import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUser,
  FaBars,
  FaTimes,
  FaDraftingCompass
} from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/Skills', label: 'Skills', icon: FaCogs },
    { path: '/Github', label: 'Projects', icon: FaProjectDiagram },
    { path: '/DsaHome', label: 'DSA', icon: FaDraftingCompass },
    { path: '/about', label: 'About', icon: FaUser },
  ];

  const fontStyle = { fontFamily: "'Inter', 'Montserrat', sans-serif" };

  return (
    <header className="sticky z-50 top-0 bg-white dark:bg-gray-900" style={fontStyle}>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex items-center justify-between w-full">
          {/* Logo + Name */}
          <div className="flex items-center space-x-3 pl-2" style={fontStyle}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/617/232/non_2x/ask-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg"
              className="h-16 w-16 rounded-full object-cover"
              alt="Logo"
            />
            <span className="text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white" style={fontStyle}>
              Ayush Singh Kaushik
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6" style={fontStyle}>
            {navLinks.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className={({ isActive }) =>
                  `text-xl px-3 py-2 rounded transition duration-200 ${
                    isActive
                      ? 'bg-orange-700/50 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                  }`
                }
                style={fontStyle}
              >
                <nav.icon />
              </NavLink>
            ))}
          </div>

          {/* Desktop Socials + Toggle */}
          <div className="hidden lg:flex items-center space-x-4 pr-2" style={fontStyle}>
            <a
              href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400" />
            </a>
            <a
              href="https://github.com/ASK3002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400" />
            </a>
            <a
              href="https://medium.com/@ayushsinghkaushik111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 dark:text-gray-300"
            style={fontStyle}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-3" style={fontStyle}>
            {/* Links */}
            <div className="flex flex-col items-center space-y-4">
              {navLinks.map((nav) => (
                <NavLink
                  key={nav.path}
                  to={nav.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl p-2 rounded flex items-center gap-2 ${
                      isActive
                        ? 'bg-orange-700/50 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                    }`
                  }
                  style={fontStyle}
                >
                  <nav.icon />
                  <span>{nav.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-300 dark:border-gray-600">
              <a
                href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/"
                target="_blank"
                rel="noopener noreferrer"
                style={fontStyle}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ASK3002"
                target="_blank"
                rel="noopener noreferrer"
                style={fontStyle}
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com/@ayushsinghkaushik111"
                target="_blank"
                rel="noopener noreferrer"
                style={fontStyle}
              >
                <FaMedium className="w-5 h-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
