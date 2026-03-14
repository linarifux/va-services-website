const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description: 'We start with a deep dive into your current operations, technical bottlenecks, and growth goals to identify where we can make the highest impact.',
  },
  {
    number: '02',
    title: 'Strategic Blueprint',
    description: 'We design a custom operational strategy, mapping out the exact workflows, tech integrations, and administrative tasks we will take over.',
  },
  {
    number: '03',
    title: 'Seamless Integration',
    description: 'Our team integrates into your communication channels and software stack, ensuring a frictionless handover of responsibilities.',
  },
  {
    number: '04',
    title: 'Execution & Scaling',
    description: 'We handle the daily heavy lifting while proactively suggesting automation and optimizations as your business continues to grow.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-900 text-stone-50 relative overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-amber-600 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
            A structured framework <br className="hidden sm:block" />
            <span className="italic font-light text-stone-400">for seamless collaboration.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Hidden on mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[1px] bg-stone-800 group-hover:bg-amber-700/50 transition-colors duration-500"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-start">
                <div className="w-14 h-14 bg-stone-800 border border-stone-700 rounded-sm flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-600 transition-colors duration-500">
                  <span className="font-serif font-bold text-lg text-stone-300 group-hover:text-white transition-colors duration-500">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-500 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-stone-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-700/10 rounded-full blur-[150px] pointer-events-none"></div>
    </section>
  );
};

export default HowItWorks;