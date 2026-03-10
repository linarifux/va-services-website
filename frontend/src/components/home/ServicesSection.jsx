import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Executive Administration',
    description: 'Comprehensive inbox management, calendar synchronization, and priority scheduling. We handle the noise so you can focus on high-impact decisions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'E-commerce Management',
    description: 'End-to-end operational support for your online storefront. From inventory updates and order fulfillment to theme customizations and customer experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Technical Administration',
    description: 'Ongoing website maintenance, platform integrations, and technical troubleshooting to ensure your digital infrastructure runs flawlessly 24/7.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'AI & Content Operations',
    description: 'Streamlined content generation, social media scheduling, and asset management utilizing the latest AI tools to keep your brand consistently engaging.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Comprehensive solutions for <br className="hidden sm:block" />
            <span className="italic font-light text-stone-600">modern businesses.</span>
          </h2>
          <p className="text-stone-600 font-sans font-light text-lg">
            We seamlessly integrate into your workflow, providing top-tier support across the critical areas that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 sm:p-10 border border-stone-100 bg-stone-50/50 hover:bg-white hover:border-amber-700/30 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 rounded-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-stone-900 text-stone-50 rounded-sm mb-8 group-hover:bg-amber-700 transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif text-stone-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-stone-600 font-sans font-light leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-stone-200 group-hover:border-amber-700/20 transition-colors duration-500">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-sm font-sans tracking-widest uppercase text-stone-900 group-hover:text-amber-700 transition-colors duration-300"
                >
                  Discover More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link 
            to="/services" 
            className="inline-block px-8 py-4 bg-transparent text-stone-900 border border-stone-300 font-sans text-sm tracking-wider uppercase hover:border-amber-700 hover:text-amber-700 transition duration-300 rounded-sm"
          >
            View Full Service Catalog
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;