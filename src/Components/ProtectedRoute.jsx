import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userRole, children }) => {
  if (userRole != 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;