import React from 'react';
import { Navigate } from 'react-router-dom';

function RedirectedRoute({ component: Component, ...props }) {
  return !props.loggedIn ? <Component {...props} /> : <Navigate to="/movies" />;
}

export default RedirectedRoute;
