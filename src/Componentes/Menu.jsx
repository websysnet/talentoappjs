import React, { useState } from 'react'
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
                        <a href="/">🏠 Home</a>
                    </li>
                    <li>
                        <a href="/nosotros">👥 Nosotros</a>
                    </li>
                    <li>
                        <a href="/deportes">⚽ Deportes</a>
                    </li>
                    <li>
                        <a href="/atletas">🏃‍♂️ Atletas</a>
                    </li>
                    <li>
                        <a href="/entrenadores">👨‍🏫 Entrenadores</a>
                    </li>
                    <li>
                        <a href="/planes">📋 Planes</a>
                    </li>
                    <li>
                        <a href="/pruebas">✅ Pruebas</a>
                    </li>
                    <li>
                        <a href="/login">🔐 Login</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
