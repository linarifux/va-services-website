import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-50 text-center px-4 sm:px-6 lg:px-8 border-b border-stone-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
          Ready to reclaim your time?
        </h2>
        <p className="text-stone-400 font-sans font-light text-lg mb-10 max-w-xl mx-auto">
          Let's discuss how NaimNTech can streamline your operations and give you the bandwidth to focus on scaling your vision.
        </p>
        <Link 
          to="/contact" 
          className="inline-block px-10 py-4 bg-amber-700 text-white font-sans text-sm tracking-wider uppercase hover:bg-amber-600 transition duration-300 rounded-sm shadow-lg shadow-amber-900/20"
        >
          Book Your Free Consultation
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;