import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import queryString from 'query-string';
// import { GoogleOAuthProvider } from 'google-oauth-gsi';


import jwt_decode from 'jwt-decode'
import useStyles from './styles'
import Input from './Input'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Icon from './icon'


const Auth = () => {
  const classes = useStyles();


  const [showPassword, setShowPassword] = useState(false)

  const [isSignup, setIsSignup] = useState(false)


  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }
  const googleSuccess = async (res) => {
    // console.log(res)
    var decoded = jwt_decode(res.credential);
    // console.log((decoded))

    localStorage.setItem('profile', JSON.stringify(decoded));

  }

  const googleFailure = (error) => {
    console.log("Google sign in failed")
    console.log(error)
  }

  const state = null
  return (
    <Container component='main' maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />

        </Avatar>
        <Typography variant='h5' style={{ fontFamily: 'cursive', textAlign: 'center' }}  >

          {isSignup ? 'Sign Up' : 'Sign In'}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}  >
              {
                isSignup && (
                  <>
                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus
                      half />
                    <Input name='lastName' label='Last Name' handleChange={handleChange}
                      half />


                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type='email' />
              <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
            </Grid>
            <Button style={{ marginTop: '10px', height: '50px', fontSize: '18px', fontFamily: 'cursive' }} type='submit' fullWidth variant='contained' color='secondary'  >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>

            {/* <Button onClick={login} style={{ marginTop: '10px', height: '50px', fontSize: '18px', fontFamily: 'cursive' }} type='submit' fullWidth variant='contained' color='secondary' className='classes.submit'> Google Sign In 🚀  </Button> */}
              <div fullWidth style={{ marginTop:'10px', alignContent:'center' }}>
            <GoogleOAuthProvider clientId="288291438472-v54k0t16ebccoei2vb86ts8c4dal6qhq.apps.googleusercontent.com"
            >
              <GoogleLogin

                render={(renderProps) => (
                  <Button
                    style={{ marginTop: '10px', height: '50px', fontSize: '18px', fontFamily: 'cursive' }} type='submit' fullWidth variant='contained' color='secondary'
                    className={classes.submit}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign in with google🚀
                  </Button>
                )}
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                // ) }
                onSuccess={googleSuccess}
                onError={googleFailure}
                cookiePolicy="single_host_origin"

              />


            </GoogleOAuthProvider>
            </div>

            <Grid conatainer justifyContent='flex-end'>
              <Grid item style={{}} >
                <Button onClick={switchMode} fullWidth style={{ backgroundColor: 'ButtonShadow', marginTop: '10px', textAlign: 'left' }} > {isSignup ? 'Already have an account?' : "Don't have an account? Sign In"} </Button>
              </Grid>
            </Grid>
          </form>
        </Typography>

      </Paper>
    </Container>
  )
}

export default Auth
