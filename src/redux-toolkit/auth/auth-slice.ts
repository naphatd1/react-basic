import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { login } from '../../services/auth-service'
import { LoginFormInput } from '../../app-types/login-form-input.type'
import { LoginErrorResponse, LoginResponse } from '../../app-types/login.type'
import { AxiosError } from 'axios'

export interface AuthState {
  profile: string
  email: string
  loginResponse: LoginResponse | null
}

const initialState: AuthState = {
  profile: 'John Doe',
  email: 'john@gmail.com',
  loginResponse: null
}

export const loginThunk =
  createAsyncThunk<LoginResponse, LoginFormInput, { rejectValue: LoginErrorResponse }>('auth/loginThunkStatus', async (user: LoginFormInput, { rejectWithValue }) => {
    try {
      const response = await login(user.email, user.password)
      // console.log(response.data)
      localStorage.setItem('token', JSON.stringify(response.data))
      return response.data
    } catch (error: any) {
      let err: AxiosError<LoginErrorResponse> = error
      if (!err.response) {
        throw  error
      }
      return rejectWithValue(err.response.data)
    }
  })

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateProfileAction: (state) => {
      state.profile = 'Mary Doe'
      state.email = 'mary@gmail.com'
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<LoginResponse | null>) => {
      state.loginResponse = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateProfileAction } = authSlice.actions

export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer
