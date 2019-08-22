import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import PortfolioCollectionContext from "../../context/PortfolioCollectionContext";
import { Section } from '../../components/Utils/ElementUtils'
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
    console.log('SUCCESS!!!!')
    const { history } = this.props
    this.context.setLoggedIn(true)
    history.push('/')
  }

  render() {
    return (
      <Section className='login-page'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
