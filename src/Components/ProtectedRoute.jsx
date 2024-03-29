import { Navigate } from 'react-router-dom';
import { useUI } from '../Context/UIContext';

const ProtectedRoute = ({ children }) => {
  const { userRole } = useUI();
  if (userRole != 'admin') {
    document.getElementById('root').classList.remove('modal-open');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;