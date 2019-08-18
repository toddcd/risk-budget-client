import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'
import PortfolioCollectionContext from "../../context/PortfolioCollectionContext";

export default class Header extends Component {

    static contextType = PortfolioCollectionContext

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        //this.context.setLoggedIn(false)
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in-container'>
                <div className='Header__logged-in'>
                    <Link
                        to='/collection'>
                        Collection
                    </Link>
                </div>
                <div className='Header__logged-in'>
                    <Link
                        onClick={this.handleLogoutClick}
                        to='/'>
                        Logout
                    </Link>
                </div>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__logged-out-container'>
                <div className='Header__not-logged-in'>
                    <Link
                        to='/login'>
                        Log in
                    </Link>
                    <Link
                        to='/register'>
                        Register
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        return <>
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        RISK<span className='logo-span'>BUDGETING</span>
                    </Link>
                </h1>
                {/*{this.context.loggedIn*/}
                {/*    ? this.renderLogoutLink()*/}
                {/*    : this.renderLoginLink()}*/}
                {this.renderLoginLink()}
                {this.renderLogoutLink()}
            </nav>
        </>
    }
}
