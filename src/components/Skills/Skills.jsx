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
  FaCloud,
  FaEnvelope,
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
  SiRedux,
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
  { name: 'Redux', icon: <SiRedux className="text-purple-600 w-8 h-8" /> },
];

const toolsAndTechnologies = [
  { name: 'Git', icon: <FaGit className="text-red-500 w-8 h-8" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400 w-8 h-8" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-600 w-8 h-8" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500 w-8 h-8" /> },
  { name: 'Replit', icon: <SiReplit className="text-yellow-400 w-8 h-8" /> },
  { name: 'Microsoft', icon: <FaMicrosoft className="text-blue-700 w-8 h-8" /> },
  { name: 'Cloudinary', icon: <FaCloud className="text-indigo-400 w-8 h-8" /> },
  { name: 'EmailJS', icon: <FaEnvelope className="text-pink-500 w-8 h-8" /> },
];

export default function Skills() {
  return (
    <>
      {/* Google Fonts link - add once globally ideally */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      <Motion.section
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen w-full bg-gradient-to-tr from-yellow-50 to-orange-100 dark:from-gray-950 dark:to-gray-900 px-6 pt-24 pb-12"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Header */}
          <div>
            <h1
              className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Technical Skills
            </h1>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A versatile developer across frontend, backend, databases, and tools.
            </p>
          </div>

          {/* Programming Stack */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaCode className="text-blue-600 text-2xl" />
              <h2
                className="text-3xl font-bold text-gray-800 dark:text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Programming Stack
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {programmingStack.map((item, index) => (
                <Motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex flex-col items-center justify-center p-6 bg-white/40 dark:bg-white/10 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
                >
                  {item.icon}
                  <span className="mt-3 text-md font-medium text-gray-800 dark:text-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.name}
                  </span>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Tech */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-6 mt-10">
              <FaTools className="text-blue-600 text-2xl" />
              <h2
                className="text-3xl font-bold text-gray-800 dark:text-white"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Tools & Technologies
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {toolsAndTechnologies.map((item, index) => (
                <Motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex flex-col items-center justify-center p-6 bg-white/40 dark:bg-white/10 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-xl shadow-md"
                >
                  {item.icon}
                  <span className="mt-3 text-md font-medium text-gray-800 dark:text-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.name}
                  </span>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </Motion.section>
    </>
  );
}
