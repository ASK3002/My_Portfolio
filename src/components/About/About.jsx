import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion'; // We still need this for the main wrapper
import {
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaAward,
  FaUniversity,
  FaUserFriends,
  FaLightbulb,
  FaPhoneAlt,
  FaSmile
} from 'react-icons/fa';
import { SiCodechef, SiCodeforces } from 'react-icons/si';

const About = () => {

  // I have removed the 'cardVariants' constant as it's no longer needed.

  const baseCardStyles = "rounded-2xl p-6 shadow-lg flex flex-col items-center justify-start text-center transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 h-full";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      {/* This is the ONLY animated element, which slides the whole page up */}
      <Motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen px-4 py-10 pb-12 flex flex-col items-center bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >

        {/* Changed to a regular h1 (no animation) */}
        <h1
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-7"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          About Me
        </h1>

        {/* Changed to a regular div (no animation) */}
        <div
          className="max-w-6xl w-full mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Changed all cards from Motion.div to div */}
            <div
              className={`${baseCardStyles} bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200`}
            >
              <FaUniversity className="text-4xl mb-3 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Education</h3>
              <p className="text-sm">
                B.Tech in CSE at IIITDM Jabalpur (CPI 8.7). Building a strong foundation in core subjects like Data Structures, OS, DBMS, and Computer Networks.
              </p>
            </div>

            <div
              className={`${baseCardStyles} bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-200`}
            >
              <FaLaptopCode className="text-4xl mb-3 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Dev Interests</h3>
              <p className="text-sm">
                Full-Stack MERN Developer skilled in building end-to-end web applications using React.js, Node.js, Express, MongoDB, along with Firebase integration, JWT authentication, and OAuth-based authorization.
              </p>
            </div>

            <div
              className={`${baseCardStyles} bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-200`}
            >
              <FaAward className="text-4xl mb-3 text-purple-600 dark:text-purple-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Leadership & Oratory</h3>
              <p className="text-sm">
                Experienced in leadership roles like Head Boy (x2). A confident public speaker, winning multiple debate, speech, and extempore competitions.
              </p>
            </div>

            <div
              className={`${baseCardStyles} bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-200`}
            >
              <FaLightbulb className="text-4xl mb-3 text-pink-600 dark:text-pink-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Personal Outlook</h3>
              <p className="text-sm">
                I believe in "learning by doing" and value consistency over competition. I'm always looking for opportunities to improve both technically and personally.
              </p>
            </div>

            {/* Changed to a regular div (no animation) */}
            <div
              className="flex items-center justify-center order-first md:order-none"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Curdie_went_on_after_her%2C_flashing_his_torch_about..jpg" // Your URL
                alt="Ayush Singh Kaushik"
                className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
              />
            </div>

            <div
              className={`${baseCardStyles} bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-200`}
            >
              <FaCode className="text-4xl mb-3 text-red-600 dark:text-red-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Key Skills</h3>
              <p className="text-sm">
                <strong>Languages:</strong> C++, Python, JS, Java
                <br />
                <strong>Web:</strong> React, Node.js, Express.js
                <br />
                <strong>DBs:</strong> MySQL, MongoDB
                <br />
                <strong>Tools:</strong> Git, GitHub, Docker (Basics)
              </p>
            </div>

            <div
              className={`${baseCardStyles} bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-200`}
            >
              <FaUserFriends className="text-4xl mb-3 text-orange-600 dark:text-orange-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Coding Profiles</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://github.com/ASK3002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://leetcode.com/u/A_S_K_Ayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                >
                  <FaCode /> LeetCode
                </a>
                <a
                  href="https://www.codechef.com/users/a_s_k_ayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                >
                  <SiCodechef /> CodeChef
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                >
                  <SiCodeforces /> Codeforces
                </a>
              </div>
            </div>

            <div
              className={`${baseCardStyles} bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-200`}
            >
              <FaSmile className="text-4xl mb-3 text-yellow-600 dark:text-yellow-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Hobbies & Interests</h3>
              <p className="text-sm">
                Playing sports (cricket, football,etc), watching global movies/series, reading novels, and sharing views on new topics with friends,family & Others.
              </p>
            </div>

            <div
              className={`${baseCardStyles} bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200 justify-center`}
            >
              <FaPhoneAlt className="text-4xl mb-3 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Get In Touch</h3>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-green-600 text-green-700 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition text-md font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                📞 Contact Me
              </Link>
            </div>

          </div>
        </div>
      </Motion.div>
    </>
  );
};

export default About;