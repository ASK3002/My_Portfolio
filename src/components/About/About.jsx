import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import { containerVariants, itemVariants } from '../PageTransition/PageTransition';
import './About.css';

const About = () => {
  const aboutCards = [
    {
      icon: <FaUniversity />,
      title: "Education",
      content: "B.Tech in CSE at IIITDM Jabalpur (CPI 8.7). Building a strong foundation in core subjects like Data Structures, OS, DBMS, and Computer Networks.",
      color: "blue"
    },
    {
      icon: <FaLaptopCode />,
      title: "Dev Interests",
      content: "Full-Stack MERN Developer skilled in building end-to-end web applications using React.js, Node.js, Express, MongoDB, along with Firebase integration, JWT authentication, and OAuth-based authorization.",
      color: "indigo"
    },
    {
      icon: <FaAward />,
      title: "Leadership & Oratory",
      content: "Experienced in leadership roles like Head Boy (x2). A confident public speaker, winning multiple debate, speech, and extempore competitions.",
      color: "purple"
    },
    {
      icon: <FaLightbulb />,
      title: "Personal Outlook",
      content: "I believe in 'learning by doing' and value consistency over competition. I'm always looking for opportunities to improve both technically and personally.",
      color: "pink"
    },
    {
      icon: <FaCode />,
      title: "Key Skills",
      content: "Languages: C++, Python, JS, Java | Web: React, Node.js, Express.js | DBs: MySQL, MongoDB | Tools: Git, GitHub, Docker (Basics)",
      color: "red"
    },
    {
      icon: <FaUserFriends />,
      title: "Coding Profiles",
      content: "Active on GitHub, LeetCode, CodeChef, and Codeforces with consistent problem-solving and competitive programming.",
      color: "orange",
      links: [
        { href: "https://github.com/ASK3002", icon: <FaGithub />, label: "GitHub" },
        { href: "https://leetcode.com/u/A_S_K_Ayush", icon: <FaCode />, label: "LeetCode" },
        { href: "https://www.codechef.com/users/a_s_k_ayush", icon: <SiCodechef />, label: "CodeChef" },
        { href: "https://codeforces.com/profile/a_s_k_ayush", icon: <SiCodeforces />, label: "Codeforces" }
      ]
    },
    {
      icon: <FaSmile />,
      title: "Hobbies & Interests",
      content: "Playing sports (cricket, football, etc), watching global movies/series, reading novels, and sharing views on new topics with friends, family & Others.",
      color: "yellow"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Get In Touch",
      content: "Let's connect and discuss opportunities, collaborations, or just have a great conversation!",
      color: "green",
      action: <Link to="/contact" className="contact-btn">📞 Contact Me</Link>
    }
  ];

  return (
    <motion.section
      className="about-section"
      variants={containerVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="about-container">
        <motion.h1 className="about-title gradient-text" variants={itemVariants}>
          About Me
        </motion.h1>

        <motion.div className="about-content" variants={itemVariants}>
          <div className="about-grid">
            {/* Profile Image - Center Position */}
            <motion.div className="profile-section" variants={itemVariants}>
              <div className="profile-image-wrapper">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Curdie_went_on_after_her%2C_flashing_his_torch_about..jpg"
                  alt="Ayush Singh Kaushik"
                  className="profile-image"
                />
                <div className="profile-glow" />
              </div>
            </motion.div>

            {/* About Cards */}
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className={`about-card about-card-${card.color}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="card-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-content">{card.content}</p>
                
                {card.links && (
                  <div className="card-links">
                    {card.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        {link.icon} {link.label}
                      </a>
                    ))}
                  </div>
                )}
                
                {card.action && (
                  <div className="card-action">
                    {card.action}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;