import React, {Component} from 'react'

const PortfolioCollectionContext = React.createContext({
    loggedIn: null,
    userBikeList: {},
    makeDataList: {},
    sizeDataList: {},
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setBikeList: () => {
    },
    setMakeDataList: () => {
    },
    setSizeDataList: () => {
    },
})
export default PortfolioCollectionContext

export class BicyclesProvider extends Component {
    state = {
        loggedIn: null,
        userBikeList: {},
        makeDataList: {},
        sizeDataList: {},
        error: null,
    };

    setLoggedIn = loggedIn => {
        this.setState({loggedIn: loggedIn})
    }

    setBikeList = userBikeList => {
        this.setState({userBikeList: userBikeList})
    }

    setMakeDataList = makeData => {
        this.setState({makeDataList: makeData})
    }

    setSizeDataList = sizeData => {
        this.setState({sizeDataList: sizeData})
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
            userBikeList: this.state.userBikeList,
            makeDataList: this.state.makeDataList,
            sizeDataList: this.state.sizeDataList,
            loggedIn: this.state.loggedIn,
            setLoggedIn: this.setLoggedIn,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBikeList: this.setBikeList,
            setMakeDataList: this.setMakeDataList,
            setSizeDataList: this.setSizeDataList,
        }
        return (
            <PortfolioCollectionContext.Provider value={value}>
                {this.props.children}
            </PortfolioCollectionContext.Provider>
        )
    }
}
