import React, {Component} from 'react'
import {Required} from '../Utils/Utils'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {
        }
    }

    state = {error: null}

    handleSubmit = ev => {
        ev.preventDefault()
        const {full_name, user_name, password} = ev.target


        this.setState({error: null})
        AuthApiService.postRegistration({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
        })
            .then(user => {
                full_name.value = ''
                user_name.value = ''
                password.value = ''
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
                    <div className='full_name'>
                        <label htmlFor='RegistrationForm__full_name'>
                            Full name <Required/>
                        </label>
                        <input className='register-input'
                               name='full_name'
                               type='text'
                               required
                               id='RegistrationForm__full_name'>
                        </input>
                    </div>
                    <div className='user_name'>
                        <label htmlFor='RegistrationForm__user_name'>
                            User name <Required/>
                        </label>
                        <input className='register-input'
                               name='user_name'
                               type='text'
                               required
                               id='RegistrationForm__user_name'>
                        </input>
                    </div>
                    <div className='password'>
                        <label htmlFor='RegistrationForm__password'>
                            Password <Required/>
                        </label>
                        <input className='register-input'
                               name='password'
                               type='password'
                               required
                               id='RegistrationForm__password'>
                        </input>
                    </div>
                    <button className='reg-button' type='submit'>
                        Register
                    </button>
                </form>
            </div>
        )
    }
}
