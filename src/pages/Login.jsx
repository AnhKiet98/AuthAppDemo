import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import {Link as RouterLink} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import axios from 'axios'
// import axios from '../axios/axios.js'

export const LoginPage = () => {
  const {login} = useAuth()

  const handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    let dataSubmit = {
      email: data.get('email'),
      password: data.get('password'),
    }
    // console.log('data', dataSubmit)

    axios
      .post(
        'auth/login',
        dataSubmit,
        // headers: {'Content-Type': 'multipart/form-data'},
      )
      .then(function (response) {
        //handle success
        // console.log(response)
        login(response.data)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Login In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/register">
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}
