import React, {Component} from 'react'

const PortfolioCollectionContext = React.createContext({
    loggedIn: null,
    portfolioCollection: {},
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setLoggedIn: () => {
    },
    setPortfolioCollection: () => {
    },
    removePortfolio: () => {
    },
})
export default PortfolioCollectionContext

export class PortfolioCollectionProvider extends Component {
    state = {
        loggedIn: null,
        portfolioCollection: {},
        error: null,
    };

    setLoggedIn = loggedIn => {
        this.setState({loggedIn: loggedIn})
    }

    setPortfolioCollection = portfolioCollection => {
        this.setState({portfolioCollection: portfolioCollection})
    }

    removePortfolio = portId => {
        let portfolios = this.state.portfolioCollection.portfolios;
        const updatedPortfolios = portfolios.filter(portfolio => {
            return portfolio.port_id !== parseInt(portId)
        })

        const portfolioCollection = {
                        user_id: this.state.portfolioCollection.user_id,
                        portfolios: updatedPortfolios
                        }

        this.setState({portfolioCollection: portfolioCollection})
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const value = {
            portfolioCollection: this.state.portfolioCollection,
            setPortfolioCollection: this.setPortfolioCollection,
            loggedIn: this.state.loggedIn,
            setLoggedIn: this.setLoggedIn,
            removePortfolio: this.removePortfolio,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        }
        return (
            <PortfolioCollectionContext.Provider value={value}>
                {this.props.children}
            </PortfolioCollectionContext.Provider>
        )
    }
}
