import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion  as Motion} from 'framer-motion';

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
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16 px-4">
      <h1 className="text-4xl  mb-10 text-center text-amber-900 dark:text-orange-300">
        My Projects
      </h1>

      {repos && repos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {repos.map((repo) => {
            const deployedLink = deployedLinks[repo.name];

            return (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 flex flex-col justify-between transition hover:shadow-xl"
              >
                <h2 className="text-lg text-center  text-gray-900 dark:text-white mb-4">
                  {repo.name}
                </h2>

                <div className="flex flex-col space-y-3 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                  >
                    See GitHub Code
                  </a>

                  {deployedLink && (
                    <a
                      href={deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                    >
                      See Deployed Project
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-800 dark:text-gray-300">
          No Repos Found...
        </p>
      )}
    </div>
    </Motion.div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ASK3002/repos');
  const data = await response.json();
  // Exclude forks
  const nonForkedRepos = data.filter(repo => !repo.fork);
  return nonForkedRepos;
};
