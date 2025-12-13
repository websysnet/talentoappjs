import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDeporteID } from '../services/deportesService'
import './DeporteDetalle.css'

export default function DeporteDetalle() {
  const { id } = useParams()
  const [deporte, setDeporte] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getDeporteID(id).then(d => {
      if (mounted) setDeporte(d)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [id])

  if (loading) return <div className="deporte-det-loading">Cargando...</div>
  if (!deporte) return (
    <div className="deporte-det-notfound">
      <p>Deporte no encontrado.</p>
      <Link to="/deportes">Volver a deportes</Link>
    </div>
  )

  return (
    <section className="deporte-det-section">
      <Link className="deporte-det-back" to="/deportes">← Volver</Link>
      <div className="deporte-det-card">
        <div className="deporte-det-media">
          <div className="deporte-det-emoji" role="img" aria-label={deporte.nombre}>{deporte.emoji}</div>
        </div>
        <div className="deporte-det-body">
          <h1>{deporte.nombre}</h1>
          <p className="deporte-det-tipo">Tipo: {deporte.tipo}</p>
          <p className="deporte-det-desc">{deporte.descripcion}</p>
        </div>
      </div>
    </section>
  )
}
