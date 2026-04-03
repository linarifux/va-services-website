import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

// Public Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Admin Imports
import Login from './pages/admin/Login';
import AdminLayout from './components/layout/AdminLayout';
import AdminRoute from './components/routing/AdminRoute';
import Dashboard from './pages/admin/Dashboard';
import AdminMessageView from './pages/admin/AdminMessageView'; // Import Message View
import AdminBlogList from './pages/admin/AdminBlogList'; 
import AdminBlogs from './pages/admin/AdminBlogs'; 
import AdminBlogEdit from './pages/admin/AdminBlogEdit';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      
      <Routes>
        {/* Public Routes wrapped in Navbar/Footer Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Public Admin Login Route */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            
            {/* New Message Viewing Route */}
            <Route path="messages/:id" element={<AdminMessageView />} />
            
            {/* Blog Management Routes */}
            <Route path="blogs" element={<AdminBlogList />} /> 
            <Route path="blogs/create" element={<AdminBlogs />} />
            <Route path="blogs/edit/:id" element={<AdminBlogEdit />} />
          </Route>
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;