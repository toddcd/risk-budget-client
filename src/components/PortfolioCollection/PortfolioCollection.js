import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './PortfolioCollection.css'

export default class PortfolioCollection extends Component {
    constructor() {
        super();
        this.state = {open: false};
        library.add(faChevronDown, faChevronUp)
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const {portfolio} = this.props

        return (
            <div className="portfolio-collapse-container">
                <button className="collapse-btn" onClick={this.toggle}>
                    <div className='btn-content left'>
                        <span className='fund-details-span'>{portfolio.port_name}</span>({portfolio.date_create})
                    </div>
                    <div className='div-font-awesome-chevron right'>
                        {this.state.open ? <FontAwesomeIcon icon="chevron-up" className='font-awesome-chevron'/>
                            : <FontAwesomeIcon icon="chevron-down" className='font-awesome-chevron'/>}
                    </div>
                </button>
                <div id="portfolio-holdings" className={"portfolio-holdings collapse" + (this.state.open ? ' in' : '')}>
                    <Link to={{
                        pathname: `/collection/${portfolio.port_id}`,
                        state: {
                            port_id: portfolio.port_id
                        }
                    }}>
                        <button className='delete-edit-button' data-id={1}>Edit</button>
                    </Link>
                    <button className='delete-edit-button' data-id={1} onClick={this.props.deletePortfolio}>Delete
                    </button>

                    <div className='holdings-content'>
                        {portfolio.funds.map(fund => {
                            return (
                                <div className='fund-details'>
                                    <div className='fund-name'>
                                        <span className='fund-details-span'>{fund.name} ({fund.ticker})</span><br/>
                                    </div>
                                    <div className='fund-detail-group'>
                                        <div className='fund-detail'>
                                            <span className='fund-details-span-left'>Weight: </span>
                                            <span className='fund-details-span-right'>{fund.weight}</span>
                                        </div>
                                        <div className='fund-detail'>
                                            <span className='fund-details-span-left'>Expected return: </span>
                                            <span className='fund-details-span-right'>{fund.expected_return}</span>
                                        </div>
                                        <div className='fund-detail'>
                                            <span className='fund-details-span-left'>Expected risk: </span>
                                            <span className='fund-details-span-right'>{fund.expected_risk}</span>
                                        </div>
                                        <br/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
