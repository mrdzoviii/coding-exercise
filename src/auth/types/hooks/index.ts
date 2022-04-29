import { User } from 'firebase/auth';

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

export interface ILogOutHook {
  logout: () => Promise<void>;
}
