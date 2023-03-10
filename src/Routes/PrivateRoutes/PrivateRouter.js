import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h2 className="text-4xl">Loading.....</h2>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{ form: location }} replace></Navigate>
};

export default PrivateRouter;