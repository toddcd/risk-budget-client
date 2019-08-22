import React, {Component} from 'react'

const PortfolioCollectionContext = React.createContext({
    loggedIn: null,
    userPortfolioList: {},
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setLoggedIn: () => {
    },
    setPortfolioList: () => {
    },
})
export default PortfolioCollectionContext

export class PortfolioCollectionProvider extends Component {
    state = {
        loggedIn: null,
        userPortfolioList: {},
        error: null,
    };

    setLoggedIn = loggedIn => {
        console.log("Logging IN!!!!")
        this.setState({loggedIn: loggedIn})
    }

    setPortfolioList = userBikeList => {
        this.setState({userPortfolioList: userBikeList})
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
            userPortfolioList: this.state.userPortfolioList,
            loggedIn: this.state.loggedIn,
            setLoggedIn: this.setLoggedIn,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setPortfolioList: this.setPortfolioList,
        }
        return (
            <PortfolioCollectionContext.Provider value={value}>
                {this.props.children}
            </PortfolioCollectionContext.Provider>
        )
    }
}
