import {Navigate, useOutlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import {isAuth} from '../utils/auth'
import {AppBar} from './AppBar'

export const HomeLayout = () => {
  // const {user} = useAuth()
  const outlet = useOutlet()
  // console.log('isAuth', isAuth())

  if (isAuth()) {
    return <Navigate to="/profile" replace />
  }

  return (
    <div>
      <div pages={[{label: 'Login', path: '/login'}]} />
      {outlet}
    </div>
  )
}
