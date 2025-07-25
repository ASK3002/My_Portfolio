import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import Footer from '../Footer/Footer.jsx';
import { FiEye, FiDownload } from 'react-icons/fi';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="w-full min-h-screen pt-24 px-4 flex flex-col items-center justify-start">
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
              className="px-6 py-3 bg-orange-700 shadow-lg text-white rounded-lg font-semibold  dark:bg-blue-400/50 hover:bg-orange-600 transition"
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

          {/* Resume Section */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-lg border-2 border-blue-700 font-semibold text-gray-800 dark:border-blue-400 dark:text-white px-6 py-3 rounded-xl">
            📄 My Resume
          </span>

            {/* View Button */}
            <a
              href="https://drive.google.com/file/d/1a6qU0VBoPqM-50QjaKeaOg0p-R_MIlow/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
              title="View Resume"
            >
              <FiEye className="w-5 h-5" />
            </a>

            {/* Download Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1a6qU0VBoPqM-50QjaKeaOg0p-R_MIlow"
              download
              className="p-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition"
              title="Download Resume"
            >
              <FiDownload className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-40">
        <Footer />
      </div>
    </Motion.div>
  );
}
