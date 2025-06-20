import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUser,
} from 'react-icons/fa';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Header() {
  return (
    <header className=" sticky z-50 top-0 bg-white dark:bg-gray-900">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between w-full">

          {/* Logo + Name */}
          <div className="flex items-center space-x-3 pl-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/617/232/non_2x/ask-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg"
              className="h-20 w-20 rounded-full object-cover"
              alt="Logo"
            />
            <span className="text-xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">
              Ayush Singh Kaushik
            </span>
          </div>

          {/* Center Nav: Icons only */}
          <div className="hidden lg:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl px-3 py-2 rounded transition duration-200 ${
                  isActive
                    ? 'bg-orange-700/50 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                }`
              }
            >
              <FaHome />
            </NavLink>
            <NavLink
              to="/Skills"
              className={({ isActive }) =>
                `text-xl px-3 py-2 rounded transition duration-200 ${
                  isActive
                    ? 'bg-orange-700/50 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                }`
              }
            >
              <FaCogs />
            </NavLink>
            <NavLink
              to="/Github"
              className={({ isActive }) =>
                `text-xl px-3 py-2 rounded transition duration-200 ${
                  isActive
                    ? 'bg-orange-700/50 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                }`
              }
            >
              <FaProjectDiagram />
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl px-3 py-2 rounded transition duration-200 ${
                  isActive
                    ? 'bg-orange-700/50 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400'
                }`
              }
            >
              <FaUser />
            </NavLink>
          </div>

          {/* Right: Social Icons + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4 pr-2">
            <a
              href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ASK3002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://medium.com/@ayushsinghkaushik111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-400"
            >
              <FaMedium className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
