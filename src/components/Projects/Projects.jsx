import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Github() {
  const repos = useLoaderData();

  const deployedLinks = {
    "Basic_React_Projects": "https://ask3002.github.io/Basic_React_Projects/",
    "BASIC_PROJECTS_HTML_CSS_JS": "https://ask3002.github.io/BASIC_PROJECTS_HTML_CSS_JS/",
    "My_Portfolio": "https://ayushsinghkaushik-portfolio.netlify.app/"
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-amber-900 dark:text-orange-300 mb-12">
          🚀 My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {repos.map((repo, index) => {
            const deployedLink = deployedLinks[repo.name];

            return (
              <Motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/60 dark:bg-gray-800/50 backdrop-blur-xl border border-orange-200 dark:border-gray-600 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 truncate text-center" title={repo.name}>
                  {repo.name}
                </h2>

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 text-center mb-6">
                  {repo.description || 'No description available.'}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white dark:bg-gray-100 dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition"
                  >
                    <FaGithub /> GitHub
                  </a>

                  {deployedLink && (
                    <a
                      href={deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </Motion.div>
            );
          })}
        </div>
      </div>
    </Motion.div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ASK3002/repos');
  const data = await response.json();
  return data.filter(repo => !repo.fork); // exclude forks
};
