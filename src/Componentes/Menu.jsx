import React from 'react'
import './Menu.module.css'
export default function Menu() {
    return (
        <div>
            <nav className='menu'>
                    <a href="/">
                    <img className='logo' src="/public/imagenes/logotalents.png" alt="" />
                    </a>
               
                    <li>
                        <a href="/">INICIO</a>
                    </li>
                    <li>
                        <a href="/nosotros">NOSOTROS</a>

                    </li>
            </nav>

        </div>
    )
}
