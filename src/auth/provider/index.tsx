import { Context, createContext, FC, useContext, useMemo } from 'react';
import { useAuthFirebase } from '../hooks';
import { IAuthContext, IAuthProviderProps } from '../types';

const AuthContext = createContext<IAuthContext>({ loading: true, isAuthorized: false });

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const { user, loading } = useAuthFirebase();
  const contextValue = useMemo(() => ({ loading, isAuthorized: user !== null }), [loading, user]);
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): IAuthContext => {
  return useContext<IAuthContext>(AuthContext as Context<IAuthContext>);
};
