import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { updateBlog, fetchAdminBlogs, clearBlogState } from '../../redux/slices/blogSlice';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TiptapLink from '@tiptap/extension-link'; // Renamed to avoid collision with react-router Link

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const buttonClass = (isActive) =>
    `p-2 rounded-sm transition-colors duration-200 focus:outline-none ${
      isActive ? 'bg-amber-100 text-amber-900 font-medium' : 'text-stone-600 hover:bg-stone-200'
    }`;

  return (
    <div className="flex flex-wrap gap-1 p-2 border-b border-stone-200 bg-stone-50 rounded-t-sm">
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={buttonClass(editor.isActive('heading', { level: 2 }))} title="Heading 2"><span className="font-serif font-bold">H2</span></button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={buttonClass(editor.isActive('heading', { level: 3 }))} title="Heading 3"><span className="font-serif font-bold text-sm">H3</span></button>
      <div className="w-px h-6 bg-stone-300 mx-1 self-center"></div>
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={buttonClass(editor.isActive('bold'))} title="Bold"><strong className="font-serif">B</strong></button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={buttonClass(editor.isActive('italic'))} title="Italic"><em className="font-serif">I</em></button>
      <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={buttonClass(editor.isActive('underline'))} title="Underline"><u className="font-serif">U</u></button>
      <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={buttonClass(editor.isActive('strike'))} title="Strikethrough"><s className="font-serif text-sm">S</s></button>
      <div className="w-px h-6 bg-stone-300 mx-1 self-center"></div>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={buttonClass(editor.isActive('bulletList'))} title="Bullet List"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M8 6h.01M8 12h.01M8 18h.01"></path></svg></button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={buttonClass(editor.isActive('orderedList'))} title="Ordered List"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6h14M7 12h14M7 18h14M3 6h.01M3 12h.01M3 18h.01"></path></svg></button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={buttonClass(editor.isActive('blockquote'))} title="Blockquote"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg></button>
      <div className="w-px h-6 bg-stone-300 mx-1 self-center"></div>
      <button type="button" onClick={() => { const url = window.prompt('Enter the URL'); if (url) { editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run(); } }} className={buttonClass(editor.isActive('link'))} title="Add Link"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></button>
      <button type="button" onClick={() => editor.chain().focus().unsetLink().run()} disabled={!editor.isActive('link')} className={`p-2 rounded-sm transition-colors duration-200 focus:outline-none ${editor.isActive('link') ? 'text-stone-600 hover:bg-stone-200' : 'text-stone-300 cursor-not-allowed'}`} title="Remove Link"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg></button>
    </div>
  );
};

const AdminBlogEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { blogs, isLoading, isSuccess, isError, message } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);

  const [isInitialized, setIsInitialized] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    tags: '',
    isPublished: false,
    author: user?.name || 'Admin',
  });

  // Load blogs if directly navigating to this URL
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchAdminBlogs());
    }
  }, [dispatch, blogs.length]);

  const targetBlog = blogs.find((b) => b._id === id);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TiptapLink.configure({ openOnClick: false }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-stone prose-sm sm:prose-base focus:outline-none min-h-[300px] max-w-none p-4 font-sans text-stone-900',
      },
    },
  });

  // Populate data once the blog is found and editor is ready
  useEffect(() => {
    if (targetBlog && editor && !isInitialized) {
      setFormData({
        title: targetBlog.title,
        slug: targetBlog.slug,
        tags: targetBlog.tags ? targetBlog.tags.join(', ') : '',
        isPublished: targetBlog.isPublished,
        author: targetBlog.author,
      });
      editor.commands.setContent(targetBlog.content);
      setIsInitialized(true);
    }
  }, [targetBlog, editor, isInitialized]);

  // Handle Toast Messages
  useEffect(() => {
    if (isSuccess || isError) {
      const timer = setTimeout(() => {
        dispatch(clearBlogState());
        if (isSuccess) {
            navigate('/admin/blogs');
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, isError, dispatch, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'title') {
      const generatedSlug = value.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      setFormData((prev) => ({ ...prev, title: value, slug: generatedSlug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const htmlContent = editor.getHTML();
    const formattedTags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    const blogData = {
      ...formData,
      content: htmlContent,
      tags: formattedTags,
    };

    dispatch(updateBlog({ id, blogData }));
  };

  if (isLoading && blogs.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg className="animate-spin h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif text-stone-900 mb-1">Edit Article</h2>
          <p className="text-sm text-stone-500 font-sans">Update content, tags, or publishing status.</p>
        </div>
        <Link to="/admin/blogs" className="text-sm font-sans uppercase tracking-widest text-stone-500 hover:text-amber-700 transition">
          &larr; Back to List
        </Link>
      </div>

      {isSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-sm text-sm font-sans flex items-center">
          <svg className="w-5 h-5 mr-3 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {message} Redirecting...
        </div>
      )}

      {isError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm text-sm font-sans flex items-center">
           <svg className="w-5 h-5 mr-3 shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          {message}
        </div>
      )}

      <div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-sans font-medium text-stone-700">Article Title</label>
              <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="slug" className="block text-sm font-sans font-medium text-stone-700">URL Slug</label>
              <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} required className="w-full px-4 py-3 bg-stone-100 border border-stone-200 text-stone-500 rounded-sm outline-none font-sans cursor-not-allowed" readOnly />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-sans font-medium text-stone-700">Article Content</label>
            <div className="bg-white border border-stone-200 rounded-sm overflow-hidden focus-within:border-amber-700 focus-within:ring-2 focus-within:ring-amber-700/20 transition-all duration-300">
              <MenuBar editor={editor} />
              <EditorContent editor={editor} className="bg-stone-50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
              <label htmlFor="tags" className="block text-sm font-sans font-medium text-stone-700">Tags (Comma separated)</label>
              <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900" />
            </div>
            
            <div className="flex items-center h-full pb-3">
              <input type="checkbox" id="isPublished" name="isPublished" checked={formData.isPublished} onChange={handleChange} className="w-5 h-5 text-amber-700 bg-stone-50 border-stone-300 rounded focus:ring-amber-700 accent-amber-700 cursor-pointer" />
              <label htmlFor="isPublished" className="ml-3 block text-sm font-sans font-medium text-stone-900 cursor-pointer">
                Publish to public blog
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex justify-end">
            <button type="submit" disabled={isLoading} className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 disabled:bg-stone-400 disabled:cursor-not-allowed transition duration-300 rounded-sm flex justify-center items-center shadow-sm">
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                "Update Article"
              )}
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default AdminBlogEdit;