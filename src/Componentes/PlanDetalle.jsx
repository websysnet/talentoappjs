import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPlanByID } from '../services/planesService'
import './PlanDetalle.css'

export default function PlanDetalle() {
  const { id } = useParams()
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    getPlanByID(id).then(p => {
      if (mounted) setPlan(p)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [id])

  if (loading) return <div className="plan-det-loading">Cargando...</div>
  if (!plan) return (
    <div className="plan-det-notfound">
      <p>Plan no encontrado.</p>
      <Link to="/planes">Volver a planes</Link>
    </div>
  )

  return (
    <section className="plan-det-section">
      <Link className="plan-det-back" to="/planes">← Volver</Link>
      <div className="plan-det-card">
        <div className="plan-det-header">
          <h1>{plan.plan}</h1>
          <span className={`plan-det-estado estado-${plan.estado}`}>{plan.estado}</span>
        </div>

        <div className="plan-det-info">
          <div className="info-grid">
            <div className="info-item">
              <strong>Deporte:</strong>
              <p>{plan.deporte}</p>
            </div>
            <div className="info-item">
              <strong>Atleta:</strong>
              <p>{plan.atleta.nombre}</p>
            </div>
            <div className="info-item">
              <strong>Nivel:</strong>
              <p>{plan.nivel}</p>
            </div>
            <div className="info-item">
              <strong>Duración:</strong>
              <p>{plan.fechaInicio} al {plan.fechaFin}</p>
            </div>
          </div>
        </div>

        <div className="plan-det-objetivo">
          <h3>Objetivo</h3>
          <p>{plan.objetivo}</p>
        </div>

        <div className="plan-det-semanas">
          <h3>Entrenamiento por Semanas</h3>
          {plan.semanas.map((sem, idx) => (
            <div key={idx} className="semana-block">
              <h4>Semana {sem.semana}</h4>
              <div className="sesiones">
                {sem.sesiones.map((ses, sidx) => (
                  <div key={sidx} className="sesion-item">
                    <div className="sesion-meta">
                      <span className="sesion-dia">{ses.dia}</span>
                      <span className="sesion-tipo">{ses.tipo}</span>
                      <span className="sesion-duracion">{ses.duracionMin}min</span>
                    </div>
                    <p className="sesion-desc">{ses.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
