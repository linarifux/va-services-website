import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContactForm, resetContactState } from '../redux/slices/contactSlice';

const Contact = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceOfInterest: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm(formData));
  };

  // Clean up and reset form on success
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        serviceOfInterest: '',
        message: '',
      });
      // Clear the success message after 5 seconds
      const timer = setTimeout(() => {
        dispatch(resetContactState());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, dispatch]);

  return (
    <div className="bg-stone-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Let's Connect
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
            Start the conversation.
          </h1>
          <p className="text-stone-600 font-sans font-light text-lg">
            Whether you need comprehensive operational management or specialized technical support, we're ready to integrate seamlessly into your business.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white border border-stone-200 shadow-xl shadow-stone-200/50 rounded-sm overflow-hidden">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-2 bg-stone-900 text-stone-50 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <p className="font-sans font-light text-stone-400 mb-12 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours to schedule a discovery call.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <span className="block font-sans text-sm uppercase tracking-widest text-stone-400 mb-1">Email</span>
                    <a href="mailto:naimntech@gmail.com" className="hover:text-amber-600 transition-colors duration-300">naimntech@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="block font-sans text-sm uppercase tracking-widest text-stone-400 mb-1">Global Operations</span>
                    <span className="font-sans font-light">Supporting visionary teams worldwide.</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-amber-700/20 blur-3xl z-0"></div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-3 p-10 sm:p-12 lg:p-16">
            
            {/* Status Messages */}
            {isSuccess && (
              <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm font-sans text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {message}
              </div>
            )}
            {isError && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm font-sans text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-sans font-medium text-stone-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-sans font-medium text-stone-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="serviceOfInterest" className="block text-sm font-sans font-medium text-stone-700">How can we help you?</label>
                <select
                  id="serviceOfInterest"
                  name="serviceOfInterest"
                  value={formData.serviceOfInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900 appearance-none"
                >
                  <option value="" disabled>Select a core service...</option>
                  <option value="Shopify & E-commerce Management">Shopify & E-commerce Management</option>
                  <option value="MERN Stack & Web Infrastructure">Web App & Digital Infrastructure</option>
                  <option value="AI Content & Video Operations">AI Content & Social Operations</option>
                  <option value="Executive Administration">Executive Administration</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-sans font-medium text-stone-700">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900 resize-none"
                  placeholder="Tell us a bit about your current operational bottlenecks..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 disabled:bg-stone-400 disabled:cursor-not-allowed transition duration-300 rounded-sm mt-4 flex justify-center items-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  "Submit Inquiry"
                )}
              </button>
            </form>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;