'use client';

import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X, Mail } from 'lucide-react';
import { ThemeContext } from '@/components/ThemeProvider';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'Work', 'Contact'];

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, x: '-100%' },
  };

  const linkVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 border-b ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#05010f]/80 border-white/10 backdrop-blur-lg shadow-md'
            : 'bg-white/90 border-gray-200 backdrop-blur-lg shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO / NAME */}
        <a
          href="#home"
          className={`text-xl font-bold transition-colors duration-300 ${
            isScrolled
              ? theme === 'dark'
                ? 'text-white'
                : 'text-gray-900'
              : 'text-gray-900 dark:text-white'
          }`}
        >
          Yudhveer Singh Panwar
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? theme === 'dark'
                    ? 'text-gray-300 hover:text-cyan-400'
                    : 'text-gray-700 hover:text-purple-600'
                  : 'text-gray-800 dark:text-gray-200 hover:text-[var(--brand)]'
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right side: Theme toggle + Email + Menu */}
        <div className="flex items-center gap-4">
          {/* Email Icon */}
          <a
            href="mailto:yudhveerp10@gmail.com"
            className="p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-white/10 transition"
            title="Email Yudhveer"
          >
            <Mail
              className={`w-5 h-5 transition-colors duration-300 ${
                theme === 'dark' ? 'text-cyan-400' : 'text-purple-600'
              }`}
            />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-white/10 transition"
            title="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-800" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="text-gray-800 dark:text-white" />
              ) : (
                <Menu className="text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className={`md:hidden absolute top-full left-0 right-0 p-6 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-[#0a011a]/95' : 'bg-white/95'
        } border-t border-white/10 backdrop-blur-xl`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              variants={linkVariants}
              className={`text-lg font-medium transition-colors duration-300 ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-cyan-400'
                  : 'text-gray-800 hover:text-purple-600'
              }`}
            >
              {link}
            </motion.a>
          ))}

          {/* Email link inside mobile menu */}
          <motion.a
            href="mailto:yudhveerp10@gmail.com"
            variants={linkVariants}
            className={`text-lg flex items-center gap-2 font-medium transition-colors duration-300 ${
              theme === 'dark'
                ? 'text-cyan-400 hover:text-cyan-300'
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            <Mail className="w-5 h-5" /> Email Me
          </motion.a>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;


