import React, {Component} from 'react'
import './Landing.css'
import {Button} from "../Utils/ElementUtils";

export default class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
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
                                <span className='step-num'>2</span> Assign Risk
                            </div>
                            <div className='step'>
                                <span className='step-num'>3</span> Run Optimization
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
                        <img alt='analog-notes-bottom' className='landing-image' src={require("../../images/burroughs.jpg")}/>
                    </div>
                    <div className='bottom-section-right'>
                        <span className='question'>Ready to get started?</span>
                        <div>
                            <p>Register to login</p><br/>
                            <Button>Register</Button>
                            <p>Or login with the demo account and take a look!<br/>
                            (username: demo, password: Password1!)</p>
                            <Button>Login</Button>
                        </div>
                            <div className='download'>
                                <p>Download CSV portfolio template</p><br/>
                                <Button>Download</Button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}