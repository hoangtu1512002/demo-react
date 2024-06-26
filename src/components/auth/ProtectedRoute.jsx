// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if(loading) 
  {
    return <></>;
  }
  
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
