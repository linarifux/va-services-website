import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Pre-populated with your actual client portfolio
  const projects = [
    {
      id: 1,
      title: 'My Daily Defense',
      category: 'Shopify',
      tech: ['Shopify', 'Liquid', 'E-commerce'],
      description: 'End-to-end custom Shopify storefront development and operational management for a premium wellness and supplement brand.',
      link: 'https://mydailydefense.com/',
      image: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 2,
      title: 'Reviuxx',
      category: 'MERN Stack',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      description: 'A highly scalable, full-stack web application engineered from the ground up using the MERN stack for robust data management and performance.',
      link: 'https://reviuxx.com/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 3,
      title: 'Teddy Tennis UK',
      category: 'Amazon',
      tech: ['Amazon Seller Central', 'FBA', 'Listing SEO'],
      description: 'Comprehensive Amazon storefront optimization, logistics routing, and account health management for a popular children\'s sports academy brand.',
      link: 'https://teddytennisuk.co.uk/',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 4,
      title: 'Versace Dominican',
      category: 'WordPress',
      tech: ['WordPress', 'Custom Themes', 'Booking'],
      description: 'A bespoke, highly visual WordPress website designed to elevate the digital presence and online reservation system for a premium dining experience.',
      link: 'https://versacedominicanrest.com/',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 5,
      title: 'Meta Repair',
      category: 'Order Fulfillment',
      tech: ['ShipStation', 'Logistics', 'Automation'],
      description: 'Streamlined logistics architecture and advanced ShipStation integration to handle high-volume order processing for a tech repair service provider.',
      link: 'https://metarepair.co/',
      image: 'https://images.unsplash.com/photo-1581092921461-7d5b1285038c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 6,
      title: 'Floating Relief',
      category: 'Order Fulfillment',
      tech: ['ShipStation', 'Inventory Sync', '3PL'],
      description: 'Engineered automated fulfillment workflows and multi-channel inventory syncing for a modern wellness and relaxation equipment brand.',
      link: 'https://floatingrelief.com/',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 7,
      title: 'London Piano Teachers',
      category: 'Customer Support',
      tech: ['Helpdesk', 'Client Relations', 'Scheduling'],
      description: 'High-touch customer experience management, seamlessly handling incoming inquiries and booking coordination for elite music educators.',
      link: 'https://londonpianoteachers.co.uk/',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1000',
    },
    {
      id: 8,
      title: 'Diesel Patriots',
      category: 'Customer Support',
      tech: ['Ticket Resolution', 'Brand Loyalty', 'CX'],
      description: 'Multi-channel customer support system setup and ongoing ticket resolution for an automotive and lifestyle apparel brand.',
      link: 'https://dieselpatriots.com/',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  // Extract unique categories for the filter buttons
  const categories = ['All', ...new Set(projects.map(item => item.category))];

  // Filter the projects based on the active state
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 block">
            Selected Works
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Engineered for <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">performance & scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            A curated selection of e-commerce storefronts, custom MERN applications, and operational digital infrastructure built by NaimNTech.
          </p>
        </div>
      </section>

      {/* Portfolio Grid & Filters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Menu */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2.5 text-sm font-sans tracking-wide rounded-full transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white border border-stone-200 text-stone-600 hover:border-amber-700/50 hover:text-amber-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id} 
                className="group flex flex-col bg-white border border-stone-200 rounded-sm overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-500 animate-fade-in cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center grayscale-[40%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23e7e5e4%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22300%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-style%3D%22italic%22%20fill%3D%22%23a8a29e%22%20text-anchor%3D%22middle%22%3ENaimNTech%20Project%3C%2Ftext%3E%3C%2Fsvg%3E';
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-6 py-3 border border-white text-white font-sans text-xs tracking-widest uppercase backdrop-blur-sm flex items-center gap-2">
                      Visit Live Site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans tracking-widest uppercase text-amber-700 font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-stone-900 mb-4 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-stone-600 font-sans font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-stone-100">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-stone-50 border border-stone-200 text-stone-500 text-xs font-sans rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <p className="text-stone-500 font-sans font-light text-xl italic">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-stone-900 text-stone-50 border-t border-stone-800 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to build your next project?
          </h2>
          <p className="text-stone-400 font-sans font-light text-lg mb-10 max-w-xl mx-auto">
            Whether you need a scalable MERN application or a high-converting Shopify build, we have the technical depth to deliver.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-transparent border border-stone-50 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 hover:border-amber-700 transition duration-300 rounded-sm"
          >
            Request an Estimate
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;