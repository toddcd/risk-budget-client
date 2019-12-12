import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
//import { Button, Input } from '../Utils/ElementUtils'
import {Button, Grid, Link, TextField} from "@material-ui/core";
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
                            variant="outlined"
                            margin="normal"
                            required
                            //fullWidth
                            id="LoginForm__user_name"
                            label="User Name"
                            name="user_name"
                            autoFocus
                            style={{ backgroundColor: '#fff' }}
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            //fullWidth
                            id="LoginForm__password"
                            label="Password"
                            name="password"
                            type="password"
                            style={{ backgroundColor: '#fff' }}
                        />
                    </div>
                    <Button type="submit"
                        // fullWidth
                            variant="contained"
                            color="primary"
                        // className={classes.submit}
                    >
                        Login
                    </Button>
                    <div className='grid-style'>
                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Register"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>
        )
    }
}
