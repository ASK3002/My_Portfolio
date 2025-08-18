import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Google Fonts - ideally only once in your app */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen w-full bg-gradient-to-tr from-orange-50 to-yellow-100 dark:from-gray-950 dark:to-gray-900 px-6 pt-24 pb-12 flex flex-col items-center justify-between"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="max-w-5xl w-full text-center space-y-8">
          {/* Heading */}
          <h1
            className="text-5xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Hello, I’m{' '}
            <span className="text-orange-600 dark:text-orange-400">Ayush Singh Kaushik</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
            Full-stack Developer | Problem Solver | Tech Explorer
          </p>

          {/* Gradient Divider */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 dark:from-orange-400 dark:to-yellow-300 rounded-full" />

          {/* Description */}
          <p
            className="text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I design and develop sleek, performant websites. Currently diving deep into dsa, building strong projects, and sharing knowledge through writing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://medium.com/@ayushsinghkaushik111"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 rounded-lg shadow-lg transition text-md font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              📜 Read My Articles
            </a>

            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-orange-600 text-orange-700 dark:border-orange-400 dark:text-orange-400 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-800 transition text-md font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              📞 Contact Me
            </Link>
          </div>

          {/* Resume Buttons */}
          <div className="mt-12 flex items-center justify-center gap-5">
            <span
              className="text-md font-semibold px-5 py-2.5 bg-white/40 dark:bg-white/10 backdrop-blur border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              📄 My Resume
            </span>

            <a
              href="https://drive.google.com/file/d/1K9xnnDwBmCd2EL9M05Kpn9WAVWN7O5Hn/view?usp=sharing"
              target="_blank"
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
              title="View Resume"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <FiEye size={20} />
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1K9xnnDwBmCd2EL9M05Kpn9WAVWN7O5Hn"
              download
              className="p-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition"
              title="Download Resume"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <FiDownload size={20} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full mt-20">
          <Footer />
        </div>
      </motion.section>
    </>
  );
}
