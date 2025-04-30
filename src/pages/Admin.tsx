
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import PreAccessPanel from '@/components/admin/PreAccessPanel';

const Admin = () => {
  const { isAuthenticated, logout } = useAuth();
  const [hasPreAccess, setHasPreAccess] = useState(false);
  
  useEffect(() => {
    // Forzar logout al montar el componente
    logout();
  }, []);
  
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  if (!hasPreAccess) {
    return <PreAccessPanel onAccess={() => setHasPreAccess(true)} />;
  }
  
  return <AdminLogin />;
};

export default Admin;
