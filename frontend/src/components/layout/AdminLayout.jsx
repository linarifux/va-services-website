import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, resetAuthStatus } from '../../redux/slices/authSlice';

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetAuthStatus());
    navigate('/admin/login');
  };

  const navLinks = [
    { name: 'Inquiries', path: '/admin/dashboard', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Blog Manager', path: '/admin/blogs', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
  ];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-stone-900 text-stone-300 flex flex-col shadow-2xl shrink-0">
        <div className="p-6 border-b border-stone-800">
          <Link to="/" className="text-xl font-serif text-stone-50 tracking-wide block mb-1">
            NaimN<span className="text-amber-600 italic">Tech</span>
          </Link>
          <span className="text-xs tracking-widest uppercase text-stone-500 font-medium">Workspace</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center px-4 py-3 text-sm tracking-wider uppercase rounded-sm transition-colors duration-300 ${
                location.pathname === link.path 
                  ? 'bg-amber-700 text-white' 
                  : 'hover:bg-stone-800 hover:text-stone-50'
              }`}
            >
              <svg className="w-5 h-5 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
              </svg>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-stone-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-50 uppercase">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="truncate">
              <p className="text-sm text-stone-50 truncate">{user?.name}</p>
              <p className="text-xs text-stone-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-2 border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition duration-300 rounded-sm text-sm tracking-widest uppercase"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-stone-50">
        <header className="bg-white border-b border-stone-200 px-8 py-6 shrink-0 shadow-sm">
          <h1 className="text-2xl font-serif text-stone-900">Dashboard</h1>
        </header>
        
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;