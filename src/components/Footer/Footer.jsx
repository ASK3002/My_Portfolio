import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Text */}
                <span className="footer-text">
                    © 2025 <a href="https://ayushkaushik.dev" className="footer-link">Ayush Singh Kaushik</a>. All Rights Reserved.
                </span>

                {/* Social Icons */}
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/ASK3002" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://medium.com/@ayushsinghkaushik111" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaMedium className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
