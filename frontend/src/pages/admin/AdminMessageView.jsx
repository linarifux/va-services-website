import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchMessages, deleteMessage, updateMessageStatus } from '../../redux/slices/contactSlice';

const AdminMessageView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { messages, isLoading } = useSelector((state) => state.contact);

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(fetchMessages());
    }
  }, [dispatch, messages.length]);

  const targetMessage = messages.find((m) => m._id === id);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to permanently delete this inquiry?")) {
      dispatch(deleteMessage(id));
      navigate('/admin/dashboard');
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    dispatch(updateMessageStatus({ id, status: newStatus }));
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading && messages.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <svg className="animate-spin h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
      </div>
    );
  }

  if (!targetMessage && !isLoading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-serif text-stone-900 mb-4">Message Not Found</h2>
        <p className="text-stone-600 font-sans font-light mb-8">This inquiry may have been deleted or does not exist.</p>
        <Link to="/admin/dashboard" className="px-6 py-3 bg-stone-900 text-stone-50 text-sm uppercase tracking-widest rounded-sm hover:bg-amber-700 transition">
          Return to Dashboard
        </Link>
      </div>
    );
  }

  if (!targetMessage) return null;

  // Determine colors based on status
  const getStatusColor = (status) => {
    switch(status) {
      case 'Resolved': return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'In Progress': return 'bg-blue-50 border-blue-200 text-blue-700';
      default: return 'bg-amber-50 border-amber-200 text-amber-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-serif text-stone-900 mb-1">Inquiry Details</h2>
          <p className="text-sm text-stone-500 font-sans">Reviewing submission from {targetMessage.name}.</p>
        </div>
        <Link to="/admin/dashboard" className="text-sm font-sans uppercase tracking-widest text-stone-500 hover:text-amber-700 transition">
          &larr; Back to Dashboard
        </Link>
      </div>

      <div className="bg-white border border-stone-200 rounded-sm shadow-sm overflow-hidden p-6 sm:p-8">
        
        {/* Header Section */}
        <div className="border-b border-stone-100 pb-6 mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-serif text-stone-900 mb-1">{targetMessage.name}</h3>
            <a href={`mailto:${targetMessage.email}`} className="text-amber-700 hover:text-amber-800 transition font-sans text-sm block mb-3">
              {targetMessage.email}
            </a>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-800 border border-stone-200">
              Interest: {targetMessage.serviceOfInterest || 'General Support'}
            </span>
          </div>
          <div className="text-left sm:text-right flex flex-col items-start sm:items-end">
            <span className="text-xs font-sans tracking-widest uppercase text-stone-400 block mb-1">Received On</span>
            <span className="text-sm text-stone-600 font-sans mb-3">{formatDate(targetMessage.createdAt)}</span>
            
            {/* Interactive Status Dropdown */}
            <select 
              value={targetMessage.status || 'Pending'} 
              onChange={handleStatusChange}
              className={`text-xs font-medium tracking-wider uppercase border px-3 py-1.5 rounded-sm outline-none cursor-pointer appearance-none text-center ${getStatusColor(targetMessage.status || 'Pending')}`}
            >
              <option value="Pending" className="text-stone-900 bg-white">Pending</option>
              <option value="In Progress" className="text-stone-900 bg-white">In Progress</option>
              <option value="Resolved" className="text-stone-900 bg-white">Resolved</option>
            </select>
          </div>
        </div>

        {/* Message Content */}
        <div className="py-4">
          <h4 className="text-xs font-sans tracking-widest uppercase text-stone-400 mb-4">Message / Project Details</h4>
          <div className="bg-stone-50 p-6 rounded-sm border border-stone-100">
            <p className="text-stone-800 font-sans leading-relaxed whitespace-pre-wrap">
              {targetMessage.message}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-8 mt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button 
            onClick={handleDelete}
            className="w-full sm:w-auto px-6 py-3 bg-transparent text-red-600 border border-red-200 font-sans text-sm tracking-wider uppercase hover:bg-red-50 transition duration-300 rounded-sm"
          >
            Delete Inquiry
          </button>
          
          <a 
            href={`mailto:${targetMessage.email}?subject=Re: Your Inquiry to NaimNTech&body=Hi ${targetMessage.name},%0D%0A%0D%0AThank you for reaching out to us regarding ${targetMessage.serviceOfInterest}.%0D%0A%0D%0A`}
            className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-stone-50 font-sans text-sm tracking-wider uppercase hover:bg-amber-700 transition duration-300 rounded-sm flex justify-center items-center shadow-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Reply via Email
          </a>
        </div>

      </div>
    </div>
  );
};

export default AdminMessageView;