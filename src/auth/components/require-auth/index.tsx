import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { IRequireAuthProps } from '../../types';
import { useAuthContext } from '../../provider';

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const { isAuthorized, loading } = useAuthContext();
  const location = useLocation();
  if (!isAuthorized && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!loading) {
    return children || <Outlet />;
  }

  return null;
};
