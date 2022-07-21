export const isAuth = () => {
  return (
    window.localStorage.getItem('token') &&
    window.localStorage.getItem('refresh_token')
  )
}

export const getToken = () => {
  return isAuth() ? window.localStorage.getItem('token') : ''
}

export const getRefreshToken = () => {
  return isAuth() ? window.localStorage.getItem('refresh_token') : ''
}

export const setTokens = (token, refresh) => {
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('refresh_token', refresh)
}
