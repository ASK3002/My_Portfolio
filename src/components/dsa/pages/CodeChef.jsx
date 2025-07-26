import React from "react";
import { motion as Motion } from 'framer-motion';
import {
  FaStar,
  FaTrophy,
  FaCodeBranch,
  FaChartLine
} from "react-icons/fa";

const CodeChef = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-gray-900 dark:text-white space-y-10">
        
        {/* Title Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">🍛 CodeChef</h1>
          <a
            href="https://www.codechef.com/users/a_s_k_ayush"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded transition"
          >
            🔗 Visit My CodeChef Profile
          </a>
        </div>

        {/* Stats */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard
              icon={<FaCodeBranch />}
              label="Contests Participated"
              value="35"
              color="bg-purple-600"
            />
            <StatCard
              icon={<FaTrophy />}
              label="Problems Solved"
              value="152"
              color="bg-indigo-600"
            />
            <StatCard
              icon={<FaChartLine />}
              label="Current Rating"
              value="1441"
              color="bg-pink-600"
            />
            <StatCard
              icon={<FaChartLine />}
              label="Highest Rating"
              value="1441"
              color="bg-pink-700"
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

export default CodeChef;
