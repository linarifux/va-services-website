import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessages, deleteMessage } from '../../redux/slices/contactSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { messages, isLoading, isError, message } = useSelector((state) => state.contact);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      dispatch(deleteMessage(id));
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Helper function for dynamic badge styling
  const getStatusBadge = (status) => {
    switch(status) {
      case 'Resolved': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'In Progress': return 'bg-blue-50 border-blue-200 text-blue-700';
      default: return 'bg-amber-50 border-amber-200 text-amber-700'; // Pending
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg className="animate-spin h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-sm">
        Error loading inquiries: {message}
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-xl font-serif text-stone-900 mb-1">Recent Inquiries</h2>
          <p className="text-sm text-stone-500 font-sans">Manage your latest client contact submissions.</p>
        </div>
        <div className="bg-white border border-stone-200 px-4 py-2 rounded-sm shadow-sm">
          <span className="text-sm font-sans font-medium text-stone-700">Total: {messages.length}</span>
        </div>
      </div>

      {messages.length === 0 ? (
        <div className="bg-white border border-stone-200 p-12 text-center rounded-sm shadow-sm">
          <p className="text-stone-500 font-sans">No inquiries have been received yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200 text-left font-sans">
              <thead className="bg-stone-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Date</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Client</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Service Requested</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase">Status</th>
                  <th scope="col" className="px-6 py-4 text-xs font-medium tracking-widest text-stone-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-stone-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-500">
                      {formatDate(msg.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-stone-900">{msg.name}</div>
                      <div className="text-sm text-stone-500">
                        <a href={`mailto:${msg.email}`} className="hover:text-amber-700 transition">{msg.email}</a>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200">
                        {msg.serviceOfInterest || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-medium text-xs tracking-wider uppercase border px-2 py-1 rounded-sm ${getStatusBadge(msg.status || 'Pending')}`}>
                        {msg.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link 
                        to={`/admin/messages/${msg._id}`}
                        className="text-stone-600 hover:text-amber-700 font-sans text-xs tracking-wider uppercase transition-colors mr-4"
                      >
                        View
                      </Link>
                      <button 
                        onClick={() => handleDelete(msg._id)}
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

export default Dashboard;