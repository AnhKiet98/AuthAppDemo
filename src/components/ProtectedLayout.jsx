import {Link, Navigate, useOutlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import {AppBar} from './AppBar'
import {isAuth} from '../utils/auth'
export const ProtectedLayout = () => {
  // const {user} = useAuth()
  console.log('isAuth', isAuth())
  const outlet = useOutlet()

  if (!isAuth()) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <AppBar
        pages={[
          {label: 'Settings', path: 'settings'},
          {label: 'Profile', path: 'profile'},
        ]}
      />
      {outlet}
    </div>
  )
}
