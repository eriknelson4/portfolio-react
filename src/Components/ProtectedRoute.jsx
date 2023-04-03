import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userRole, children }) => {

  console.log('ProtectedRoute:', userRole);

  if (userRole != 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;