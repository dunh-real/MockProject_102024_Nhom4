import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const token = Cookies.get('jwt');

    return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;