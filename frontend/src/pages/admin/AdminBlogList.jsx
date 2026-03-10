import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAdminBlogs, deleteBlog } from '../../redux/slices/blogSlice';

const AdminBlogList = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchAdminBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to permanently delete this article?")) {
      dispatch(deleteBlog(id));
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl font-serif text-stone-900 mb-1">Blog Management</h2>
          <p className="text-sm text-stone-500 font-sans">Manage, edit, or delete your technical insights.</p>
        </div>
        <Link 
          to="/admin/blogs/create" 
          className="bg-stone-900 text-stone-50 px-6 py-3 rounded-sm font-sans text-sm tracking-widest uppercase hover:bg-amber-700 transition duration-300 shadow-sm"
        >
          + Draft New Article
        </Link>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
           <svg className="animate-spin h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        </div>
      ) : blogs.length === 0 ? (
        <div className="bg-white border border-stone-200 p-12 text-center rounded-sm shadow-sm">
          <p className="text-stone-500 font-sans">No articles have been created yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200 text-left font-sans">
              <thead className="bg-stone-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Title & Details</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Date</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Status</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-stone-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-serif font-bold text-stone-900">{blog.title}</div>
                      <div className="text-xs text-stone-500 mt-1">
                         <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer" className="text-amber-700 hover:underline">/{blog.slug}</a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                      {formatDate(blog.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${blog.isPublished ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-stone-100 text-stone-600 border-stone-300'}`}>
                        {blog.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                      <Link 
                        to={`/admin/blogs/edit/${blog._id}`} 
                        className="text-stone-600 hover:text-amber-700 font-sans text-xs tracking-wider uppercase transition-colors"
                      >
                        Edit
                      </Link>
                      <button 
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-900 font-sans text-xs tracking-wider uppercase transition-colors"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlogList;