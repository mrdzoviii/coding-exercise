import { useCallback, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppDispatch, useSetUser } from '../../store';
import {
  auth,
  User,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  googleProvider,
  db,
  addDoc,
  collection,
  decodeFirebaseJwt
} from '../firebase';

export interface IAuthFirebaseHook {
  user?: User | null;
  loading: boolean;
}

export interface ILogInWithEmailAndPasswordHook {
  login: (email: string, password: string) => Promise<void>;
}

export interface ILogInWithGoogleHook {
  loginWithGoogle: () => Promise<void>;
}

export interface IRegisterHook {
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuthFirebase = (): IAuthFirebaseHook => {
  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      user.getIdToken().then((jwt: string) => {
        const {
          email,
          firebase: { sign_in_provider: provider },
          name,
          user_id: userId
        } = decodeFirebaseJwt(jwt);
        dispatchSetUser({ email, provider, name, userId });
      });
    }
    if (error) {
      dispatchSetUser(null);
    }
  }, [user, error, dispatchSetUser, loading]);

  return { user, loading };
};

export const useLogInWithGoogle = (): ILogInWithGoogleHook => {
  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);
  const loginWithGoogle = useCallback(async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const { user } = res;
      const jwt = await user.getIdToken();
      const {
        email,
        firebase: { sign_in_provider: provider },
        name,
        user_id: userId
      } = decodeFirebaseJwt(jwt);
      dispatchSetUser({ email, provider, name, userId });
    } catch (err) {
      const signInGoogleError = err as unknown as { message: string };
      console.log(signInGoogleError.message);
    }
  }, [dispatchSetUser]);

  return { loginWithGoogle };
};

export const useLogInWithEmailAndPassword = (): ILogInWithEmailAndPasswordHook => {
  const dispatch = useAppDispatch();
  const dispatchSetUser = useSetUser(dispatch);

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const { user } = res;
        const jwt = await user.getIdToken();
        const {
          firebase: { sign_in_provider: provider },
          name,
          user_id: userId
        } = decodeFirebaseJwt(jwt);
        dispatchSetUser({ email, provider, name, userId });
      } catch (err) {
        const signInError = err as unknown as { message: string };
        console.log(signInError.message);
      }
    },
    [dispatchSetUser]
  );

  return { login };
};

export const useRegister = (): IRegisterHook => {
  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = res;
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email
      });
    } catch (err) {
      const registerError = err as unknown as { message: string };
      console.log(registerError.message);
    }
  }, []);

  return { register };
};
