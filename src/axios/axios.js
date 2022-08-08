import axios from 'axios'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

// const instance = axios.create({
//   baseURL: 'https://anhkiettest.herokuapp.com/',
// })
axios.defaults.baseURL = 'https://anhkiettest.herokuapp.com/'

const AxiosInterceptor = ({children}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const resInterceptor = response => {
      console.log('success')
      return response
    }

    const errInterceptor = error => {
      if (error.response.status === 401) {
        console.log('bay den login ne')
        navigate('/login')
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
      }

      return Promise.reject(error)
    }

    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    )

    return () => axios.interceptors.response.eject(interceptor)
  }, [navigate])

  return children
}

// export default instance
export {AxiosInterceptor}
