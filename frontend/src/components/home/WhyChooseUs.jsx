const features = [
  {
    title: 'E-Commerce & Platform Fluency',
    description: 'Beyond basic admin, we specialize in managing storefronts, optimizing themes, and handling complex operational logistics seamlessly.',
  },
  {
    title: 'AI-Enhanced Efficiency',
    description: 'We leverage cutting-edge AI tools and workflow automations to deliver faster turnaround times and superior content quality.',
  },
  {
    title: 'Technical Infrastructure Support',
    description: 'From frontend adjustments to seamless API integrations, we possess the technical depth to support your digital ecosystem.',
  },
  {
    title: 'Dedicated Partnership',
    description: 'We don’t just execute tasks; we act as a strategic extension of your team, proactively identifying areas for growth and optimization.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <div>
            <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
              The NaimNTech Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
              More than assistants. <br />
              <span className="italic font-light text-stone-600">We are operational partners.</span>
            </h2>
            <p className="text-stone-600 font-sans font-light text-lg mb-8 leading-relaxed">
              Standard virtual assistants just check boxes. We bring deep technical expertise, e-commerce mastery, and an eye for modern automation to the table. We elevate your operations so your business can scale without friction.
            </p>
            
            <div className="hidden lg:block w-32 h-[1px] bg-amber-700/30"></div>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-8 md:space-y-10">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full border border-amber-700/30 flex items-center justify-center bg-stone-50">
                    <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-stone-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 font-sans font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;