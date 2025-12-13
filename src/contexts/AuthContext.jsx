import React, { createContext, useContext, useEffect, useState } from 'react'
import * as authService from '../services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(authService.getCurrentUser())
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    setUser(authService.getCurrentUser())
  }, [])

  const login = (identifier, password) => {
    return authService.login(identifier, password).then(res => {
      if (res.ok) setUser(res.user)
      return res
    })
  }

  const logout = () => {
    return authService.logout().then(() => setUser(null))
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, showLogin, setShowLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
