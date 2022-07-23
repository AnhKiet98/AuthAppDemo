import {createContext, useContext, useMemo} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocalStorage} from './useLocalStorage'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  // const [user, setUser] = useLocalStorage('user', null)
  const navigate = useNavigate()

  const login = async data => {
    window.localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify(data.refreshToken),
    )
    window.localStorage.setItem('user', JSON.stringify(data.user))
    // if (data.email !== '' && data.password !== '') {
    //   setUser(data)
    navigate('/profile', {replace: true})
  }

  const logout = () => {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('refreshToken')
    navigate('/login', {replace: true})
  }

  const value = useMemo(
    () => ({
      // user,
      login,
      logout,
    }),
    [],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
