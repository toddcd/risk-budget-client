import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import './LoginForm.css'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        },
    }

    state = {error: null}

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        //this.props.onLoginSuccess()

        this.setState({ error: null })
         //const { history } = this.props
         const { user_name, password } = ev.target

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
                this.setState({ error: res.error })
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
                <div className='user_name'>
                    <label htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <input className='login-input'
                        required
                        name='user_name'
                        id='LoginForm__user_name'>
                    </input>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <input className='login-input'
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </input>
                </div>
                <button className='login-button' type='submit'>
                    Login
                </button>
            </form>
            </div>
        )
    }
}
