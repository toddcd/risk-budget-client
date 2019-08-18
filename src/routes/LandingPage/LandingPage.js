import React, { Component } from 'react'
import { Section } from '../../components/Utils/ElementUtils'
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
            <Section className='LandingPage'>
                <Landing />
            </Section>
        )
    }
}