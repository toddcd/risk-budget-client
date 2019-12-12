import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import TokenService from '../../services/token-service'
import Header from '../Header/Header'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage'
import Analysis from '../Analysis/Analysis'
import PortfolioCollectionPage from "../../routes/PortfolioCollectionPage/PortfolioCollectionPage";
import AddEditPortfolio from "../PortfolioCollection/AddEditPortfolio";
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import './App.css';
import PortfolioCollectionContext from "../../context/PortfolioCollectionContext";
import PortfolioBuilderPage from "../../routes/PortfolioBuilder/PortfolioBuilderPage";

class App extends Component {
    state = {hasError: false}

    static contextType = PortfolioCollectionContext

    static getDerivedStateFromError(error) {
        console.error(error)
        return {hasError: true}
    }

    componentDidMount() {
        if(TokenService.hasAuthToken()){
            this.context.setLoggedIn(true)
        }
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
                            <PublicOnlyRoute
                                exact
                                path={'/login'}
                                component={LoginPage}
                            />
                            <PublicOnlyRoute
                                exact
                                path={'/portbuilder'}
                                component={PortfolioBuilderPage}
                            />
                            <PublicOnlyRoute
                                exact
                                path={'/register'}
                                component={RegistrationPage}
                            />
                            <PrivateRoute
                                exact
                                path={'/collection'}
                                component={PortfolioCollectionPage}
                            />
                            <PrivateRoute
                                exact
                                path={'/collection/new-portfolio'}
                                component={AddEditPortfolio}
                            />
                            <PrivateRoute
                                exact
                                path={'/collection/:port_id'}
                                component={AddEditPortfolio}
                            />
                            <PrivateRoute
                                exact
                                path={'/analysis/:port_id'}
                                component={Analysis}
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
