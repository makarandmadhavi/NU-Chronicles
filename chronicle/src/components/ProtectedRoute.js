import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    if (!localStorage['user']){
        return <Navigate to='/' />;
    }
    return children
}
