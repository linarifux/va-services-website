import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);

  // If there is a user (and ideally an admin check), render the nested routes (Outlet)
  // Otherwise, redirect to the login page
  return user && user.isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;