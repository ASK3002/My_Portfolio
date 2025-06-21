import React from 'react';
import {
  FaCode,
  FaTools,
  FaJava,
  FaPython,
  FaReact,
  FaNode,
  FaPhp,
  FaGit,
  FaDocker,
  FaMicrosoft,
} from 'react-icons/fa';

import {
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiReplit,
  SiVite,
} from 'react-icons/si';

import { motion as Motion } from 'framer-motion';

const programmingStack = [
  { name: 'C++', icon: <SiCplusplus className="text-blue-600 w-8 h-8" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500 w-8 h-8" /> },
  { name: 'C', icon: <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">C</span> },
  { name: 'Java', icon: <FaJava className="text-red-600 w-8 h-8" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-8 h-8" /> },
  { name: 'PHP', icon: <FaPhp className="text-indigo-700 w-8 h-8" /> },
  { name: 'SQL', icon: <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">SQL</span> },
  { name: 'ReactJS', icon: <FaReact className="text-cyan-500 w-8 h-8" /> },
  { name: 'Node.js', icon: <FaNode className="text-green-600 w-8 h-8" /> },
  { name: 'Express.js', icon: <SiExpress className="text-black dark:text-white w-8 h-8" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700 w-8 h-8" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500 w-8 h-8" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 w-8 h-8" /> },
];

const toolsAndTechnologies = [
  { name: 'Git', icon: <FaGit className="text-red-500 w-8 h-8" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400 w-8 h-8" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-600 w-8 h-8" /> }, // Fallback for VS Code
  { name: 'Postman', icon: <SiPostman className="text-orange-500 w-8 h-8" /> },
  { name: 'Replit', icon: <SiReplit className="text-yellow-400 w-8 h-8" /> },
  { name: 'Microsoft', icon: <FaMicrosoft className="text-blue-700 w-8 h-8" /> },
];

export default function Skills() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A versatile developer with experience across frontend, backend, databases, and dev tools. Here's a snapshot of my stack:
          </p>

          {/* Programming Stack */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaCode className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Programming Stack</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {programmingStack.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition"
              >
                {item.icon}
                <span className="mt-3 text-md font-medium text-gray-700 dark:text-gray-100">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaTools className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Tools & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {toolsAndTechnologies.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition"
              >
                {item.icon}
                <span className="mt-3 text-md font-medium text-gray-700 dark:text-gray-100">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
