import { Navigate, useLocation } from 'react-router';
import { FC } from 'react';
import { useRootStateSelector } from '../../store';

export interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const isAuthorized = useRootStateSelector((state) => state.auth.isAuthorized);
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
