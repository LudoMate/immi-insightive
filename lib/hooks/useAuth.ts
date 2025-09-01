import { create } from 'zustand'

interface AuthStore {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}))

export const checkAuthStatus = () => {
  return document.cookie.includes("auth_session=")
}

export const setAuthCookie = () => {
  document.cookie = "auth_session=authenticated; path=/; max-age=86400"
  useAuthStore.getState().setIsAuthenticated(true)
}

export const removeAuthCookie = () => {
  document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  useAuthStore.getState().setIsAuthenticated(false)
}
