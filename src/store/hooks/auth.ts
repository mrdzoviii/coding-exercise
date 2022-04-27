import { useCallback } from 'react';
import { setUser, User } from '../reducers';
import { AppDispatch } from './root';

export const useSetUser = (dispatch: AppDispatch) => {
  return useCallback(
    (user: User) => {
      dispatch(setUser(user));
    },
    [dispatch]
  );
};
