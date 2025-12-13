import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    const [open, setOpen] = useState(false)

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
                        <Link to="/login" onClick={() => setOpen(false)}>🔐 Login</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
