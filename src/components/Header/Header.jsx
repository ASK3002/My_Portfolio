import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaHome,
  FaCogs,
  FaProjectDiagram,
  FaUser,
  FaBars,
  FaTimes,
  FaDraftingCompass
} from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/Skills', label: 'Skills', icon: FaCogs },
    { path: '/Github', label: 'Projects', icon: FaProjectDiagram },
    { path: '/DsaHome', label: 'DSA', icon: FaDraftingCompass },
    { path: '/about', label: 'About', icon: FaUser },
  ];

  return (
    <header className="glass-navbar">
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo + Name */}
          <div className="logo-container">
            <div className="logo-wrapper">
              <img
                src="https://static.vecteezy.com/system/resources/previews/020/617/232/non_2x/ask-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg"
                className="logo-image"
                alt="Logo"
              />
              <div className="logo-glow" />
            </div>
            <span className="logo-text">
              Ayush Singh Kaushik
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            {navLinks.map((nav) => (
              <NavLink
                key={nav.path}
                to={nav.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                }
              >
                <nav.icon className="nav-icon" />
                <span className="nav-label">{nav.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Desktop Socials + Toggle */}
          <div className="desktop-actions">
            <a
              href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/ASK3002"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://medium.com/@ayushsinghkaushik111"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaMedium className="social-icon" />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-button"
          >
            {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            {/* Links */}
            <div className="mobile-nav-links">
              {navLinks.map((nav) => (
                <NavLink
                  key={nav.path}
                  to={nav.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : 'mobile-nav-link-inactive'}`
                  }
                >
                  <nav.icon className="mobile-nav-icon" />
                  <span>{nav.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Socials */}
            <div className="mobile-socials">
              <a
                href="https://www.linkedin.com/in/ayush-singh-kaushik-7386a4294/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <FaLinkedin className="mobile-social-icon" />
              </a>
              <a
                href="https://github.com/ASK3002"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <FaGithub className="mobile-social-icon" />
              </a>
              <a
                href="https://medium.com/@ayushsinghkaushik111"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <FaMedium className="mobile-social-icon" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
