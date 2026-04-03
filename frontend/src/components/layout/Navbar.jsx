import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Stylish NaimNTech Typography */}
          <div className="shrink-0 z-50">
            <Link to="/" className="text-2xl flex items-baseline">
              <span className="font-sans font-extrabold tracking-tighter text-stone-900">
                NaimN
              </span>
              <span className="font-serif font-light italic tracking-wide text-amber-700 ml-0.5">
                Tech
              </span>
              <span className="text-amber-700 font-bold ml-0.5">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-sans text-sm tracking-wide">
            <Link to="/" className="text-stone-600 hover:text-amber-700 transition duration-300">Home</Link>
            <Link to="/about" className="text-stone-600 hover:text-amber-700 transition duration-300">About</Link>
            <Link to="/services" className="text-stone-600 hover:text-amber-700 transition duration-300">Services</Link>
            <Link to="/portfolio" className="text-stone-600 hover:text-amber-700 transition duration-300">Portfolio</Link>
            <Link to="/blog" className="text-stone-600 hover:text-amber-700 transition duration-300">Blog</Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-stone-900 text-stone-50 text-sm font-sans tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-sm"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={toggleMobileMenu}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-stone-50 border-b border-stone-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col font-sans">
            <Link 
              to="/" 
              onClick={toggleMobileMenu}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-100 transition duration-300 rounded-md"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={toggleMobileMenu}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-100 transition duration-300 rounded-md"
            >
              About
            </Link>
            <Link 
              to="/services" 
              onClick={toggleMobileMenu}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-100 transition duration-300 rounded-md"
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              onClick={toggleMobileMenu}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-100 transition duration-300 rounded-md"
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              onClick={toggleMobileMenu}
              className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-amber-700 hover:bg-stone-100 transition duration-300 rounded-md"
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              onClick={toggleMobileMenu}
              className="mt-4 block text-center px-6 py-3 bg-stone-900 text-stone-50 text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-sm"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;