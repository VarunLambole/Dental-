import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, Upload, Info, HelpCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/', icon: <Activity size={18} /> },
    { name: 'Upload', path: '/upload', icon: <Upload size={18} /> },
    { name: 'About', path: '/about', icon: <Info size={18} /> },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 dark:text-white tracking-tight">DentAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
             <Link to="/help" className="p-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <HelpCircle size={20} />
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 focus:outline-none"
            >
               {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                   isActive(link.path)
                    ? 'text-teal-600 bg-teal-50 dark:bg-teal-900/20 dark:text-teal-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-teal-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
             <Link
                to="/help"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-3"
              >
                <HelpCircle size={18} /> Help
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-auto transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <div className="bg-teal-600 p-1.5 rounded-lg">
                <Activity className="h-5 w-5 text-white" />
              </div>
            <span className="font-bold text-lg text-slate-800 dark:text-white">DentAI</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
            Advancing dental diagnostics through state-of-the-art computer vision. 
            Detect cavities earlier, accurately, and efficiently.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Product</h3>
          <ul className="space-y-3">
            <li><Link to="/upload" className="text-base text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Inference Engine</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase mb-4">Support</h3>
          <ul className="space-y-3">
            <li><Link to="/help" className="text-base text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Documentation</Link></li>
            <li><Link to="/about" className="text-base text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">About Team</Link></li>
            <li><a href="#" className="text-base text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 flex justify-between items-center">
        <p className="text-sm text-slate-400 dark:text-slate-500">&copy; 2024 DentAI Systems. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};