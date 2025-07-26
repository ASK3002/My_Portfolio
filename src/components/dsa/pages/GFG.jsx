import React from "react";
import { motion as Motion } from "framer-motion";
import { FaCheckCircle, FaCogs, FaCode, FaLeaf } from "react-icons/fa";

const GFG = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-green-50 to-lime-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-gray-900 dark:text-white space-y-10">

        {/* Title and Profile Link */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">📗 GeeksforGeeks</h1>
          <a
            href="https://www.geeksforgeeks.org/user/23bme9mg8/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded transition"
          >
            🌿 Visit GFG Profile
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaLeaf className="text-green-400" />
            Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              icon={<FaCheckCircle />}
              label="Problems Solved"
              value="79"
              color="bg-emerald-600"
            />
            <StatCard
              icon={<FaCogs />}
              label="Strong Areas"
              value="Arrays, Hashing, Strings, DP, Graphs, Trees, Binary Search"
              color="bg-lime-600"
            />
            <StatCard
              icon={<FaCode />}
              label="Language"
              value="C++"
              color="bg-cyan-600"
            />
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const StatCard = ({ icon, label, value, color }) => (
  <div className={`flex items-start gap-3 p-4 rounded-lg ${color} bg-opacity-80 text-white`}>
    <div className="text-xl mt-1">{icon}</div>
    <div>
      <div className="font-semibold">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  </div>
);

export default GFG;
