import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Landing.css'
import {Button} from "../Utils/ElementUtils";

export default class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    constructor() {
        super();
        library.add(faArrowAltCircleDown)
    }

    render() {
        return (
            <div className='landing-container'>
                <section className='top-section'>
                    <div className='top-section-left'>
                        <span className='question'>What is risk budgeting?</span>
                    </div>
                    <div className='top-section-right'>
                        <span className='answer'>Constructing a portfolio based on the volatility of the underlying funds.</span>
                    </div>
                </section>
                <section className='steps-section'>
                    <div className='steps-list'>
                        <div className='step'>
                            <span className='step-num'>1</span> Choose Assets
                        </div>
                        <div className='step'>
                            <span className='step-num'>2</span> Assign Weights
                        </div>
                        <div className='step'>
                            <span className='step-num'>3</span> Run Analysis
                        </div>
                    </div>
                    <div className='steps-image'>
                        <img alt='bars' className='landing-image' src={require("../../images/adding-machine.jpg")}/>
                    </div>
                </section>
                <section className='detail-explanation-section'>
                    <div>
                        <p>The Risk Budgeting Tool allows an investor to run analysis on a portfolio and use the risk
                            and return of the underlying funds to determine the best asset allocation in order to
                            maximize portfolio performance.</p>
                    </div>
                </section>
                <section className='bottom-section'>
                    <div className='bottom-section-left'>
                        <img alt='analog-notes-bottom' className='landing-image'
                             src={require("../../images/burroughs.jpg")}/>
                    </div>
                    <div className='bottom-section-right'>
                        <span className='question'>Ready to get started?</span>
                        <div>
                            <p>Register to login</p>
                            <Link to='/Register'>
                                <Button className='bt-landing-width'>Register</Button>
                            </Link>
                            <p>Take a look with demo account!<br/>
                                (us: demo, pw: Password1!)</p>
                            <Link
                                to='/login'>
                                <Button className='bt-landing-width'>Login</Button>
                            </Link>
                        </div>
                        <div className='download'>
                            <p>Download CSV portfolio template</p>
                            <Button className='bt-landing-width'><a className='download-button' href={require("../../assets/portfolio_template.csv")}
                                       download>Template</a><FontAwesomeIcon icon="arrow-alt-circle-down" className='font-awesome-arrow-down'/></Button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}