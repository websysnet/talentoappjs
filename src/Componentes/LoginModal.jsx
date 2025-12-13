import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './LoginModal.css'

export default function LoginModal() {
  const { showLogin, setShowLogin, login } = useAuth()
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  if (!showLogin) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    login(identifier.trim(), password).then(res => {
      setLoading(false)
      if (res.ok) {
        setShowLogin(false)
      } else {
        setError(res.message || 'No se pudo iniciar sesión')
      }
    })
  }

  return (
    <div className="login-modal-overlay" onClick={() => setShowLogin(false)}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Iniciar sesión</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario o email
            <input value={identifier} onChange={e => setIdentifier(e.target.value)} required />
          </label>
          <label>
            Contraseña
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
          {error && <div className="login-error">{error}</div>}
          <div className="login-actions">
            <button type="button" className="btn secondary" onClick={() => setShowLogin(false)}>Cancelar</button>
            <button type="submit" className="btn primary" disabled={loading}>{loading ? 'Verificando...' : 'Entrar'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
