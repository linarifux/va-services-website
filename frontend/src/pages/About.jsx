import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Bridging the gap between <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">operations and engineering.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            NaimNTech was built on a simple premise: modern businesses don't just need administrative help; they require deep technical and e-commerce expertise to truly scale.
          </p>
        </div>
      </section>

      {/* The Founder / Narrative Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Abstract Founder Image / Aesthetic Block */}
            <div className="relative aspect-[4/5] w-full bg-stone-200 rounded-sm overflow-hidden border border-stone-200 shadow-2xl shadow-stone-300/50">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-stone-200 to-stone-100 opacity-80"></div>
              {/* Decorative elements to make it feel premium */}
              <div className="absolute -top-[20%] -right-[20%] w-[70%] h-[70%] bg-stone-50/40 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-amber-700/10 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                 <span className="font-sans font-bold tracking-tighter text-stone-400 text-6xl opacity-20">NI</span>
              </div>
            </div>

            {/* Narrative Text */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
                The Vision Behind <span className="italic font-light">NaimNTech</span>
              </h2>
              
              <div className="space-y-6 text-stone-600 font-sans font-light text-lg leading-relaxed border-l-2 border-amber-700/30 pl-6 sm:pl-8">
                <p>
                  Founded by Naimul Islam, NaimNTech emerged from a deep frustration with the traditional "virtual assistant" model. Industry-standard support often lacked the technical fluency required to navigate today's complex digital ecosystems.
                </p>
                <p>
                  With a robust background as a full-stack MERN developer and a specialized focus on complete Shopify store management, Naimul saw an opportunity to provide a higher caliber of support. Modern founders don't just need calendar management; they need someone who can dive into the codebase, optimize an e-commerce fulfillment pipeline, and leverage cutting-edge AI workflows.
                </p>
                <p>
                  Today, NaimNTech operates as a strategic extension of your business. We combine software engineering precision with elite executive administration, allowing visionary leaders to step away from the operational friction and focus entirely on scaling their impact.
                </p>
              </div>

              <div className="pt-8">
                <p className="font-serif italic text-stone-900 text-xl">
                  "We don't just manage tasks; we engineer operational success."
                </p>
                <p className="font-sans font-medium uppercase text-xs tracking-widest text-stone-500 mt-3">
                  — Naimul Islam, Founder
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Our Guiding Principles
            </h2>
            <p className="text-stone-400 font-sans font-light text-lg">
              The foundational values that dictate how we operate, communicate, and deliver results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Value 1 */}
            <div className="p-8 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 transition duration-500">
              <div className="text-amber-600 mb-6">
                <span className="font-serif italic text-4xl">01.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Technical Fluency</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                We speak the language of developers and e-commerce directors. From React and Node.js environments to complex Shopify architectures, we understand the technology that drives your revenue.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-8 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 transition duration-500">
              <div className="text-amber-600 mb-6">
                <span className="font-serif italic text-4xl">02.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Proactive Automation</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                We believe in working smarter, not harder. By integrating advanced AI tools and automated workflows, we drastically reduce manual overhead and increase the speed of execution.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-8 border border-stone-800 rounded-sm bg-stone-900 hover:bg-stone-800 transition duration-500">
              <div className="text-amber-600 mb-6">
                <span className="font-serif italic text-4xl">03.</span>
              </div>
              <h3 className="text-xl font-serif mb-4">Absolute Ownership</h3>
              <p className="text-stone-400 font-sans font-light leading-relaxed">
                When you hand a project or process to NaimNTech, consider it done. We take complete ownership of outcomes, providing transparent updates without requiring constant micromanagement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
            Ready to elevate your operations?
          </h2>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 mt-8 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm shadow-xl shadow-stone-200"
          >
            Partner With Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;