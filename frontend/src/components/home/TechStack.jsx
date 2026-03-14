const technologies = [
  'React.js', 'Node.js', 'Express', 'MongoDB', 
  'Shopify Plus', 'Liquid', 'Tailwind CSS', 
  'OpenAI / LLMs', 'ShipStation', 'Salesforce'
];

const TechStack = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          
          <div className="w-full md:w-1/3 text-center md:text-left shrink-0">
            <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs mb-2 block">
              Ecosystems
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
              Fluent in modern <br className="hidden md:block" />
              <span className="italic font-light text-stone-500">tech stacks.</span>
            </h3>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-5 py-3 bg-stone-50 border border-stone-200 rounded-sm text-sm font-sans tracking-wide text-stone-600 hover:text-amber-700 hover:border-amber-700/30 hover:bg-white hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;