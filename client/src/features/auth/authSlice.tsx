import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import { LoginFormData, RegisterFormData } from '../../interfaces/loginFormData';
import authService from './authService';
import { UserI } from './userI';

interface State {
  user: UserI | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const checkToken = () => {
  const token = localStorage.getItem('user');
  if (!token) return null;
  const jwt: UserI = jwtDecode(token);
  const future = new Date(jwt.iat);
  const mls = future.setDate(future.getDate() + 30);
  if (mls < Date.now()) return null;
  return jwt;
}
const user: UserI | null = checkToken();

const initialState = {
  user: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk('auth/register', async (user: RegisterFormData, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message || error.toString()
    return thunkAPI.rejectWithValue(message);
  }
})

export const login = createAsyncThunk('auth/login', async (user: LoginFormData, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message || error.toString()
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state: State, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state: State, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
      .addCase(logout.fulfilled, (state: State) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = null
      })
      .addCase(logout.rejected, (state: State, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer