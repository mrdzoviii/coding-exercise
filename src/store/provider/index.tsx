import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { IStoreProviderProps } from '../types';

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
