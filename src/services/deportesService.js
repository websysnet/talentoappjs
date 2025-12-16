//import deportes from '../data/deportes'
var deportes = []
export async function getDeportes() {
  try {
    const res = await fetch('http://localhost:3000/deportes')
    if (!res.ok) throw new Error(`HTTP error ${res.status}`)
    const data = await res.json()
    deportes = data
    return deportes

  } catch (err) {
    console.warn('getDeportes fetch failed, returning local data:', err)
    alert('No se pudo conectar al servidor.')
    return Promise.resolve(deportes)
  }
}

export function getDeporteID(id) {
  const d = deportes.find(item => String(item.id) === String(id)) || null
  return Promise.resolve(d)
}

export default { getDeportes, getDeporteID }
