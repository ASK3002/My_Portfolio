import React from "react";
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

export default function DsaHome() {
  const platforms = [
    {
      icon: <SiLeetcode className="text-4xl" />,
      name: "LeetCode",
      link: "https://leetcode.com/u/A_S_K_Ayush/",
    },
    {
      icon: <SiCodeforces className="text-4xl" />,
      name: "CodeForces",
      link: "https://codeforces.com/profile/a_s_k_ayush",
    },
    {
      icon: <SiGeeksforgeeks className="text-4xl" />,
      name: "GFG",
      link: "https://www.geeksforgeeks.org/user/askayush/",
    },
    {
      icon: <SiCodechef className="text-4xl" />,
      name: "CodeChef",
      link: "https://www.codechef.com/users/a_s_k_ayush",
    },
  ];

  const patterns = [
  { icon: <FaCubes />, name: "Sliding Window & Two Pointers", bg: "from-purple-500/80 to-purple-700/90" },
  { icon: <FaSearch />, name: "Binary Search & Bit Manipulation", bg: "from-pink-500/80 to-pink-700/90" },
  { icon: <FaRetweet />, name: "Backtracking & Recursion", bg: "from-yellow-500/80 to-yellow-700/90" },
  { icon: <FaProjectDiagram />, name: "Dynamic Programming", bg: "from-green-500/80 to-green-700/90" },
  { icon: <FaNetworkWired />, name: "Graphs (BFS/DFS/Union Find)", bg: "from-blue-500/80 to-blue-700/90" },
  { icon: <FaCalculator />, name: "Stacks, Queues & Heaps", bg: "from-red-500/80 to-red-700/90" },
  { icon: <FaLightbulb />, name: "Hashing, Prefix Sum, Greedy", bg: "from-teal-500/80 to-teal-700/90" },
  { icon: <FaTree />, name: "Trees & Binary Trees", bg: "from-indigo-500/80 to-indigo-700/90" },
  { icon: <FaTree />, name: "Trie", bg: "from-indigo-400/80 to-indigo-700/80" },
  { icon: <FaProjectDiagram />, name: "Linked List", bg: "from-emerald-400/80 to-emerald-700/90" }
];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-gray-900 dark:to-gray-800px-6 md:px-16 py-16 bg-white dark:bg-black text-black dark:text-white select-none transition-colors duration-300">
      <h1 className="text-4xl md:text-4xl font-bold mb-12 letterSpacing: '4px'  text-center " style={{ fontFamily: "'Montserrat', sans-serif" }}>DSA Dashboard</h1>

      {/* Platforms */}
      <section>
        <h2 className="text-2xl font-semibold mb-6"style={{ fontFamily: "'Montserrat', sans-serif" }}>Platforms</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-500 transition-all shadow-sm hover:shadow-md"
            >
              {p.icon}
              <p className="mt-3 text-lg font-medium">{p.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Patterns */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Patterns I've Practiced</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {patterns.map((pt, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-zinc-500 transition-all shadow-sm hover:shadow-md"
            >
              {pt.icon}
              <p className="mt-3 text-lg font-medium">{pt.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
