import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {PortfolioCollectionProvider} from './context/PortfolioCollectionContext';
import {PortfolioProvider} from './context/PortfolioContext';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme';

import './index.css';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>

        <PortfolioCollectionProvider>
            <PortfolioProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <App/>
                </ThemeProvider>
            </PortfolioProvider>
        </PortfolioCollectionProvider>

    </BrowserRouter>
    , document.getElementById('root'));

