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

//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN1cHBvcnRAaHNwYWNlLmJpeiIsInVzZXJuYW1lIjoic3VwcG9ydEBoc3BhY2UuYml6IiwiZXhwIjoxNjU4NTc0OTExfQ.IMk1pRmgNQXr3deM_8VuT_DOXSNsDRolQOPJ3uX9SV8"

//"ae663debc505dcc9aa8eaef721d2d419"
