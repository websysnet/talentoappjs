const planes = [
  {
    id: 'P-1001',
    plan: 'Fuerza y Resistencia - Primavera',
    fechaInicio: '2025-03-01',
    fechaFin: '2025-04-26',
    objetivo: 'Aumentar fuerza general y resistencia aeróbica',
    deporte: 'Fútbol',
    atleta: { id: 'A-21', nombre: 'Juan Pérez' },
    nivel: 'Intermedio',
    estado: 'activo',
    semanas: [
      {
        semana: 1,
        sesiones: [
          { dia: 'Lunes', tipo: 'Fuerza', duracionMin: 60, descripcion: 'Trabajo de tren inferior: sentadillas, peso muerto, estocadas.' },
          { dia: 'Miércoles', tipo: 'Cardio', duracionMin: 45, descripcion: 'Intervalos 6x3min a ritmo alto con 2min recuperación.' },
          { dia: 'Viernes', tipo: 'Técnica', duracionMin: 60, descripcion: 'Pases, control y finalizaciones en espacio reducido.' }
        ]
      },
      {
        semana: 2,
        sesiones: [
          { dia: 'Lunes', tipo: 'Fuerza', duracionMin: 65, descripcion: 'Progresión de cargas: sentadilla 4x6.' },
          { dia: 'Miércoles', tipo: 'Cardio', duracionMin: 50, descripcion: 'Fartlek en campo 40min.' },
          { dia: 'Viernes', tipo: 'Partido', duracionMin: 80, descripcion: 'Partido reducido 8v8 orientado a resistencia.' }
        ]
      }
    ]
  },
  {
    id: 'P-1002',
    plan: 'Velocidad y Potencia',
    fechaInicio: '2025-05-05',
    fechaFin: '2025-06-30',
    objetivo: 'Mejorar velocidad máxima y potencia de salto',
    deporte: 'Atletismo',
    atleta: { id: 'A-34', nombre: 'María Gómez' },
    nivel: 'Avanzado',
    estado: 'activo',
    semanas: [
      {
        semana: 1,
        sesiones: [
          { dia: 'Martes', tipo: 'Velocidad', duracionMin: 50, descripcion: 'Sprints 6x60m con recuperación completa.' },
          { dia: 'Jueves', tipo: 'Plyo', duracionMin: 40, descripcion: 'Saltos pliométricos y lanzamientos medicinal.' },
          { dia: 'Sábado', tipo: 'Técnica', duracionMin: 45, descripcion: 'Técnica de salida y aceleración.' }
        ]
      },
      {
        semana: 2,
        sesiones: [
          { dia: 'Martes', tipo: 'Velocidad', duracionMin: 55, descripcion: 'Sprints 8x40m con trabajo de técnica.' },
          { dia: 'Jueves', tipo: 'Fuerza', duracionMin: 60, descripcion: 'Fuerza explosiva: hip thrust y power cleans.' },
          { dia: 'Sábado', tipo: 'Recuperación', duracionMin: 30, descripcion: 'Movilidad y trote suave.' }
        ]
      }
    ]
  },
  {
    id: 'P-1003',
    plan: 'Resistencia Base',
    fechaInicio: '2025-01-08',
    fechaFin: '2025-03-02',
    objetivo: 'Construir base aeróbica para temporada',
    deporte: 'Natación',
    atleta: { id: 'A-58', nombre: 'Carlos Ruiz' },
    nivel: 'Principiante',
    estado: 'finalizado',
    semanas: [
      {
        semana: 1,
        sesiones: [
          { dia: 'Lunes', tipo: 'Nado continuo', duracionMin: 50, descripcion: 'Trabajo aeróbico suave, 3x12 minutos con 2min descanso.' },
          { dia: 'Miércoles', tipo: 'Técnica', duracionMin: 40, descripcion: 'Ejercicios de técnica de crol y patada.' },
          { dia: 'Viernes', tipo: 'Series', duracionMin: 60, descripcion: 'Series 10x100m a ritmo medio con 20s descanso.' }
        ]
      }
    ]
  },
  {
    id: 'P-1004',
    plan: 'Preparación Física General',
    fechaInicio: '2025-07-01',
    fechaFin: '2025-08-25',
    objetivo: 'Mejorar condición física general y movilidad',
    deporte: 'Multideporte',
    atleta: { id: 'A-77', nombre: 'Lucía Fernández' },
    nivel: 'Intermedio',
    estado: 'pendiente',
    semanas: Array.from({ length: 8 }).map((_, i) => ({
      semana: i + 1,
      sesiones: [
        { dia: 'Lunes', tipo: 'Movilidad', duracionMin: 40, descripcion: 'Movilidad articular y core.' },
        { dia: 'Miércoles', tipo: 'Cardio', duracionMin: 45, descripcion: 'Rodillo/cinta/bicicleta según preferencia.' },
        { dia: 'Viernes', tipo: 'Fuerza', duracionMin: 60, descripcion: 'Circuito de fuerza con énfasis en estabilidad.' }
      ]
    }))
  },
  {
    id: 'P-1005',
    plan: 'Entrenamiento Técnico-Competitivo',
    fechaInicio: '2025-09-01',
    fechaFin: '2025-11-30',
    objetivo: 'Pulir aspectos técnicos de competencia y táctica',
    deporte: 'Voleibol',
    atleta: { id: 'A-81', nombre: 'Equipo Juvenil A' },
    nivel: 'Avanzado',
    estado: 'programado',
    semanas: [
      {
        semana: 1,
        sesiones: [
          { dia: 'Martes', tipo: 'Táctica', duracionMin: 90, descripcion: 'Trabajo en equipos, posicionamiento y sistemas.' },
          { dia: 'Jueves', tipo: 'Fuerza', duracionMin: 60, descripcion: 'Fuerza específica y pliometría.' },
          { dia: 'Sábado', tipo: 'Partido', duracionMin: 100, descripcion: 'Partido amistoso con enfoque en sistemas.' }
        ]
      }
    ]
  }
]

export default planes
