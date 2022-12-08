import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    if (!localStorage['user']){
        alert("Please login First to access this page");
        return <Navigate to='/' />;
    }
    return children
}
