import React, { useEffect, useState } from 'react'

import { getEntrenadores } from '../services/entrenadorService'
import { Link } from 'react-router-dom'

import './Entrenadores.css'

export default function Entrenadores() {

    const [entrenadores, setEntrenadores] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        getEntrenadores().then(data => {
            if (mounted) setEntrenadores(data)
        }).finally(() => mounted && setLoading(false))
        return () => { mounted = false }

    }, [])

    if (loading) return <div>Cargando entrenadores....</div>




    return (
        <section className="entrenadores-section">
            <h2 className='entrenadores-title'>
                Entrenadores
            </h2>
            <div className='entrenadores-list'>
                {entrenadores.map(ent => (
                    <article className="entrenador-card" key={ent.id}>
                        <div className="entrenador-media">
                            <div className="entrenador-foto" role="img" aria-label={ent.apellidos}>{ent.foto}</div>
                        </div>
                        <div className="entrenador-body">
                            <h3>{ent.nombres}</h3>
                            <p className="entrenador-tipo"><b>Nivel: </b>{ent.nivel}</p>
                            <p className="entrenador-desc"><b>Lugar Trabajo: </b>{ent.lugarTrabajo}</p>
                             <p className="entrenador-desc"><b>Horario: </b>{ent.horario}</p>
                          
                        </div>
                    </article>

                ))}
            </div>
        </section>
    )
}
