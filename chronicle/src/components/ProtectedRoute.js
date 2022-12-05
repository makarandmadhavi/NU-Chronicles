import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    if (!sessionStorage['user']){
        return <Navigate to='/' />;
    }
    return children
}
