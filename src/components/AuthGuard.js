import React from "react";
import { Redirect } from "react-router-dom";
import { isAuth } from '../services/authService';

function AuthGuard({ children }) {
  if (!isAuth()) {
    return <Redirect to="/" />;
  }

  return children;
}

export default AuthGuard;
