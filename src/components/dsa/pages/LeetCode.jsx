import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaFire,
  FaUserCheck,
  FaCalendarCheck,
  FaMedal,
  FaChartLine,
  FaStar
} from "react-icons/fa";

const LeetCode = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-gray-900 dark:text-white space-y-10">

        {/* Title and Profile Link */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">🧠 LeetCode</h1>
          <a
            href="https://leetcode.com/u/A_S_K_Ayush/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded transition"
          >
            🔗 Visit LeetCode Profile
          </a>
        </div>

        {/* Highlight Stats */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard icon={<FaMedal />} label="Top Percentage" value="Top 31.63%" color="bg-purple-500" />
            <StatCard icon={<FaChartLine />} label="Contest Rating" value="1,550" color="bg-blue-500" />
            <StatCard icon={<FaUserCheck />} label="Global Ranking" value="224,340 / 720,317" color="bg-green-500" />
            <StatCard icon={<FaCalendarCheck />} label="Total Active Days" value="113 days" color="bg-teal-500" />
            <StatCard icon={<FaFire />} label="Max Streak" value="18 days" color="bg-red-500" />
            <div className="col-span-1 sm:col-span-2">
              <div className="bg-gray-700 rounded p-4 flex flex-wrap gap-4 justify-between items-center text-white">
                <p className="text-sm font-semibold">
                  👨‍💻 Total Solved: <span className="text-yellow-300">241</span>
                </p>
                <p className="text-sm">
                  📊 <span className="text-green-300">Easy: 88</span> |{" "}
                  <span className="text-yellow-300">Medium: 126</span> |{" "}
                  <span className="text-red-400">Hard: 27</span>
                </p>
              </div>
            </div>
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

export default LeetCode;
