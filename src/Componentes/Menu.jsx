import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useToast } from '../contexts/ToastContext'
import './Menu.css'

export default function Menu() {
    const [open, setOpen] = useState(false)
    const { user, logout, setShowLogin } = useAuth()
    const { addToast } = useToast()
    const navigate = useNavigate()
    const items = [
        { to: '/', label: '🏠 Home' },
        { to: '/nosotros', label: '👥 Nosotros' },
        { to: '/deportes', label: '⚽ Deportes' },
        { to: '/atletas', label: '🏃‍♂️ Atletas' },
        { to: '/entrenadores', label: '👨‍🏫 Entrenadores' },
        { to: '/planes', label: '📋 Planes' },
        { to: '/pruebas', label: '✅ Pruebas' },
    ]

    return (
        <div>
            <nav className='menu'>
                <img className='logo' src="/imagenes/logotalents.png" alt="Talento Sports" />

                <button
                    className='menu-toggle'
                    aria-expanded={open}
                    aria-label='Toggle menu'
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

                <ul className={`menu-links ${open ? 'open' : ''}`}>
                    {items.map(it => (
                        <li key={it.to}>
                            {user ? (
                                <Link to={it.to} onClick={() => setOpen(false)}>{it.label}</Link>
                            ) : (
                                <span className="menu-disabled" aria-disabled="true" tabIndex={-1}>{it.label}</span>
                            )}
                        </li>
                    ))}

                    <li>
                        {!user ? (
                            <button className="menu-login-btn" onClick={() => { setShowLogin(true); setOpen(false) }}>🔐 Login</button>
                        ) : (
                            <div className="menu-user">
                                <span className="menu-user-emoji">{user.emoji}</span>
                                <span className="menu-user-name">{user.user}</span>
                                <button className="menu-logout" onClick={() => { logout().then(() => { setOpen(false); navigate('/'); addToast('Sesión cerrada', { type: 'success' }) }) }}>Logout</button>
                            </div>
                        )}
                    </li>
                </ul>
            </nav>

        </div>
    )
}
