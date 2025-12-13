import React, { useEffect, useState } from 'react'
import { getDeportes } from '../services/deportesService'
import { Link } from 'react-router-dom'
import './Deportes.css'

export default function Deportes() {
  const [deportes, setDeportes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getDeportes().then(data => {
      if (mounted) setDeportes(data)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="deportes-loading">Cargando deportes...</div>

  return (
    <section className="deportes-section">
      <h2 className="deportes-title">Deportes</h2>
      <div className="deportes-list">
        {deportes.map(d => (
          <article className="deporte-card" key={d.id}>
            <div className="deporte-media">
              <div className="deporte-emoji" role="img" aria-label={d.nombre}>{d.emoji}</div>
            </div>
            <div className="deporte-body">
              <h3>{d.nombre}</h3>
              <p className="deporte-tipo">{d.tipo}</p>
              <p className="deporte-desc">{d.descripcion}</p>
              <Link className="deporte-link" to={`/deportes/${d.id}`}>Ver detalle</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
