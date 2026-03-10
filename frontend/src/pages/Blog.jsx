import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../redux/slices/blogSlice';

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Helper to format the MongoDB date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-700 font-sans font-medium tracking-widest uppercase text-xs sm:text-sm mb-6 block">
            Insights & Updates
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            Thoughts on operations, <br className="hidden md:block" />
            <span className="italic font-light text-stone-600">technology, and scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Explore our latest articles on leveraging AI, optimizing e-commerce logistics, and building robust digital infrastructure.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <svg className="animate-spin h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}

          {isError && (
            <div className="bg-red-50 text-red-800 p-6 rounded-sm border border-red-200 text-center max-w-2xl mx-auto">
              <p className="font-sans font-medium">Error loading articles.</p>
              <p className="font-sans font-light mt-2">{message}</p>
            </div>
          )}

          {!isLoading && !isError && blogs.length === 0 && (
             <div className="text-center py-20">
               <p className="text-stone-500 font-sans font-light text-xl italic">No articles published yet. Check back soon.</p>
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((post) => (
              <article 
                key={post._id} 
                className="bg-white border border-stone-200 rounded-sm overflow-hidden flex flex-col hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-500 group"
              >
                {/* Abstract Image Placeholder for Blog Card */}
                <Link to={`/blog/${post.slug}`} className="block relative aspect-video bg-stone-100 overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-stone-50 opacity-80"></div>
                   <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-700/10 rounded-full blur-2xl group-hover:bg-amber-700/20 transition duration-500"></div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-sans tracking-widest uppercase text-amber-700 font-medium">
                      {post.tags && post.tags[0] ? post.tags[0] : 'Insight'}
                    </span>
                    <span className="text-xs font-sans tracking-wider text-stone-400">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-serif text-stone-900 mb-4 leading-snug group-hover:text-amber-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-stone-600 font-sans font-light leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {/* Stripping HTML tags for the preview if content is stored as HTML */}
                    {post.content.replace(/<[^>]+>/g, '')}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-sm font-sans text-stone-500">By {post.author}</span>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="text-sm font-sans tracking-widest uppercase text-stone-900 group-hover:text-amber-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      Read
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;