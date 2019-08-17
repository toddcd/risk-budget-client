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
                <section>
                    <div className='landing-image'>
                        {/*<img alt='bars-logo' className='landing-image' src={require("../../images/velonoteslogo_v2.png")}/>*/}
                    </div>
                    <header className='landing-content'>
                        <h3>Keep track of bicycle fit data and notes</h3>
                    </header>
                </section>
                <section className='landing-section'>
                    <div className='landing-image'>
                        {/*<img alt='analog-notes-top' src={require("../../images/landingtop.png")}/>*/}
                    </div>
                    <div className='landing-content'>
                        <p>Fit and position data can help identify measurements tied to optimal performance,
                            injury origination, or selecting a new bicycle frame or component.</p>
                        <p>Notes can help keep a record of what and when maintenance was done or
                            why setup changes were made.</p>
                    </div>
                    <div className='landing-image'>
                        {/*<img alt='bars' className='landing-image' src={require("../../images/bars_v2.png")}/>*/}
                    </div>
                </section>
                <section className='landing-section'>
                    <div className='landing-content'>
                        <p>Register to start tracking data for your bicycle fleet!<br/><br/>
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