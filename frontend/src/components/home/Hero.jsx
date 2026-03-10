import { Link } from 'react-router-dom';
// ASSUMPTION: You have a professional image saved here:
import HeroImage from '../../assets/profile.png'; 

const Hero = () => {
  return (
    <section className="relative w-full py-16 md:py-24 xl:py-32 overflow-hidden flex items-center bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Text Content */}
          <div className="md:col-span-6 lg:col-span-7 text-left">
            <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 md:mb-6 block">
              Premium Dedicated Support by Naim
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-stone-900 mb-6 leading-[1.15] tracking-tight">
              Reclaim your time. <br />
              <span className="italic font-light text-stone-600">Scale your vision.</span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl font-sans font-light leading-relaxed">
              We provide highly-skilled, dedicated virtual assistants for visionary founders and growing businesses. Let us handle the complexity so you can focus on the breakthrough.
            </p>
            
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 border-stone-200">
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-sm"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-stone-900 border border-stone-300 font-sans text-sm tracking-wider uppercase hover:border-amber-700 hover:text-amber-700 transition duration-300 rounded-sm"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Minor Trust Logos Row (Concept) */}
            <div className="mt-12 pt-8 border-t border-stone-100 hidden sm:block">
              <p className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-4">Trusted by innovative companies</p>
              <div className="flex gap-8 items-center opacity-50 filter grayscale">
                {/* Conceptual placeholders for client logos */}
                <span className="font-sans font-extrabold text-stone-800 text-xl tracking-tighter">GLOBEX</span>
                <span className="font-serif font-bold text-stone-800 text-xl">Initech</span>
                <span className="font-sans font-light text-stone-800 text-lg tracking-widest">VEANDCO</span>
              </div>
            </div>
          </div>

          {/* Column 2: Image & Trust Elements */}
          <div className="md:col-span-6 lg:col-span-5 relative mt-12 md:mt-0">
            <div className="relative group p-2 border border-stone-100 bg-white rounded-sm shadow-xl shadow-stone-500/5">
              <img 
                src={HeroImage} 
                alt="A composed professional virtual assistant working at a clean, modern desk setup" 
                className="w-full h-auto aspect-[4/5] object-cover rounded-sm grayscale-[20%] group-hover:grayscale-0 transition duration-500"
              />
              
              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-amber-700 text-amber-50 p-5 rounded-sm shadow-lg max-w-xs hidden lg:block">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif italic text-white text-lg leading-snug">
                  "Naim is the competitive advantage we didn't know we needed."
                </p>
                <p className="font-sans font-medium uppercase text-xs tracking-widest text-amber-100 mt-2">
                  — CEO, Initech Corp.
                </p>
              </div>
            </div>

            {/* Abstract Decorative Elements behind image */}
            <div className="absolute -top-[10%] -right-[10%] w-[120%] h-[120%] rounded-full bg-amber-700/5 blur-[120px] -z-10"></div>
          </div>
        </div>
        
      </div>
      
      {/* Universal Soft gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-stone-400/10 blur-[100px]"></div>
      </div>
    </section>
  );
};

export default Hero;