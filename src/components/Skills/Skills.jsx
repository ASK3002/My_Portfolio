import React from 'react';
import {
  FaCode,
  FaTools,
  FaJava,
  FaPython,
  FaReact,
  FaNode,
  FaGit,
  FaDocker,
  FaMicrosoft,
  FaCloud,
  FaEnvelope,
  FaGithub,
  FaServer,
  FaUserShield,
  FaAws,
} from 'react-icons/fa';

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiReplit,
  SiVite,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiGooglecloud,
} from 'react-icons/si';

import { TbChartDots, TbApi } from 'react-icons/tb';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../PageTransition/PageTransition';
import './Skills.css';

const skillsData = {
  languages: [
    { name: 'C++', icon: <SiCplusplus className="skill-icon skill-icon-cpp" />, level: 'Advanced', darkIcon: false },
    { name: 'Python', icon: <FaPython className="skill-icon skill-icon-python" />, level: 'Advanced', darkIcon: false },
    { name: 'C', icon: <span className="skill-icon skill-icon-c">C</span>, level: 'Intermediate', darkIcon: false },
    { name: 'Java', icon: <FaJava className="skill-icon skill-icon-java" />, level: 'Intermediate', darkIcon: false },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon skill-icon-js" />, level: 'Advanced', darkIcon: false },
    { name: 'TypeScript', icon: <SiTypescript className="skill-icon skill-icon-typescript" />, level: 'Intermediate', darkIcon: false },
    { name: 'PHP', icon: <span className="skill-icon skill-icon-php">PHP</span>, level: 'Intermediate', darkIcon: false },
    { name: 'SQL', icon: <span className="skill-icon skill-icon-sql">SQL</span>, level: 'Advanced', darkIcon: false },
  ],
  frameworks: [
    { name: 'React.js', icon: <FaReact className="skill-icon skill-icon-react" />, level: 'Advanced', darkIcon: false },
    { name: 'Redux Toolkit', icon: <SiRedux className="skill-icon skill-icon-redux" />, level: 'Intermediate', darkIcon: false },
    { name: 'Next.js', icon: <SiNextdotjs className="skill-icon skill-icon-nextjs" />, level: 'Intermediate', darkIcon: true },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="skill-icon skill-icon-tailwind" />, level: 'Advanced', darkIcon: false },
    { name: 'Node.js', icon: <FaNode className="skill-icon skill-icon-node" />, level: 'Advanced', darkIcon: false },
    { name: 'Express.js', icon: <SiExpress className="skill-icon skill-icon-express" />, level: 'Advanced', darkIcon: true },
    { name: 'Vite', icon: <SiVite className="skill-icon skill-icon-vite" />, level: 'Intermediate', darkIcon: false },
  ],
  backend: [
    { name: 'REST APIs', icon: <TbApi className="skill-icon skill-icon-rest" />, level: 'Advanced', darkIcon: false },
    { name: 'Authentication', icon: <FaUserShield className="skill-icon skill-icon-auth" />, level: 'Intermediate', darkIcon: false },
    { name: 'MongoDB', icon: <SiMongodb className="skill-icon skill-icon-mongodb" />, level: 'Intermediate', darkIcon: false },
    { name: 'MySQL', icon: <SiMysql className="skill-icon skill-icon-mysql" />, level: 'Advanced', darkIcon: false },
    { name: 'PostgreSQL', icon: <SiPostgresql className="skill-icon skill-icon-postgresql" />, level: 'Intermediate', darkIcon: false },
  ],
  ai: [
    { name: 'NumPy', icon: <SiNumpy className="skill-icon skill-icon-numpy" />, level: 'Intermediate', darkIcon: true },
    { name: 'Pandas', icon: <SiPandas className="skill-icon skill-icon-pandas" />, level: 'Intermediate', darkIcon: true },
    { name: 'Matplotlib', icon: <TbChartDots className="skill-icon skill-icon-matplotlib" />, level: 'Intermediate', darkIcon: false },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="skill-icon skill-icon-scikitlearn" />, level: 'Intermediate', darkIcon: false },
    { name: 'TensorFlow', icon: <SiTensorflow className="skill-icon skill-icon-tensorflow" />, level: 'Intermediate', darkIcon: false },
  ],
  cloud: [
    { name: 'Docker', icon: <FaDocker className="skill-icon skill-icon-docker" />, level: 'Intermediate', darkIcon: false },
    { name: 'AWS', icon: <FaAws className="skill-icon skill-icon-aws" />, level: 'Intermediate', darkIcon: false },
    { name: 'Google Cloud', icon: <SiGooglecloud className="skill-icon skill-icon-gcp" />, level: 'Intermediate', darkIcon: false },
  ],
  tools: [
    { name: 'Git', icon: <FaGit className="skill-icon skill-icon-git" />, level: 'Advanced', darkIcon: false },
    { name: 'GitHub', icon: <FaGithub className="skill-icon skill-icon-github" />, level: 'Advanced', darkIcon: false },
    { name: 'VS Code', icon: <FaCode className="skill-icon skill-icon-vscode" />, level: 'Advanced', darkIcon: false },
    { name: 'Postman', icon: <SiPostman className="skill-icon skill-icon-postman" />, level: 'Advanced', darkIcon: false },
    { name: 'Replit', icon: <SiReplit className="skill-icon skill-icon-replit" />, level: 'Intermediate', darkIcon: false },
    { name: 'Cloudinary', icon: <FaCloud className="skill-icon skill-icon-cloudinary" />, level: 'Intermediate', darkIcon: false },
    { name: 'EmailJS', icon: <FaEnvelope className="skill-icon skill-icon-emailjs" />, level: 'Intermediate', darkIcon: false },
    { name: 'Microsoft Office', icon: <FaMicrosoft className="skill-icon skill-icon-office" />, level: 'Advanced', darkIcon: false },
  ],
};

const categoryConfig = {
  languages: { title: 'Languages', icon: <FaCode className="category-icon" /> },
  frameworks: { title: 'Frameworks & Libraries', icon: <FaReact className="category-icon" /> },
  backend: { title: 'Backend & Databases', icon: <FaServer className="category-icon" /> },
  ai: { title: 'AI / Machine Learning', icon: <TbChartDots className="category-icon" /> },
  cloud: { title: 'Cloud & DevOps', icon: <FaDocker className="category-icon" /> },
  tools: { title: 'Tools & Technologies', icon: <FaTools className="category-icon" /> },
};

const SkillCard = ({ item }) => (
  <motion.div
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
      <div className={item.darkIcon ? "dark-icon-bg" : ""}>
        {item.icon}
      </div>
    </div>
    <span className="skill-name">
      {item.name}
    </span>
    <div className="skill-details">
      <span className="skill-level">{item.level}</span>
    </div>
  </motion.div>
);

const CategorySection = ({ categoryKey, skills, config }) => (
  <motion.div className="skills-category" variants={itemVariants}>
    <div className="category-header">
      {config.icon}
      <h2 className="category-title">
        {config.title}
      </h2>
    </div>

    <div className="skills-grid">
      {skills.map((item, index) => (
        <SkillCard key={index} item={item} />
      ))}
    </div>
  </motion.div>
);

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

        {/* Categories */}
        {Object.keys(skillsData).map((categoryKey) => (
          <CategorySection
            key={categoryKey}
            categoryKey={categoryKey}
            skills={skillsData[categoryKey]}
            config={categoryConfig[categoryKey]}
          />
        ))}
      </div>
    </motion.section>
  );
}
