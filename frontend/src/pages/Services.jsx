import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  // State for the interactive tab menu
  const [activeTab, setActiveTab] = useState('shopify');

  // Data for the specialized tabs
  const specializedServices = [
    { 
      id: 'shopify', 
      label: 'Shopify', 
      desc: 'Complete Shopify architecture. From custom Liquid theme development and headless commerce builds to daily store management, app integrations, and conversion rate optimization.' 
    },
    { 
      id: 'amazon', 
      label: 'Amazon', 
      desc: 'End-to-end Amazon Seller Central management. We handle listing optimization, FBA/FBM logistics routing, PPC campaign monitoring, and maintaining pristine account health.' 
    },
    { 
      id: 'wordpress', 
      label: 'WordPress', 
      desc: 'Bespoke WordPress and WooCommerce solutions. We build highly optimized, secure, and easily manageable content platforms tailored to your brand identity.' 
    },
    { 
      id: 'custom-web', 
      label: 'Custom Web Dev', 
      desc: 'Full-stack engineering using the MERN stack (MongoDB, Express, React, Node.js). We build scalable web applications, custom internal tools, and robust APIs.' 
    },
    { 
      id: 'fulfillment', 
      label: 'Order Fulfillment', 
      desc: 'Streamlined logistics operations. We coordinate between your digital storefronts and 3PL partners to ensure seamless, error-free order processing and inventory syncing.' 
    },
    { 
      id: 'support', 
      label: 'Customer Support', 
      desc: 'High-touch customer experience management. We integrate with your helpdesk tools to resolve tickets quickly, manage returns, and maintain brand loyalty.' 
    },
    { 
      id: 'shipstation', 
      label: 'ShipStation', 
      desc: 'Advanced ShipStation configuration. We set up automation rules, multi-channel syncing, and optimized routing to drastically cut down your shipping and fulfillment overhead.' 
    },
  ];

  // Data for the broad operational categories (with images)
  const serviceDetails = [
    {
      id: 'ecommerce',
      category: 'E-commerce & Retail Operations',
      title: 'End-to-end Store Management.',
      description: 'We take the operational friction out of running your online business. From comprehensive Shopify and Amazon store management to inventory logistics and high-touch customer support, we ensure your storefront operates flawlessly while you focus on brand growth.',
      features: [
        'Shopify store setup, management, and theme customization',
        'Amazon store management and optimization',
        'Logistics coordination and order fulfillment workflows',
        'Premium customer support and ticket resolution',
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 'infrastructure',
      category: 'Web & Digital Infrastructure',
      title: 'Robust Technical Support.',
      description: 'Go beyond basic administration with our dedicated technical support. We build, maintain, and troubleshoot the digital architecture that powers your business, specializing in modern web technologies and custom application development.',
      features: [
        'Full-stack (MERN) application development and maintenance',
        'Custom web apps, API integrations, and troubleshooting',
        'E-commerce app development and platform enhancements',
        'Performance optimization and routine site maintenance',
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'ai-content',
      category: 'AI & Content Operations',
      title: 'Next-Generation Content Workflows.',
      description: 'Leverage the power of artificial intelligence to scale your brand presence. We manage your content pipeline from ideation to execution, utilizing advanced AI models to generate high-quality, engaging media at scale.',
      features: [
        'AI-generated video creation and scriptwriting',
        'Image generation, editing, and brand asset management',
        'Social media scheduling and platform management',
        'Automated content workflows and prompt engineering',
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'executive',
      category: 'Executive Administration',
      title: 'Strategic Operational Support.',
      description: 'Reclaim your bandwidth with elite executive assistance. We act as the gatekeepers to your time, managing the complex daily workflows, communications, and scheduling required to run a high-performing business.',
      features: [
        'Complex calendar synchronization and priority scheduling',
        'Inbox management and proactive communication routing',
        'Workflow automation and operational system setup',
        'Data entry, research, and comprehensive reporting',
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 block">
            Capabilities
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Comprehensive support <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">for modern visionaries.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            From deep technical infrastructure to day-to-day executive administration, we provide the operational backbone your business needs to scale effortlessly.
          </p>
        </div>
      </section>

      {/* NEW: Specialized Expertise Tab Menu */}
      <section className="py-20 bg-stone-100 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900">Platform & Process Mastery</h2>
            <p className="text-stone-500 font-sans mt-2">Select a specialty to learn how we manage it.</p>
          </div>

          {/* Tab Buttons (Scrollable on mobile) */}
          <div className="flex overflow-x-auto hide-scrollbar border-b border-stone-300 mb-8">
            <div className="flex space-x-2 pb-2 mx-auto min-w-max">
              {specializedServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-5 py-2.5 text-sm font-sans tracking-wide rounded-t-sm transition-all duration-300 ${
                    activeTab === service.id
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'bg-transparent text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Area */}
          <div className="bg-white p-8 md:p-12 rounded-sm border border-stone-200 shadow-sm min-h-[180px] flex items-center justify-center text-center">
            {specializedServices.map((service) => (
              <div 
                key={service.id} 
                className={`${activeTab === service.id ? 'block' : 'hidden'} animate-fade-in`}
              >
                <h3 className="text-xl font-serif text-amber-700 mb-4">{service.label} Operations</h3>
                <p className="text-stone-600 font-sans font-light text-lg leading-relaxed max-w-3xl mx-auto">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broad Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {serviceDetails.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-stone-100 border border-stone-200 rounded-sm flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-stone-500 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm">
                    {service.category}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-stone-600 font-sans font-light text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700 font-sans font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Block with Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square md:aspect-[4/3] w-full bg-stone-200 rounded-sm overflow-hidden group border border-stone-200 shadow-xl shadow-stone-300/30">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover object-center grayscale-[60%] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
                    onError={(e) => {
                      // Fallback if the image URL fails to load
                      e.target.onerror = null; 
                      e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23e7e5e4%22%2F%3E%3Ctext%20x%3D%22400%22%20y%3D%22300%22%20font-family%3D%22sans-serif%22%20font-size%3D%2220%22%20font-style%3D%22italic%22%20fill%3D%22%23a8a29e%22%20text-anchor%3D%22middle%22%3ENaimNTech%20Visual%3C%2Ftext%3E%3C%2Fsvg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-stone-900 text-stone-50 border-t border-stone-800 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Need a custom operational solution?
          </h2>
          <p className="text-stone-400 font-sans font-light text-lg mb-10 max-w-xl mx-auto">
            Every business is unique. Contact us to discuss your specific infrastructure, e-commerce, or administrative bottlenecks.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-transparent border border-stone-50 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 hover:border-amber-700 transition duration-300 rounded-sm"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;