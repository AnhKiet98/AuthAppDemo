import {BasicPage} from '../components/BasicPage'
import Person from '@mui/icons-material/Person'
import {useEffect, useState} from 'react'
import axios from 'axios'

export const ProfilePage = () => {
  const [titile, setTitle] = useState()
  useEffect(() => {
    const token = window.localStorage.getItem('accessToken')
    const refreshToken = window.localStorage.getItem('refreshToken')
    console.log({
      token: JSON.parse(token),
      refreshToken: JSON.parse(refreshToken),
    })
    axios
      .get('users/profile', {
        headers: {
          authorization: JSON.parse(token),
          refreshtoken: JSON.parse(refreshToken),
        },
      })
      .then(res => {
        console.log(res.data)
        setTitle(res.data.email)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return <BasicPage title={titile} icon={<Person />} />
}
