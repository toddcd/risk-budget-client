import React, { Component } from 'react'
import Landing from '../../components/Landing/Landing'

export default class LandingPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/collection'
        history.push(destination)
    }

    render() {
        return (
            <section className='LandingPage'>
                <Landing />
            </section>
        )
    }
}