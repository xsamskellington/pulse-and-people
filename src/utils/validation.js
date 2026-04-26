const ONLY_LETTERS = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/
const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_PHONE = /^[0-9+\s\-()\\.]+$/

export function validateName(value) {
  if (!value.trim()) return 'Este campo es requerido'
  if (!ONLY_LETTERS.test(value.trim())) return 'Solo se permiten letras'
  return null
}

export function validateEmail(value) {
  if (!value.trim()) return 'El email es requerido'
  if (!VALID_EMAIL.test(value)) return 'Ingresá un email válido'
  return null
}

export function validatePhone(value) {
  if (!value) return null
  if (!VALID_PHONE.test(value)) return 'Solo se permiten números'
  return null
}

export function filterPhone(value) {
  return value.replace(/[^0-9+\s\-().]/g, '')
}

export function filterLetters(value) {
  return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, '')
}
