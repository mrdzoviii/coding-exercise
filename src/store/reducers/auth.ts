import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  email: string;
  provider: string;
  name: string;
  userId: string;
}

export interface AuthState {
  user: User | null;
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null } as AuthState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User | null>) => {
      if (action.payload) {
        state.user = action.payload;
      }
    }
  }
});

export const authReducer = slice.reducer;
export const { setUser } = slice.actions;
