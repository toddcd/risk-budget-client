import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {PortfolioCollectionProvider} from './context/PortfolioCollectionContext'
import {PortfolioProvider} from './context/PortfolioContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
    <BrowserRouter>
        <PortfolioCollectionProvider>
            <PortfolioProvider>
                <App/>
            </PortfolioProvider>
        </PortfolioCollectionProvider>
    </BrowserRouter>
    , document.getElementById('root'));

