import { Link } from "react-router-dom";
import { motion as Motion } from 'framer-motion';
import {
  FaCubes, FaSearch, FaProjectDiagram,
  FaRetweet, FaNetworkWired, FaCalculator,
  FaLightbulb, FaTree
} from "react-icons/fa";

const patterns = [
  { icon: <FaCubes />, name: "Sliding Window & Two Pointers", bg: "from-purple-400 to-purple-600" },
  { icon: <FaSearch />, name: "Binary Search & Bit Manipulation", bg: "from-pink-400 to-pink-600" },
  { icon: <FaRetweet />, name: "Backtracking & Recursion", bg: "from-yellow-400 to-yellow-600" },
  { icon: <FaProjectDiagram />, name: "Dynamic Programming", bg: "from-green-400 to-green-600" },
  { icon: <FaNetworkWired />, name: "Graphs (BFS/DFS/Union Find)", bg: "from-blue-400 to-blue-600" },
  { icon: <FaCalculator />, name: "Stacks, Queues & Heaps", bg: "from-red-400 to-red-600" },
  { icon: <FaLightbulb />, name: "Hashing, Prefix Sum, Greedy", bg: "from-teal-400 to-teal-600" },
  { icon: <FaTree />, name: "Trees, Binary Trees, Tries", bg: "from-indigo-400 to-indigo-600" },
];

const platformButtons = [
  { name: "LeetCode", bg: "from-blue-500 to-gray-900" },
  { name: "GFG", bg: "from-green-600 to-green-900" },
  { name: "CodeChef", bg: "from-yellow-600 to-yellow-900" },
];

const DsaHome = () => (
  <Motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20 px-6"
  >
    <div className="max-w-5xl mx-auto flex flex-col gap-10 text-gray-900 dark:text-white">
      {/* Name & Institute */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Ayush Singh Kaushik</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">B.Tech CSE, IIITDM Jabalpur</p>
      </div>

      {/* Platform Buttons */}
      <div className="grid gap-4 md:grid-cols-3">
        {platformButtons.map(({ name, bg }) => (
          <Link
            key={name}
            to={`/${name.toLowerCase()}`}
            className={`p-6 rounded shadow text-white text-center text-lg font-semibold bg-gradient-to-br ${bg} hover:scale-105 transition-all`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* DSA Practice Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg space-y-6">
        <h2 className="text-2xl font-bold">📚 About My DSA Practice</h2>
        <p className="text-md leading-relaxed text-gray-800 dark:text-gray-300">
          I have been consistently practicing data structures and algorithms across multiple platforms.
          My focus has been on understanding core DSA patterns that are crucial for coding interviews and competitive programming.
        </p>

        <h3 className="text-lg font-semibold">✅ Patterns I've Practiced:</h3>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {patterns.map((p, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 bg-gradient-to-r ${p.bg} text-white shadow-lg rounded-lg hover:scale-[1.03] transition-all duration-300`}
            >
              <div className="text-xl">{p.icon}</div>
              <div className="text-sm font-semibold">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Motion.div>
);

export default DsaHome;
