import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import {Button, Grid, Link, TextField, Box} from "@material-ui/core";
import './LoginForm.css'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    state = {error: null}

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()

        this.setState({error: null})
        //const { history } = this.props
        const {user_name, password} = ev.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({error: res.error})
            })
    }

    render() {
        const {error} = this.state
        return (
            <div className='login-container'>
                <form
                    className='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="LoginForm__user_name"
                            label="User Name"
                            name="user_name"
                            autoFocus
                        />
                    </div>
                    <div>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            id="LoginForm__password"
                            label="Password"
                            name="password"
                            type="password"
                        />
                    </div>
                    <Box m={5}>
                        <Button type="submit"
                                variant="contained"
                                color="primary"
                        >
                            Login
                        </Button>
                    </Box>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}
