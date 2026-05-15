import React from "react";
import { motion } from 'framer-motion';
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";
import {
  FaCubes,
  FaSearch,
  FaProjectDiagram,
  FaRetweet,
  FaNetworkWired,
  FaCalculator,
  FaLightbulb,
  FaTree,
} from "react-icons/fa";
import { containerVariants, itemVariants } from '../../PageTransition/PageTransition';
import './DsaHome.css';

export default function DsaHome() {
  const platforms = [
    {
      icon: <SiLeetcode className="platform-icon platform-leetcode" />,
      name: "LeetCode",
      link: "https://leetcode.com/u/A_S_K_Ayush/",
      stats: "630+ Problems"
    },
    {
      icon: <SiCodeforces className="platform-icon platform-codeforces" />,
      name: "CodeForces",
      link: "https://codeforces.com/profile/a_s_k_ayush",
      stats: "1220 Rating (max. pupil, 1289) "
    },
    {
      icon: <SiGeeksforgeeks className="platform-icon platform-gfg" />,
      name: "GFG",
      link: "https://www.geeksforgeeks.org/user/askayush/",
      stats: "100+ Problems"
    },
    {
      icon: <SiCodechef className="platform-icon platform-codechef" />,
      name: "CodeChef",
      link: "https://www.codechef.com/users/a_s_k_ayush",
      stats: "2-Star"
    },
  ];

  const patterns = [
    { icon: <FaCubes />, name: "Sliding Window & Two Pointers", difficulty: "Medium", problems: "50+", bg: "from-purple-500/80 to-purple-700/90" },
    { icon: <FaSearch />, name: "Binary Search & Bit Manipulation", difficulty: "Medium", problems: "40+", bg: "from-pink-500/80 to-pink-700/90" },
    { icon: <FaRetweet />, name: "Backtracking & Recursion", difficulty: "Hard", problems: "30+", bg: "from-yellow-500/80 to-yellow-700/90" },
    { icon: <FaProjectDiagram />, name: "Dynamic Programming", difficulty: "Hard", problems: "35+", bg: "from-green-500/80 to-green-700/90" },
    { icon: <FaNetworkWired />, name: "Graphs (BFS/DFS/Union Find)", difficulty: "Hard", problems: "45+", bg: "from-blue-500/80 to-blue-700/90" },
    { icon: <FaCalculator />, name: "Stacks, Queues & Heaps", difficulty: "Easy", problems: "60+", bg: "from-red-500/80 to-red-700/90" },
    { icon: <FaLightbulb />, name: "Hashing, Prefix Sum, Greedy", difficulty: "Medium", problems: "55+", bg: "from-teal-500/80 to-teal-700/90" },
    { icon: <FaTree />, name: "Trees & Binary Trees", difficulty: "Medium", problems: "40+", bg: "from-indigo-500/80 to-indigo-700/90" },
    { icon: <FaTree />, name: "Trie", difficulty: "Medium", problems: "15+", bg: "from-indigo-400/80 to-indigo-700/80" },
    { icon: <FaProjectDiagram />, name: "Linked List", difficulty: "Easy", problems: "35+", bg: "from-emerald-400/80 to-emerald-700/90" }
  ];

  return (
    <motion.section
      className="dsa-section"
      variants={containerVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      <div className="dsa-container">
        <motion.h1 className="dsa-title gradient-text" variants={itemVariants}>
          DSA Dashboard
        </motion.h1>

        <motion.div className="dsa-subtitle" variants={itemVariants}>
          <p className="subtitle-text">
            Mastering algorithms and data structures through competitive programming
          </p>
        </motion.div>

        {/* Platforms Section */}
        <motion.div className="dsa-category" variants={itemVariants}>
          <div className="category-header">
            <h2 className="category-title">Competitive Platforms</h2>
          </div>
          <div className="platforms-grid">
            {platforms.map((p, idx) => (
              <motion.a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="platform-icon-wrapper">
                  {p.icon}
                </div>
                <h3 className="platform-name">{p.name}</h3>
                <div className="platform-stats">
                  <span className="platform-stat">{p.stats}</span>
                  <span className="platform-level">{p.level}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Patterns Section */}
        <motion.div className="dsa-category" variants={itemVariants}>
          <div className="category-header">
            <h2 className="category-title">DSA Patterns Mastered</h2>
          </div>
          <div className="patterns-grid">
            {patterns.map((pt, idx) => (
              <motion.div
                key={idx}
                className={`pattern-card ${pt.bg}`}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(139, 92, 246, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="pattern-icon-wrapper">
                  {pt.icon}
                </div>
                <h3 className="pattern-name">{pt.name}</h3>
                <div className="pattern-stats">
                  <span className="pattern-difficulty">{pt.difficulty}</span>
                  <span className="pattern-problems">{pt.problems}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}