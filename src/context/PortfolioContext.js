import React, {Component} from 'react'

export const nullPortfolio = {
    portfolio: {}
}

export const nullFunds = {
    funds: {}
}

const PortfolioContext = React.createContext({
    showAnalysis: false,
    showFileLoader: true,
    portfolio: nullPortfolio,
    funds: {},
    error: null,
    setError: () => {
    },
    clearError: () => {
    },
    setPortfolio: () => {
    },
    toggleAnalysis: () => {
    },
    toggleFileLoader: () => {
    },
    clearPortfolio: () => {
    },
    setEditFundDetail: () => {
    },
    setAddFundDetail: () => {
    },
    clearFunds: () => {
    },
})

export default PortfolioContext

export class PortfolioProvider extends Component {
    state = {
        showAnalysis: false,
        showFileLoader: true,
        portfolio: nullPortfolio,
        funds: nullFunds,
        error: null,
    };

    toggleAnalysis = (e) => {
        this.setState({showAnalysis : e})
    }

    toggleFileLoader = (e) => {
        this.setState({showFileLoader : e})
    }

    setPortfolio = portfolio => {
        this.setState({portfolio})
    }

    clearPortfolio = () => {
        this.setPortfolio(nullPortfolio)
    }

    setAddFundDetail = update => {
        const prevState = this.state.portfolio.funds

        for (let i in prevState) {
            let fund = prevState[i]
            if (i === update.fund_id) {
                if (update.hasOwnProperty('weight')) {
                    prevState[i].weight = update.weight
                }

                if (update.hasOwnProperty('return')) {
                    prevState[i].return = update.return
                }

                if (update.hasOwnProperty('risk')) {
                    prevState[i].risk = update.risk
                }
                this.setState({
                    portfolio:
                        {
                            name: this.state.portfolio.name,
                            id: null,
                            date_created: this.state.portfolio.date_created,
                            funds: prevState
                        }
                })
            }
        }

    }

    setEditFundDetail = update => {
        const prevState = this.state.funds

        if (prevState.length === undefined) {
            this.setState({funds: [update]})
        } else {
            const exists = prevState.some(fund => {
                return fund.fund_id === update.fund_id
            })

            if (!exists) {
                prevState.push(update)
                this.setState({funds: prevState})
            } else {
                for (let i in prevState) {
                    let fund = prevState[i]
                    if (fund.fund_id === update.fund_id) {
                        if (update.hasOwnProperty('weight')) {
                            prevState[i].weight = update.weight
                        }

                        if (update.hasOwnProperty('return')) {
                            prevState[i].return = update.return
                        }

                        if (update.hasOwnProperty('risk')) {
                            prevState[i].risk = update.risk
                        }
                        this.setState({funds: prevState})
                    }
                }
            }
        }
    }

    clearFunds = () => {
        this.setState({funds: nullFunds})
    }

    clearError = () => {
        this.setError(null)
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
            showAnalysis: this.state.showAnalysis,
            toggleAnalysis: this.toggleAnalysis,
            showFileLoader: this.state.showFileLoader,
            toggleFileLoader: this.toggleFileLoader,

            portfolio: this.state.portfolio,
            setPortfolio: this.setPortfolio,
            setAddFundDetail: this.setAddFundDetail,
            clearPortfolio: this.clearPortfolio,

            funds: this.state.funds,
            setEditFundDetail: this.setEditFundDetail,
            clearFunds: this.clearFunds,

            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        }
        return (
            <PortfolioContext.Provider value={value}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}
