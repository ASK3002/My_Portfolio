import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900  border-gray-200 dark:border-gray-700 text-center text-sm z-50">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-4 flex flex-col sm:flex-row justify-between items-center">

                {/* Text */}
                <span className="text-gray-500 dark:text-gray-300">
                    © 2025 <a href="https://ayushkaushik.dev" className="hover:underline">Ayush Singh Kaushik</a>. All Rights Reserved.
                </span>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-2 sm:mt-0 text-gray-600 dark:text-gray-300">
                    <a href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="w-5 h-5 hover:text-orange-700 dark:hover:text-orange-400" />
                    </a>
                    <a href="https://github.com/ASK3002" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="w-5 h-5 hover:text-orange-700 dark:hover:text-orange-400" />
                    </a>
                    <a href="https://medium.com/@ayushsinghkaushik111" target="_blank" rel="noopener noreferrer">
                        <FaMedium className="w-5 h-5 hover:text-orange-700 dark:hover:text-orange-400" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
