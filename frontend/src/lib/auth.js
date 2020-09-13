export const setToken = token => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const logout = () => {
  window.localStorage.removeItem('token')
}

export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export const isAuthenticated = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}
