import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { containerVariants, itemVariants } from '../PageTransition/PageTransition';
import './Projects.css';

const deployedLinks = {
  "Basic_React_Projects": "https://ask3002.github.io/Basic_React_Projects/",
  "BASIC_PROJECTS_HTML_CSS_JS": "https://ask3002.github.io/BASIC_PROJECTS_HTML_CSS_JS/",
  "My_Portfolio": "https://ayushsinghkaushik-portfolio.netlify.app/",
  "RECO-Resume-CoverLetterBuilder": "https://reco-resume-cover-letter-builder.vercel.app/",
  "SpendSense": "https://spendsense-7a5q.onrender.com/",
  "AI-Powered-Operational-Efficiency": "https://ai-powered-operational-efficiency.vercel.app/",
  "WHTMark": "https://whtmark-1.onrender.com"
};

// Manual descriptions fallback for repositories with null descriptions from GitHub
const manualDescriptions = {
  "TrustHire": "A hiring platform connecting employers with trusted candidates. Features include job posting, candidate profiles, and secure hiring workflows.",
  "hotel-booking-app": "A comprehensive hotel booking application with room search, booking management, and payment integration.",
  "ai-agentica": "An AI-powered agent framework for building intelligent automation systems.",
  "Finova": "A financial management application for tracking expenses, budgets, and investments."
};

// Featured projects in specific order
const mainProjects = [
  "TrustHire",
  "AI-Powered-Operational-Efficiency",
  "WHTMark",
  "RECO-Resume-CoverLetterBuilder",
  "hotel-booking-app",
  "SpendSense",
  "My_Portfolio"
];

// NEW: Projects you are currently working on
const workingOnProjects = ["ai-agentica", "Finova"];

function Github() {
  const repos = useLoaderData();

  // Map over mainProjects to preserve order and find matching repos
  const mainRepos = mainProjects
    .map(name => repos.find(repo => repo.name === name))
    .filter(Boolean);

  // Working on projects in fixed order: Finova first, then ai-agentica
  const workingOnRepos = workingOnProjects
    .map(name => repos.find(repo => repo.name === name))
    .filter(Boolean);

  // Rest of projects
  const otherRepos = repos.filter(
    repo =>
      !mainProjects.includes(repo.name) &&
      !workingOnProjects.includes(repo.name)
  );

  const ProjectBlock = (repo, index, isMain) => {
    const deployed = deployedLinks[repo.name];
    // Use manual description if GitHub description is null/empty
    const description = repo.description || manualDescriptions[repo.name];

    return (
      <motion.div
        key={repo.id}
        className="project-card"
        variants={itemVariants}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* BADGES ROW */}
        <div className="project-badges">
          {isMain && (
            <div className="project-badge main-badge">
              ⭐ MAIN PROJECT
            </div>
          )}

          {workingOnProjects.includes(repo.name) && (
            <div className="project-badge working-badge">
              🟢 WORKING ON
            </div>
          )}
        </div>

        <h2 className="project-title">
          {repo.name}
        </h2>

        {description ? (
          <ul className="project-description">
            {description
              .split('. ')
              .map(line => line.trim())
              .filter(line => !/^Language:|^Stars:|^Last Updated:/i.test(line))
              .slice(0, 3)
              .map((line, idx) => (
                <li key={idx}>
                  {line}
                </li>
              ))}
          </ul>
        ) : (
          <p className="project-no-description">
            No description provided.
          </p>
        )}

        <div className="project-actions">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            <FaGithub /> GitHub
          </a>

          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn demo-btn"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      className="projects-section"
      variants={containerVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="projects-container">
        <motion.h1 className="projects-title gradient-text" variants={itemVariants}>
          My Projects
        </motion.h1>

        {/* Main Projects */}
        <motion.div className="projects-category" variants={itemVariants}>
          <div className="category-header">
            <h2 className="category-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {mainRepos.map((repo, index) =>
              ProjectBlock(repo, index, true)
            )}
          </div>
        </motion.div>

        {/* Working On Projects */}
        <motion.div className="projects-category" variants={itemVariants}>
          <div className="category-header">
            <h2 className="category-title">Currently Working On</h2>
          </div>
          <div className="projects-grid">
            {workingOnRepos.map((repo, index) =>
              ProjectBlock(repo, index, false)
            )}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div className="projects-category" variants={itemVariants}>
          <div className="category-header">
            <h2 className="category-title">Other Projects</h2>
          </div>
          <div className="projects-grid">
            {otherRepos.map((repo, index) =>
              ProjectBlock(repo, index, false)
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const cached = localStorage.getItem("reposCache");
  const cachedTime = localStorage.getItem("reposCacheTime");

  if (cached && Date.now() - cachedTime < 24 * 60 * 60 * 1000) {
    return JSON.parse(cached);
  }

  const res = await fetch(
    "https://api.github.com/users/ASK3002/repos"
  );

  if (!res.ok) {
    console.error("Failed to fetch GitHub repos:", res.status);
    return [];
  }

  let data = await res.json();

  if (!Array.isArray(data)) {
    console.error("Received unexpected data from GitHub API");
    return [];
  }

  const filtered = data.filter(r => !r.fork);

  localStorage.setItem("reposCache", JSON.stringify(filtered));
  localStorage.setItem("reposCacheTime", Date.now());

  return filtered;
};
