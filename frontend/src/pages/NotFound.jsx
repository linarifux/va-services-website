import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-stone-50 min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl text-center">
        <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-sm mb-6 block">
          Error 404
        </span>
        
        <h1 className="text-6xl md:text-8xl font-serif text-stone-900 mb-8 leading-none">
          Page not <br />
          <span className="italic font-light text-stone-600">found.</span>
        </h1>
        
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed mb-12">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-xl shadow-stone-200"
        >
          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Homepage
        </Link>
      </div>
      
      {/* Soft decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-stone-200/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default NotFound;