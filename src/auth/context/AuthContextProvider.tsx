import { Context, createContext, FC, ReactElement, useContext, useMemo } from 'react';
import { useAuthFirebase } from '../hooks';

export interface IAuthContext {
  isAuthorized: boolean;
  loading: boolean;
}

export interface IAuthContextProviderProps {
  children: ReactElement;
}

const AuthContext = createContext<IAuthContext>({ loading: true, isAuthorized: false });

export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
  const { user, loading } = useAuthFirebase();
  const contextValue = useMemo(() => ({ loading, isAuthorized: user !== null }), [loading, user]);
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): IAuthContext => {
  return useContext<IAuthContext>(AuthContext as Context<IAuthContext>);
};
