import { useCallback } from 'react';
import { useAppDispatch, useSetUser } from '../../store';
import {
  db,
  auth,
  signInWithPopup,
  signInWithEmailAndPassword,
  googleProvider,
  query,
  collection,
  getDocs,
  addDoc,
  where
} from '../../config/firebase';

export interface ILogInWithEmailAndPasswordHook {
  login: (email: string, password: string) => Promise<void>;
}

export interface ILogInWithGoogleHook {
  loginWithGoogle: () => Promise<void>;
}

export const useLogInWithGoogle = (): ILogInWithGoogleHook => {
  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);

  const loginWithGoogle = useCallback(async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
      const { user } = res;
      const q = query(collection(db, 'users'), where('uid', '==', user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, 'users'), {
          uid: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email
        });
      }
    } catch (err) {
      const signInError = err as unknown as { message: string };
      console.log(signInError.message);
    }
  }, []);

  return { loginWithGoogle };
};

export const useLogInWithEmailAndPassword = (): ILogInWithEmailAndPasswordHook => {
  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const { user } = res;
      console.log(user);
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'local',
        email
      });
    } catch (err) {
      const signInError = err as unknown as { message: string };
      console.log(signInError.message);
    }
  }, []);

  return { login };
};
