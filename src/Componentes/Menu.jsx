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
                    <li>
                        <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" onClick={() => setOpen(false)}>👥 Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/deportes" onClick={() => setOpen(false)}>⚽ Deportes</Link>
                    </li>
                    <li>
                        <Link to="/atletas" onClick={() => setOpen(false)}>🏃‍♂️ Atletas</Link>
                    </li>
                    <li>
                        <Link to="/entrenadores" onClick={() => setOpen(false)}>👨‍🏫 Entrenadores</Link>
                    </li>
                    <li>
                        <Link to="/planes" onClick={() => setOpen(false)}>📋 Planes</Link>
                    </li>
                    <li>
                        <Link to="/pruebas" onClick={() => setOpen(false)}>✅ Pruebas</Link>
                    </li>
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
