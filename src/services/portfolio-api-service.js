import config from "../config"
import TokenService from "../services/token-service"

const PortfolioApiService = {
    getRiskBudgetAnalysis(portfolio) {
        return fetch( `${config.CALC_ENGINE_ENDPOINT}/budget`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(portfolio),
        }).then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getPortfolioCollection() {
        return fetch(`${config.API_ENDPOINT}/portfolio`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                    if (!res.ok) {
                        throw Error(res.statusText);
                    } else if (res.status === 204) {
                        const nodata = {info: 'No Portfolios for current user'}
                        return nodata
                    } else
                        return res.json()
                }
            )
    },
    getPortfolio(portId) {
        return fetch(`${config.API_ENDPOINT}/portfolio/${portId}`, {
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postPortfolio(portfolio) {
        return fetch(`${config.API_ENDPOINT}/portfolio`, {
            method: "POST",
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
                "content-type": "application/json",
            },
            body: JSON.stringify(portfolio),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    patchPortfolio(portfolio) {
        return fetch(`${config.API_ENDPOINT}/portfolio/${portfolio.port_id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(portfolio),
        })
            .then(res => {
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
    },
    deletePortfolio(portId) {
        return fetch(`${config.API_ENDPOINT}/portfolio/${portId}`, {
            method: 'DELETE',
            headers: {
                "authorization": `bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    res.json().then(e => Promise.reject(e))
                }
            })
    },
}

export default PortfolioApiService
