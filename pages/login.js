import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



import Router from 'next/router';
import { useState, useEffect } from "react";
import jwt from 'jsonwebtoken';



//MaterialUi 
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                DiaginalTechnologies
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

//MaterialUI
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


//Login Form And Validation Form
export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('you are not logged in');



    //When submitted, redirects to api/login and creates token
    async function submitForm() {
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        }).then((t) => t.json())

        const token = res.token;
        // console.log(token)

        //If available then stores it in the localStore.
        if (token) {
            localStorage.setItem('token', token)
            const json = jwt.decode(token)

            const { pathname } = Router;
            console.log(json.username)
            //if Token is available then page will automatically redirects to Mainpage.
            if (json.username) {
                Router.push('/')
            } else {
                Router.push('/login')
            }
            setMessage('welcome mr ' + json.username) //not used
        }
    }


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
        </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="username"
                            id="username"
                            autoComplete="current-username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} //event 
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            value='Login'
                            onClick={submitForm}
                        >
                            Login in
          </Button>

                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );

}