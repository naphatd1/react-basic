import { http } from './http.service'
import { LoginResponse } from '../app-types/login.type'
import { AxiosResponse } from 'axios'
import { ProfileResponse } from '../app-types/profile.type'

async function login(
  email: string,
  password: string
): Promise<AxiosResponse<LoginResponse>> {
  return await http.post<LoginResponse>(
    'https://api.codingthailand.com/api/login',
    {
      email: email,
      password: password,
    }
  )
}

function logout(): void {
  localStorage.removeItem('token')
}

async function getProfile(): Promise<AxiosResponse<ProfileResponse> | null> {
  const token = JSON.parse(localStorage.getItem('token')!) as LoginResponse
  if (!token) {
    return null
  }
  return await http.get<ProfileResponse>(
    'https://api.codingthailand.com/api/profile',
    {
      headers: { Authorization: 'Bearer ' + token.access_token },
    }
  )
}

export { login, logout, getProfile }
