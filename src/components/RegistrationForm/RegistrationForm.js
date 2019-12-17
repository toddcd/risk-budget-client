import React, {Component} from 'react'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'
import {Button, TextField, Grid, Link, Box} from "@material-ui/core";

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {
        }
    }

    state = {error: null}

    handleSubmit = ev => {
        ev.preventDefault()
        const {full_name, user_name, password, email} = ev.target

        this.setState({error: null})

        AuthApiService.postRegistration({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
            email: email.value,
        })
            .then(user => {
                full_name.value = ''
                user_name.value = ''
                password.value = ''
                email.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({error: res.error})
            })
    }

    render() {
        const {error} = this.state
        return (
            <div className='registration-container'>
                <form
                    className='registration-form'
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="RegistrationForm__full_name"
                            label="Full Name"
                            name="full_name"
                            autoFocus
                        />
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            //fullWidth
                            id="RegistrationForm__user_name"
                            label="User Name"
                            name="user_name"
                        />
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="RegistrationForm__password"
                            label="Password"
                            name="password"
                            type='password'
                        />
                    </div>
                    <div className='email'>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            width='90%'
                            id="RegistrationForm__email"
                            label="Email"
                            name="email"
                        />
                    </div>
                    <Box m={5}>
                        <Button type="submit"
                                variant="contained"
                                color="primary"
                            // className={classes.submit}
                        >
                            Register
                        </Button>
                    </Box>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Already have an account? Login"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
