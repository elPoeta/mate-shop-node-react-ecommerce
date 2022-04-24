import React from "react";
import { Navigate } from 'react-router-dom';
import { UserI } from "../../features/auth/userI";

type ProtectedType = {
  user: UserI,
  redirectPath?: string;
  children: JSX.Element;
}
export const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children,
}: ProtectedType): JSX.Element => user.isAdmin ? children : <Navigate to={redirectPath} replace /> 
