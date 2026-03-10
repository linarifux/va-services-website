import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../redux/slices/blogSlice';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog);

  // If a user navigates directly to a URL, the blogs array might be empty
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  const post = blogs.find((b) => b.slug === slug);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex justify-center items-center">
        <svg className="animate-spin h-10 w-10 text-amber-700" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (!post && !isLoading) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl font-serif text-stone-900 mb-4">Article Not Found</h1>
        <p className="text-stone-600 font-sans font-light mb-8">The post you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/blog')} className="px-8 py-3 bg-stone-900 text-white text-sm uppercase tracking-widest rounded-sm hover:bg-amber-700 transition">
          Return to Blog
        </button>
      </div>
    );
  }

  // Safe check before rendering
  if (!post) return null;

  return (
    <article className="bg-stone-50 min-h-screen pb-24">
      
      {/* Article Header */}
      <header className="pt-24 pb-16 md:pt-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <Link to="/blog" className="inline-flex items-center text-sm font-sans tracking-widest uppercase text-stone-500 hover:text-amber-700 transition-colors duration-300 mb-10">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
            Back to All Articles
          </Link>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            {post.tags && post.tags.map((tag, i) => (
               <span key={i} className="text-xs font-sans tracking-widest uppercase text-amber-700 font-medium bg-amber-50 px-3 py-1 rounded-sm border border-amber-100">
                 {tag}
               </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-stone-500 font-sans text-sm tracking-wider">
            <span>By {post.author}</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
            <span>{formatDate(post.createdAt)}</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="px-4 sm:px-6 lg:px-8 mt-16">
        <div 
          className="max-w-3xl mx-auto prose prose-stone prose-lg prose-headings:font-serif prose-headings:font-normal prose-a:text-amber-700 hover:prose-a:text-amber-800 prose-img:rounded-sm"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        {/* Note: If you don't have @tailwindcss/typography installed, standard HTML tags will fall back to your index.css resets. For rich blog posts, installing '@tailwindcss/typography' is highly recommended. */}
      </div>

      {/* Article Footer */}
      <div className="max-w-3xl mx-auto px-4 mt-20 pt-10 border-t border-stone-200 text-center">
         <h3 className="text-2xl font-serif text-stone-900 mb-4">Enjoyed this article?</h3>
         <p className="text-stone-600 font-sans font-light mb-8">Let's discuss how we can implement these strategies in your business.</p>
         <Link to="/contact" className="inline-block px-10 py-4 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm">
            Book a Consultation
         </Link>
      </div>

    </article>
  );
};

export default BlogPost;