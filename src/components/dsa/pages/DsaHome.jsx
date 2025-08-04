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
  <>
    {/* Google Fonts Link - put once globally in your app for best performance */}
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@700&display=swap"
      rel="stylesheet"
    />

    <Motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20 px-6"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 text-gray-900 dark:text-white">
        {/* Name & Institute */}
        <div className="text-center space-y-3">
          <h1
            className="text-4xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Ayush Singh Kaushik
          </h1>
          <p
            className="text-lg text-gray-700 dark:text-gray-300 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            B.Tech CSE, IIITDM Jabalpur
          </p>
        </div>

        {/* Platform Buttons */}
        <div className="grid gap-6 md:grid-cols-3 max-w-md mx-auto">
          {platformButtons.map(({ name, bg }) => (
            <Motion.div
              key={name}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`p-6 rounded-xl shadow-lg text-white text-center text-lg font-semibold bg-gradient-to-br ${bg} cursor-pointer relative overflow-hidden`}
            >
              <Link
                to={`/${name.toLowerCase()}`}
                className="relative z-10 block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {name}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Motion.div>
          ))}
        </div>

        {/* DSA Practice Section */}
        <div
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <h2
            className="text-3xl font-extrabold tracking-wide text-orange-600 dark:text-orange-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            📚 About My DSA Practice
          </h2>
          <p className="text-md leading-relaxed text-gray-800 dark:text-gray-300 max-w-xl mx-auto font-light text-center">
            I have been consistently practicing data structures and algorithms across multiple platforms.
            My focus has been on understanding core DSA patterns that are crucial for coding interviews and competitive programming.
          </p>

          <h3 className="text-xl font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ✅ Patterns I've Practiced:
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {patterns.map((p, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center gap-4 p-5 rounded-lg bg-gradient-to-r ${p.bg} text-white shadow-lg cursor-default select-none transform hover:scale-[1.04] transition-transform duration-300`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="text-3xl">{p.icon}</div>
                <div className="text-md font-semibold tracking-wide">{p.name}</div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </Motion.div>
  </>
);

export default DsaHome;
