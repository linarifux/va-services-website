import { Link } from 'react-router-dom';
// ASSUMPTION: You have a professional portrait saved here
import FounderImage from '../assets/profile_naim.png'; 

const About = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 mb-8 leading-[1.15] tracking-tight">
            Bridging the gap between <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">operations & engineering.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            NaimNTech was built on a simple premise: modern businesses don't just need administrative help; they require deep technical and e-commerce expertise to truly scale.
          </p>
        </div>
        
        {/* Soft Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-700/5 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      </section>

      {/* The Founder / Narrative Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Founder Image Block */}
            <div className="lg:col-span-5 relative">
              {/* Decorative Offset Frame */}
              <div className="absolute inset-0 bg-stone-200 rounded-sm translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10"></div>
              
              <div className="relative aspect-[4/5] w-full bg-stone-100 rounded-sm overflow-hidden border border-stone-200 shadow-2xl shadow-stone-400/30 group">
                <img 
                  src={FounderImage} 
                  alt="Naimul Islam, Founder of NaimNTech" 
                  className="w-full h-full object-cover object-center grayscale-[80%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                />
                
                {/* Image Overlay Tag */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg">
                  <span className="block font-serif font-bold text-stone-900 text-sm">Naimul Islam</span>
                  <span className="block font-sans uppercase tracking-widest text-xs text-amber-700 mt-0.5">Founder & Lead Engineer</span>
                </div>
              </div>
            </div>

            {/* Narrative Text */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
                  The Vision Behind <span className="italic font-light text-stone-600">NaimNTech</span>
                </h2>
                
                <div className="space-y-6 text-stone-600 font-sans font-light text-lg leading-relaxed">
                  <p>
                    I founded NaimNTech out of a deep frustration with the traditional "virtual assistant" model. Today's founders are building complex digital brands, yet industry-standard support often lacks the technical fluency required to navigate these modern ecosystems.
                  </p>
                  <p>
                    Coming from a robust background as a full-stack MERN developer with a specialized focus on comprehensive Shopify store management, I saw a massive gap in the market. Modern entrepreneurs don't just need someone to manage their calendar; they need a partner who can dive into the codebase, debug a broken API integration, optimize a fulfillment pipeline, and leverage cutting-edge AI workflows.
                  </p>
                  <p>
                    We operate as a strategic extension of your team. By combining software engineering precision with elite executive administration, we allow visionary leaders to completely step away from operational friction and focus on scaling their revenue and impact.
                  </p>
                </div>
              </div>

              {/* Core Capabilities Tech-Stack Visual */}
              <div className="pt-8 border-t border-stone-200">
                <span className="text-xs font-sans tracking-widest uppercase text-stone-400 block mb-4">Technical Fluency</span>
                <div className="flex flex-wrap gap-3">
                  {['MERN Stack Development', 'Shopify Customization', 'API Integrations', 'AI Content Workflows', 'E-commerce Logistics', 'Workflow Automation'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-stone-200 text-stone-700 font-sans text-sm rounded-sm shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-stone-900 text-stone-50 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <span className="text-amber-600 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              How We Operate
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Our Guiding Principles
            </h2>
            <p className="text-stone-400 font-sans font-light text-lg md:text-xl">
              The foundational values that dictate how we communicate, execute, and deliver results for our high-performing clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Value 1 */}
            <div className="p-10 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 hover:border-amber-700/30 hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-amber-600 mb-8 opacity-50 group-hover:opacity-100 transition duration-500">
                <span className="font-serif italic text-5xl">01.</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-stone-50">Technical Mastery</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                We speak the language of developers and e-commerce directors. From React and Node.js environments to complex Shopify architectures, we understand the exact technology that drives your revenue.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-10 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 hover:border-amber-700/30 hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-amber-600 mb-8 opacity-50 group-hover:opacity-100 transition duration-500">
                <span className="font-serif italic text-5xl">02.</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-stone-50">Proactive Automation</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                We believe in working smarter, not harder. By integrating advanced AI tools and automated workflows, we drastically reduce manual overhead, minimize human error, and increase the speed of execution.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-10 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 hover:border-amber-700/30 hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-amber-600 mb-8 opacity-50 group-hover:opacity-100 transition duration-500">
                <span className="font-serif italic text-5xl">03.</span>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-stone-50">Absolute Ownership</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                When you hand a project, ticket, or process to NaimNTech, consider it done. We take complete ownership of outcomes, providing transparent updates without ever requiring constant micromanagement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-stone-100 text-center px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Ready to elevate your operations?
          </h2>
          <p className="text-stone-600 font-sans font-light text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Stop letting technical bottlenecks and administrative friction slow down your growth. Let's build a scalable operational strategy.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-10 py-4 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-xl shadow-stone-300"
          >
            Partner With Us
            <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;