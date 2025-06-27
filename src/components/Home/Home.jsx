import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
    <div className="w-full min-h-screen pt-24 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 px-4 flex flex-col items-center justify-start">
      <div className="text-center max-w-3xl space-y-6">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white">
          Ayush Singh Kaushik
        </h1>

        {/* Intro */}
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          A passionate full-stack developer currently exploring backend technologies.<br />
          Consistently building, learning, and sharing through projects and writing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://medium.com/@ayushsinghkaushik111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-700 shadow-lg text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            📜 Read My Articles
          </a>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-transparent border-2 border-orange-700 text-orange-700 dark:text-orange-400 dark:border-orange-400 rounded-lg font-semibold hover:bg-orange-100 dark:hover:bg-gray-800 transition"
          >
            📞 Contact Me
          </button>
        </div>
      </div>
    </div>
    </Motion.div>
  );
}
