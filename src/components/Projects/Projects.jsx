import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const deployedLinks = {
  "Basic_React_Projects": "https://ask3002.github.io/Basic_React_Projects/",
  "BASIC_PROJECTS_HTML_CSS_JS": "https://ask3002.github.io/BASIC_PROJECTS_HTML_CSS_JS/",
  "My_Portfolio": "https://ayushsinghkaushik-portfolio.netlify.app/",
  "RECO-Resume-CoverLetterBuilder":"https://reco-resume-cover-letter-builder.vercel.app/"
};

const mainProjects = ["My_Portfolio", "SpendSense", "VideoPlatform_BackendProject"];

function Github() {
  const repos = useLoaderData();

  const mainRepos = repos.filter(repo => mainProjects.includes(repo.name));
  const otherRepos = repos.filter(repo => !mainProjects.includes(repo.name));

  const ProjectBlock = (repo, index, isMain) => {
    const deployed = deployedLinks[repo.name];

    return (
      <Motion.div
        key={repo.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-orange-400 dark:border-orange-300 p-6 mb-10"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {isMain && (
          <div
            className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-md"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ⭐ MAIN PROJECT
          </div>
        )}

        <h2
  className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 break-words max-w-full"
  style={{ fontFamily: "'Montserrat', sans-serif', wordBreak: 'break-word'" }}
>
  {repo.name}
</h2>


        {repo.description ? (
          <ul
            className="mb-5 space-y-2 text-[18px] text-gray-700 dark:text-gray-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {repo.description
              .split('. ')
              .map(line => line.trim())
              .filter(line => !/^Language:|^Stars:|^Last Updated:/i.test(line))
              .slice(0, 3) // Limit to 3 points
              .map((line, idx) => (
                <li
                  key={idx}
                  className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-orange-500 before:text-lg"
                >
                  {line}
                </li>
              ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            No description provided.
          </p>
        )}

        <div className="flex flex-wrap gap-4 mt-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <FaGithub /> GitHub
          </a>

          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </Motion.div>
    );
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />

      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen px-4 py-16 bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800"
        style={{ fontFamily: "'Inter', 'Montserrat', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl font-bold text-center text-amber-900 dark:text-orange-300 mb-16"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            My Projects
          </h1>

          {/* Main Projects */}
          <div>{mainRepos.map((repo, index) => ProjectBlock(repo, index, true))}</div>

          {/* Other Projects */}
          <h2
            className="text-2xl font-semibold text-orange-700 dark:text-orange-300 mt-12 mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Other Projects
          </h2>
          <div>{otherRepos.map((repo, index) => ProjectBlock(repo, index, false))}</div>
        </div>
      </Motion.div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/ASK3002/repos');
  const data = await res.json();
  return data.filter(repo => !repo.fork);
};
