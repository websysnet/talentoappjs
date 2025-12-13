import planes from '../data/planes'

export function getPlanes() {
  return Promise.resolve(planes)
}

export function getPlanByID(id) {
  const plan = planes.find(p => String(p.id) === String(id)) || null
  return Promise.resolve(plan)
}

export default { getPlanes, getPlanByID }
