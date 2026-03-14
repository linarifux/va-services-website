const Testimonials = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
            Trusted by founders who demand <span className="italic font-light text-stone-600">excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Testimonial 1 */}
          <div className="p-10 border border-stone-200 bg-white rounded-sm relative">
            <svg className="absolute top-6 left-6 w-12 h-12 text-stone-100 -z-0" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative z-10 text-stone-700 font-serif text-lg leading-relaxed italic mb-8">
              "Working with Naim transformed how we operate. His ability to handle everything from complex backend store management to daily administrative tasks is unparalleled. He is truly an operational powerhouse."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-sans font-bold text-stone-500">
                JP
              </div>
              <div>
                <h4 className="text-stone-900 font-sans font-medium text-sm">Jeff Prescott</h4>
                <span className="text-stone-500 font-sans text-xs uppercase tracking-widest">CEO, Daily Defense</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-10 border border-stone-200 bg-white rounded-sm relative">
            <svg className="absolute top-6 left-6 w-12 h-12 text-stone-100 -z-0" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative z-10 text-stone-700 font-serif text-lg leading-relaxed italic mb-8">
              "I needed an assistant who understood modern tech stacks and AI tools, not just calendar management. Naim stepped in and immediately streamlined our workflow. Highly recommended for modern founders."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-sans font-bold text-stone-500">
                KA
              </div>
              <div>
                <h4 className="text-stone-900 font-sans font-medium text-sm">Kemdi Anosike</h4>
                <span className="text-stone-500 font-sans text-xs uppercase tracking-widest">Founder, BRIC</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;