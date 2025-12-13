import deportes from '../data/deportes'

export function getDeportes() {
  // Simular una API: devolver una promesa
  return Promise.resolve(deportes)
}

export function getDeporteID(id) {
  const d = deportes.find(item => String(item.id) === String(id)) || null
  return Promise.resolve(d)
}

export default { getDeportes, getDeporteID }
