import { ReactElement } from 'react';

export interface IAuthContext {
  isAuthorized: boolean;
  loading: boolean;
}

export interface IAuthProviderProps {
  children: ReactElement;
}
