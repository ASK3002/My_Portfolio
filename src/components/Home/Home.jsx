import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        {/* Main Heading */}
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name gradient-text">Ayush Singh Kaushik</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Full-stack Developer | Problem Solver | Tech Explorer
        </motion.p>

        {/* Animated Divider */}
        <motion.div 
          className="hero-divider"
          variants={itemVariants}
        />

        {/* Description */}
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          I design and develop sleek, performant websites. Currently diving deep into dsa, building strong projects, and sharing knowledge through writing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <a
            href="https://medium.com/@ayushsinghkaushik111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            📜 Read My Articles
          </a>

          <Link
            to="/contact"
            className="btn-secondary"
          >
            📞 Contact Me
          </Link>
        </motion.div>

        {/* Resume Section */}
        <motion.div 
          className="resume-section"
          variants={itemVariants}
        >
          <div className="resume-label">
            📄 My Resume
          </div>
          
          <div className="resume-actions">
            <a
              href="https://drive.google.com/file/d/19l_V2Oa62epyFrp3K0IoKX_0CqaDhrV1/view?usp=sharing"
              target="_blank"
              className="resume-btn resume-btn-view"
              title="View Resume"
            >
              <FiEye size={20} />
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=19l_V2Oa62epyFrp3K0IoKX_0CqaDhrV1"
              download
              className="resume-btn resume-btn-download"
              title="Download Resume"
            >
              <FiDownload size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="hero-footer">
        <Footer />
      </div>
    </motion.section>
  );
}
