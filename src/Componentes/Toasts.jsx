import React from 'react'
import { useToast } from '../contexts/ToastContext'
import './Toasts.css'

export default function Toasts() {
  const { toasts } = useToast()
  if (!toasts || toasts.length === 0) return null
  return (
    <div className="toasts-root">
      {toasts.map(t => (
        <div key={t.id} className={`toast toast-${t.type}`}>
          {t.message}
        </div>
      ))}
    </div>
  )
}
