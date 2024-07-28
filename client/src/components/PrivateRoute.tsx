// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/store/store';
import Loader from '@/components/shared/Loader';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useSelector(selectAuth)

    if (loading) {
        return <Loader />; // You can replace this with a loading spinner component
    }

    return isAuthenticated ? children : <Navigate to='/sign-in' />;
};

export default PrivateRoute;
