import users from '../data/users'

const STORAGE_KEY = 'talento_auth_user'

export function login(identifier, password) {
  // identifier puede ser user o email
  const u = users.find(
    item => (item.user === identifier || item.email === identifier) && item.password === password
  )

  if (u) {
    const safe = { id: u.id, user: u.user, email: u.email, tipo: u.tipo, emoji: u.emoji }
    // guardar en localStorage para persistencia simulada
    localStorage.setItem(STORAGE_KEY, JSON.stringify(safe))
    return Promise.resolve({ ok: true, user: safe })
  }

  return Promise.resolve({ ok: false, message: 'Usuario o contraseña incorrectos' })
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)
  return Promise.resolve({ ok: true })
}

export function getCurrentUser() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return null
  try { return JSON.parse(raw) } catch (e) { return null }
}

export default { login, logout, getCurrentUser }
