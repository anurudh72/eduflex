import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core'
import imag from '../../images/course.jpg'
import useStyles from './styles.js'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const user = null;
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // console.log(user)
    // console.log('hi')
    useEffect(() => {
        const token= user?.jti


        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [] )


  return (
    <AppBar className={classes.appBar} position='sticky' style={{ background: '#111111' }}>
        <div className={classes.brandContainer} > 
            
        <Typography component={Link}  to="/" className={classes.heading} variant='h3' align='center'>
            eduFlex
        </Typography>
        <img className={classes.image} src={imag} alt='icon' height='50'/>
        </div>
        <Toolbar classes={classes.toolbar} >
            {user? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt= {user.given_name} src={user.picture}>{ user.given_name.charAt(0) } </Avatar>
                    <Typography className={classes.userName} variant='h6'  > { user.given_name }

                    </Typography>
                    <Button variant='contained' className={classes.logout} color='secondary'  >Logout </Button>
                 </div>
            ): (
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign in</Button>
            )

            }
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;