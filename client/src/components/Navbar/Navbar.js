import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core'
import imag from '../../images/course.jpg'
import useStyles from './styles.js'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    // const user = null;
    const navigate = useNavigate();
    const classes = useStyles();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


    console.log(user)
    // console.log(userr)

    useEffect(() => {
        const token= user?.jti


        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location] )


    const logout = () => {
        navigate('/');
        localStorage.clear();
        setUser(null);
        // user=null
    }

    return (
        <AppBar className={classes.appBar} position='sticky' style={{ background: '#000066' }}>
            <div className={classes.brandContainer} >

                <Typography component={Link} to="/" className={classes.heading} variant='h3' align='center'>
                    eduFlex
                </Typography>
                <img className={classes.image} src={imag} alt='icon' height='50' />
            </div>
            <Toolbar classes={classes.toolbar} >
                {user ? (
                    <div className={classes.profile}>
                        {user.given_name ? ( <><Avatar className={classes.purple} alt={user.given_name} src={user.picture}>{user.given_name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant='h4'  > {user.given_name}

                        </Typography> </> ):
                         (<><Avatar  variant="h2" className={classes.purple} alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt(0)} </Avatar>
                        <Typography className={classes.userName} variant='h5'  > {user.result.name}

                        </Typography> </> ) } 
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}  >Logout </Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
                )

                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;