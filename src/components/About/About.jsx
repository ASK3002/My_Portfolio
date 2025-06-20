import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
    <div className="w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 min-h-screen py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="lg:w-1/2 w-full bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition">
          <h2 className="text-4xl font-bold text-orange-800 dark:text-orange-300 mb-6">
            👋 About Me
          </h2>
          <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed mb-4">
            I'm a second-year B.Tech Computer Science student at IIITDM Jabalpur with a strong academic record (CPI: 9.5).
            I enjoy building web projects using HTML, CSS, JavaScript, and React, and I'm currently learning backend development with Node.js and MongoDB.
            Next on my roadmap is diving into Next.js to enhance my full-stack skills.
          </p>
          <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
            Beyond tech, I'm a creative communicator with a background in leadership, debate, and art competitions.
            I believe in consistency, curiosity, and growing step by step — both as a learner and as a person.
            Let’s connect and learn together! 🚀
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Curdie_went_on_after_her%2C_flashing_his_torch_about..jpg"
            alt="Ayush"
            className="rounded-full w-60 h-60 object-cover border-4 border-orange-300 shadow-lg"
          />
        </div>
      </div>
    </div>
    </motion.div>
  );
}
