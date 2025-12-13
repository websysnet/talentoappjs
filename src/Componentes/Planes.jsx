import React, { useEffect, useState } from 'react'
import { getPlanes } from '../services/planesService'
import { Link } from 'react-router-dom'
import './Planes.css'

export default function Planes() {
  const [planes, setPlanes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getPlanes().then(data => {
      if (mounted) setPlanes(data)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) return <div className="planes-loading">Cargando planes...</div>

  return (
    <section className="planes-section">
      <h2 className="planes-title">Planes de Entrenamiento</h2>
      <div className="planes-list">
        {planes.map(p => (
          <article className="plan-card" key={p.id}>
            <div className="plan-header">
              <h3>{p.plan}</h3>
              <span className={`plan-estado estado-${p.estado}`}>{p.estado}</span>
            </div>
            <div className="plan-body">
              <p><strong>Deporte:</strong> {p.deporte}</p>
              <p><strong>Atleta:</strong> {p.atleta.nombre}</p>
              <p><strong>Nivel:</strong> {p.nivel}</p>
              <p><strong>Objetivo:</strong> {p.objetivo}</p>
              <p><strong>Duración:</strong> {p.fechaInicio} al {p.fechaFin}</p>
              <p><strong>Semanas:</strong> {p.semanas.length}</p>
              <Link className="plan-link" to={`/planes/${p.id}`}>Ver detalle del plan</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
