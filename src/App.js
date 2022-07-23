import {Routes, Route} from 'react-router-dom'
import {LoginPage} from './pages/Login'
import {HomePage} from './pages/Home'
import {ProfilePage} from './pages/Profile'
import {SettingsPage} from './pages/Settings'
import {ProtectedLayout} from './components/ProtectedLayout'
import {HomeLayout} from './components/HomeLayout'
import './styles.css'
import {AppBar} from '../src/components/AppBar'
import axios from 'axios'
import {getToken, getRefreshToken, setTokens} from './utils/auth'
import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    let navigate = useNavigate()
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      // Hace la solicitud de refresco de tokens
      return axios
        .get('/api/v1/auth', {
          headers: {Authorization: 'Bearer ' + getRefreshToken()},
        })
        .then(responseData => {
          // actualiza la información de OAuth
          setTokens(
            responseData.data.access_token,
            responseData.data.refresh_token,
          )
          axios.defaults.headers.common['Authorization'] =
            'Bearer ' + getToken()
          originalRequest.headers['Authorization'] = 'Bearer ' + getToken()
          // re-intenta la solicitud original
          return axios(originalRequest)
        })
        .catch(function (error) {
          console.log(error)
          setTokens(undefined, undefined)
          navigate('/login')
        })
    }
    return Promise.reject(error)
  },
)

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route path="/" element={<ProtectedLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
