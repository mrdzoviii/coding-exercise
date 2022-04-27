import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  fullName: string;
  username: string;
};

export interface AuthState {
  isAuthorized: boolean;
  user?: User;
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    isAuthorized: false
  } as AuthState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>) => {
      if (action.payload.username && action.payload.fullName) {
        state.user = action.payload;
        state.isAuthorized = true;
      }
    }
  }
});

export const authReducer = slice.reducer;
export const { setUser } = slice.actions;
