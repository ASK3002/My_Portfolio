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

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../PageTransition/PageTransition';
import './Skills.css';

const programmingStack = [
  { name: 'C++', icon: <SiCplusplus className="skill-icon skill-icon-cpp" />, level: 'Advanced', category: 'Programming' },
  { name: 'Python', icon: <FaPython className="skill-icon skill-icon-python" />, level: 'Advanced', category: 'Programming' },
  { name: 'C', icon: <span className="skill-icon skill-icon-c">C</span>, level: 'Intermediate', category: 'Programming' },
  { name: 'Java', icon: <FaJava className="skill-icon skill-icon-java" />, level: 'Intermediate', category: 'Programming' },
  { name: 'JavaScript', icon: <SiJavascript className="skill-icon skill-icon-js" />, level: 'Advanced', category: 'Frontend' },
  { name: 'PHP', icon: <FaPhp className="skill-icon skill-icon-php" />, level: 'Intermediate', category: 'Backend' },
  { name: 'SQL', icon: <span className="skill-icon skill-icon-sql">SQL</span>, level: 'Advanced', category: 'Database' },
  { name: 'ReactJS', icon: <FaReact className="skill-icon skill-icon-react" />, level: 'Advanced', category: 'Frontend' },
  { name: 'Node.js', icon: <FaNode className="skill-icon skill-icon-node" />, level: 'Advanced', category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress className="skill-icon skill-icon-express" />, level: 'Advanced', category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb className="skill-icon skill-icon-mongodb" />, level: 'Intermediate', category: 'Database' },
  { name: 'MySQL', icon: <SiMysql className="skill-icon skill-icon-mysql" />, level: 'Advanced', category: 'Database' },
  { name: 'Vite', icon: <SiVite className="skill-icon skill-icon-vite" />, level: 'Intermediate', category: 'Tools' },
  { name: 'Redux', icon: <SiRedux className="skill-icon skill-icon-redux" />, level: 'Intermediate', category: 'Frontend' },
];

const toolsAndTechnologies = [
  { name: 'Git', icon: <FaGit className="skill-icon skill-icon-git" />, level: 'Advanced', category: 'Version Control' },
  { name: 'Docker', icon: <FaDocker className="skill-icon skill-icon-docker" />, level: 'Intermediate', category: 'DevOps' },
  { name: 'VS Code', icon: <FaCode className="skill-icon skill-icon-vscode" />, level: 'Advanced', category: 'IDE' },
  { name: 'Postman', icon: <SiPostman className="skill-icon skill-icon-postman" />, level: 'Advanced', category: 'API Testing' },
  { name: 'Replit', icon: <SiReplit className="skill-icon skill-icon-replit" />, level: 'Intermediate', category: 'IDE' },
  { name: 'Microsoft', icon: <FaMicrosoft className="skill-icon skill-icon-microsoft" />, level: 'Advanced', category: 'Office' },
  { name: 'Cloudinary', icon: <FaCloud className="skill-icon skill-icon-cloud" />, level: 'Intermediate', category: 'Cloud' },
  { name: 'EmailJS', icon: <FaEnvelope className="skill-icon skill-icon-email" />, level: 'Intermediate', category: 'Email Service' },
];

export default function Skills() {
  return (
    <motion.section
      className="skills-section"
      variants={containerVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="skills-container">
        {/* Header */}
        <motion.div className="skills-header" variants={itemVariants}>
          <h1 className="skills-title gradient-text">
            Technical Skills
          </h1>
          <p className="skills-subtitle">
            A versatile developer across frontend, backend, databases, and tools.
          </p>
        </motion.div>

        {/* Programming Stack */}
        <motion.div className="skills-category" variants={itemVariants}>
          <div className="category-header">
            <FaCode className="category-icon" />
            <h2 className="category-title">
              Programming Stack
            </h2>
          </div>

          <div className="skills-grid">
            {programmingStack.map((item, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="skill-icon-wrapper">
                  {item.icon}
                </div>
                <span className="skill-name">
                  {item.name}
                </span>
                <div className="skill-details">
                  <span className="skill-level">{item.level}</span>
                  <span className="skill-category">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Tech */}
        <motion.div className="skills-category" variants={itemVariants}>
          <div className="category-header">
            <FaTools className="category-icon" />
            <h2 className="category-title">
              Tools & Technologies
            </h2>
          </div>

          <div className="skills-grid">
            {toolsAndTechnologies.map((item, index) => (
              <motion.div
                key={index}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="skill-icon-wrapper">
                  {item.icon}
                </div>
                <span className="skill-name">
                  {item.name}
                </span>
                <div className="skill-details">
                  <span className="skill-level">{item.level}</span>
                  <span className="skill-category">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
