import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, options = {}) => {
    const id = Date.now() + Math.random()
    const toast = { id, message, type: options.type || 'info' }
    setToasts(t => [...t, toast])
    const duration = options.duration || 3000
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id))
    }, duration)
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}

export default ToastContext
