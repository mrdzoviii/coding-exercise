import { useCallback } from 'react';
import { setUser } from '../reducers';
import { User } from '../types';
import { AppDispatch } from '../store';

export const useSetUser = (dispatch: AppDispatch) => {
  return useCallback(
    (user: User | null) => {
      dispatch(setUser(user));
    },
    [dispatch]
  );
};
