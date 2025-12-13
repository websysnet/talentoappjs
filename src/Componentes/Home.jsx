import React from 'react'
import './Home.css'

export default function Body() {
  return (
    <div  className="bodyDiv">        <h1 className="titleHome">🚀 Bienvenidos a Talento Sports</h1>
        <p className="subtitleHome">Tu plataforma definitiva para descubrir y conectar con talentos deportivos</p>
        
        <div className="descriptionBox">
          <p className="descriptionHome"><span className="highlight">⭐ Nuestra Misión:</span> Identificar, apoyar y promover a atletas emergentes, brindándoles las herramientas necesarias para alcanzar su máximo potencial.</p>
          <p className="descriptionHome"><span className="highlight">🎯 Para Ti:</span> Ya seas atleta, entrenador o apasionado del deporte, Talento Sports es tu comunidad ideal. Explora perfiles, accede a recursos exclusivos y únete a una comunidad vibrante.</p>
          <p className="callToActionHome">¡Únete a nosotros hoy y sé parte del futuro del deporte! 💪</p>
        </div>

       <div className='buttonContainer'>
  <a className='btnLink' href="/deportes">⚽ DEPORTES</a>
  <a className='btnLink' href="/atletas">🏃 ATLETAS</a>
  <a className='btnLink' href="/entrenadores">👨‍🏫 ENTRENADORES</a>
  <a className='btnLink' href="/planes">📋 PLANES</a>
  <a className='btnLink' href="/pruebas">✅ PRUEBAS</a>
</div>
      

    </div>
  )
}
