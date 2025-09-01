"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const checkAuth = () => {
    const hasAuthCookie = document.cookie.includes("auth_session=")
    setIsAuthenticated(hasAuthCookie)
    setIsLoading(false)
  }

  useEffect(() => {
    checkAuth()
    
    // Check auth state when storage changes
    window.addEventListener("storage", checkAuth)
    
    // Check auth state more frequently during initialization
    const interval = setInterval(checkAuth, 100)
    
    // After 5 seconds, reduce check frequency
    setTimeout(() => {
      clearInterval(interval)
      setInterval(checkAuth, 1000)
    }, 5000)
    
    return () => {
      window.removeEventListener("storage", checkAuth)
      clearInterval(interval)
    }
  }, [])

  const login = () => {
    document.cookie = "auth_session=authenticated; path=/; max-age=86400"
    setIsAuthenticated(true)
  }

  const logout = () => {
    document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
