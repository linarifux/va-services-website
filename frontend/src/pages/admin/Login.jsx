import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, resetAuthStatus } from '../../redux/slices/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      // Optional: Add a toast notification here in the future
    }

    // Redirect to dashboard if logged in
    if (isSuccess || user) {
      navigate('/admin/dashboard');
    }

    dispatch(resetAuthStatus());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 border border-stone-200 rounded-sm shadow-2xl shadow-stone-200/50">
        
        <div className="text-center">
          <h2 className="text-3xl font-serif text-stone-900 tracking-tight">
            NaimN<span className="text-amber-700 font-light italic">Tech</span> Workspace
          </h2>
          <p className="mt-2 text-sm text-stone-500 font-sans tracking-widest uppercase">
            Authorized Personnel Only
          </p>
        </div>

        {isError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-sans text-center">
            {message}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-sans font-medium text-stone-700 mb-1">
                Admin Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900"
                placeholder="admin@naimntech.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-sans font-medium text-stone-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 rounded-sm outline-none transition-all duration-300 font-sans text-stone-900"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-sm shadow-sm text-sm font-sans tracking-widest uppercase text-white bg-stone-900 hover:bg-amber-700 focus:outline-none disabled:bg-stone-400 transition duration-300"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Secure Login'
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;