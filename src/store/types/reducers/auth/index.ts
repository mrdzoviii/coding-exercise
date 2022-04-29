export interface User {
  email: string;
  provider: string;
  name: string;
  userId: string;
}

export interface AuthState {
  user: User | null;
}
