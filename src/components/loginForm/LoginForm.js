
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';

class LoginForm extends React.Component {
    render()  {
        return (
            <div className='Signup-form'>
                <Box m={3}>
                <Typography className='Signup-title' variant='h4'>Welcome to Mantis.</Typography>
                </Box>
                <form onSubmit={ this.loginUser }>
                    <Box m={1}>
                        <TextField className='Signup-input' id='username' type='text' variant='filled' label='Username' autoComplete='off' />
                    </Box>
                    <br />
                    <Box m={1}>
                        <TextField className='Signup-input' id='password'type='password' variant='filled' label='Password' autoComplete='off' />
                    </Box>
                    <br />
                    <Box m={1}>
                        <Button className='Signup-button' type='submit' variant='contained' color='primary'>Login</Button>
                    </Box>
                </form>
                <Box m={3}>
                    <Button >Sign-Up</Button>
                </Box>
            </div>
        )
    }
}

export default LoginForm
