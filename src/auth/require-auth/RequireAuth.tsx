import { Navigate, useLocation } from 'react-router';
import { FC } from 'react';
import { useAuthContext } from '../context/AuthContextProvider';

export interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { isAuthorized, loading } = useAuthContext();
  const location = useLocation();
  if (!isAuthorized && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
