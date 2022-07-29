export const isAuth = () => {
  if (
    window.localStorage.getItem('accessToken') &&
    window.localStorage.getItem('refreshToken')
  )
    return true
  else return false
}

export const getToken = () => {
  return isAuth() ? window.localStorage.getItem('accessToken') : ''
}

export const getRefreshToken = () => {
  return isAuth() ? window.localStorage.getItem('refreshToken') : ''
}

export const setTokens = (token, refresh) => {
  window.localStorage.setItem('accessToken', token)
  window.localStorage.setItem('refreshToken', refresh)
}
