import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
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

        {/* CTA Cards */}
        <motion.div 
          className="hero-cards"
          variants={itemVariants}
        >
          {/* Read My Articles Card */}
          <a
            href="https://medium.com/@ayushsinghkaushik111"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-card"
          >
            <div className="card-icon">📜</div>
            <div className="card-title">Read My Articles</div>
          </a>

          {/* Contact Me Card */}
          <Link
            to="/contact"
            className="hero-card"
          >
            <div className="card-icon" style={{ color:'#65a765' }}><FaPhoneAlt /></div>
            <div className="card-title">Contact Me</div>
          </Link>

          {/* My Resume Card */}
          <a
            href="https://drive.google.com/file/d/19l_V2Oa62epyFrp3K0IoKX_0CqaDhrV1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-card"
          >
            <div className="card-icon">📄</div>
            <div className="card-title">My Resume</div>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="hero-footer">
        <Footer />
      </div>
    </motion.section>
  );
}
