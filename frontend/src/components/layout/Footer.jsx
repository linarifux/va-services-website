import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & Copyright */}
          <div>
            <Link to="/" className="text-2xl flex items-baseline w-fit">
              <span className="font-sans font-extrabold tracking-tighter text-stone-50">
                NaimN
              </span>
              <span className="font-serif font-light italic tracking-wide text-amber-600 ml-0.5">
                Tech
              </span>
              <span className="text-amber-600 font-bold ml-0.5">.</span>
            </Link>
            <p className="mt-4 text-sm text-stone-400 max-w-xs leading-relaxed">
              Premium virtual assistant services tailored for modern entrepreneurs and growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-stone-50 font-medium tracking-wider uppercase text-sm mb-2">Explore</h4>
            <Link to="/services" className="hover:text-amber-600 transition duration-300 w-fit">Services</Link>
            <Link to="/about" className="hover:text-amber-600 transition duration-300 w-fit">About Us</Link>
            <Link to="/blog" className="hover:text-amber-600 transition duration-300 w-fit">Insights & Blog</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-stone-50 font-medium tracking-wider uppercase text-sm mb-2">Connect</h4>
            <a href="mailto:hello@naimntech.com" className="hover:text-amber-600 transition duration-300">hello@naimntech.com</a>
            <Link to="/contact" className="hover:text-amber-600 transition duration-300 w-fit">Contact Form</Link>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-800 text-sm text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} NaimNTech. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-stone-300 transition duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-300 transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;