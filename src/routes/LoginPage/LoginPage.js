import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import PortfolioCollectionContext from "../../context/PortfolioCollectionContext";
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = PortfolioCollectionContext

  handleLoginSuccess = () => {
    const { history } = this.props
    this.context.setLoggedIn(true)
    history.push('/')
  }

  render() {
    return (
      <section className='login-page'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    )
  }
}
