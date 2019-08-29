import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import Analysis from '../Analysis/Analysis'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import PortfolioCollectionPage from "../../routes/PortfolioCollectionPage/PortfolioCollectionPage";
import './App.css';
import AddEditPortfolio from "../PortfolioCollection/AddEditPortfolio";

class App extends Component {
    state = {hasError: false}

    static getDerivedStateFromError(error) {
        console.error(error)
        return {hasError: true}
    }

    render() {
        return (
            <div className="App background-color main-container">
                <header className='App__header'>
                    <Header/>
                </header>
                <main>
                        <Switch>
                            <Route
                                exact
                                path={'/'}
                                component={LandingPage}
                            />
                            <Route
                                exact
                                path={'/login'}
                                component={LoginPage}
                            />
                            <Route
                                exact
                                path={'/register'}
                                component={RegistrationPage}
                            />
                            <Route
                                exact
                                path={'/collection'}
                                component={PortfolioCollectionPage}
                            />
                            <Route
                                exact
                                path={'/collection/new-portfolio'}
                                component={AddEditPortfolio}
                            />
                            <Route
                                exact
                                path={'/collection/:port_id'}
                                render={(renderProps) =>
                                    (<AddEditPortfolio {...renderProps} />
                                    )}
                            />
                            <Route
                                exact
                                path={'/analysis/'}
                                render={(renderProps) =>
                                    (<Analysis {...renderProps} />
                                    )}
                            />
                            <Route
                                component={NotFoundPage}
                            />
                        </Switch>
                </main>
                <footer role="contentinfo" className='footer'>
                    <div>
                        <a href={'http://td3studios.com'} target={"_blank"}>TD3 Studios</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
