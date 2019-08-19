import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    render() {
        return (
            <div className='landing-container'>
                <h1 className='question'>How do you budget for risk?</h1>
                <section>
                    <div className='step-section'>
                        <div className='step-list'>
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
                        <div className='step-image'>
                            <img alt='bars' className='landing-image' src={require("../../images/adding-machine.jpg")}/>
                        </div>
                    </div>
                </section>
                <section className='landing-section'>
                    <div className='landing-image'>
                        {/*<img alt='analog-notes-top' src={require("../../images/landingtop.png")}/>*/}
                    </div>
                    <div className='landing-content'>
                        <p>The Risk Budgeting Tool allows an investor to run analysis on a portfolio and use the risk
                            and return of the underlying funds to determine the best asset allocation in order to
                            maximize portfolio performance.</p>
                    </div>

                </section>
                <section className='landing-section'>
                    <div className='landing-content'>
                        <p>Analyze your portfolio and adjust the asset allocation to meet your current investment
                            strategy.</p>
                        <p>Register to login and get started<br/><br/>
                            Or login with the demo account and take a look!<br/>
                            (username: demo, password: Password1!)</p>
                    </div>
                    <div className='landing-image'>
                        {/*<img alt='analog-notes-bottom' className='landing-image' src={require("../../images/landingbottom.png")}/>*/}
                    </div>
                    <div className='landing-image'>
                        {/*<img alt='bars' className='landing-image' src={require("../../images/bars_v2.png")}/>*/}
                    </div>
                </section>
            </div>
        )
    }
}