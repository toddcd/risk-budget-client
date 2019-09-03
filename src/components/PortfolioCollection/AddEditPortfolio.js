import React, {Component, Fragment} from 'react'
import {Button, FileReader, Input, Section} from "../Utils/ElementUtils";
import './AddEditPortfolio.css'
import PortfolioContext from "../../context/PortfolioContext";
import PortfolioApiService from "../../services/portfolio-api-service";
import {Link} from "react-router-dom";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";


export default class AddEditPortfolio extends Component {
    static contextType = PortfolioContext

    constructor() {
        super();
        library.add(faExternalLinkAlt)
    }

    componentDidMount() {
        // if edit existing port then get
        // port details from db
        if (this.props.location.state) {
            const port_id = this.props.location.state.port_id
            this.context.clearError()
            PortfolioApiService.getPortfolio(port_id)
                .then(this.context.setPortfolio)
                .then()
                .catch(this.context.setError)

            this.context.toggleAnalysis(false);
            this.context.toggleFileLoader(false);
            this.context.clearPortfolio();
        } else {
            this.context.toggleFileLoader(true)
        }
    }

    componentWillUnmount() {
        this.context.clearFunds()
        this.context.clearPortfolio()
        this.context.toggleAnalysis(false);
        this.context.toggleFileLoader(false);
    }

    handleSubmitAddPortfolio = (event) => {
        event.preventDefault()
        console.log('ADD PORTFOLIO')

        const newPortfolio = {
            data: {
                name: this.context.portfolio.name,
                funds: this.context.portfolio.funds,
            }
        }
        PortfolioApiService.postPortfolio(newPortfolio)
            .then(res => {
                const port = this.context.portfolio
                port.port_id = res.port_id
                this.context.setPortfolio(port)
            })
        this.context.toggleAnalysis(true);
    }

    handleSubmitEditPortfolio = (event) => {
        event.preventDefault()
        const port_id = event.target.dataset.port_id
        //todo - handle portfolio name update
        const fundUpdate = {
            port_id: port_id,
            funds: this.context.funds
        }
        PortfolioApiService.patchPortfolio(fundUpdate)
            .then(r => {
                PortfolioApiService.getPortfolio(port_id)
                    .then(this.context.setPortfolio)
                    .then()
                    .catch(this.context.setError)
                this.context.toggleAnalysis(true);
            })
    }

    handleEditInputChange = (event) => {
        this.context.toggleAnalysis(false)
        const fund = {
            fund_id: event.target.dataset.fund_id,
            [event.target.name]: event.target.value
        }

        if (fund) {
            this.context.setEditFundDetail(fund)
        }
    }

    handleAddInputChange = (event) => {
        this.context.toggleAnalysis(false)
        const targetName = event.target.name
        if (targetName === 'name') {
            const portfolio = this.context.portfolio
            portfolio.name = event.target.value
            this.context.setPortfolio(portfolio)
        } else {
            const fund = {
                fund_id: event.target.dataset.fund_id,
                [targetName]: event.target.value
            }
            this.context.setAddFundDetail(fund)
        }
    }

    handleFileUploaded = (data) => {
        this.context.clearError()
        this.context.clearPortfolio()
        this.context.setPortfolio(data)
        this.context.toggleFileLoader(false)
    }

    handleCancel = () => {
        this.props.history.push(`/collection`)
        this.context.clearError()
        this.context.clearPortfolio()
        this.context.clearFunds()
        this.context.toggleFileLoader(false);
    }

    renderAddEditPortfolio() {
        const addPortfolio = !this.props.location.state;
        return (<div className='add-edit-portfolio-container'>
                <h2 className='add-edit-portfolio-title'>{addPortfolio ? 'Add Portfolio' : 'Edit Portfolio'}</h2>
                {this.context.showFileLoader ?
                    <div className='cvs-fileupload-container'>
                        <div className='add-port-step-upload'>
                            <span className='add-port-num'>1</span>
                            <FileReader fileUploaded={this.handleFileUploaded}/>
                        </div>
                    </div> : <div></div>}

                <form className='add-edit-portfolio-form'
                      data-port_id={this.context.portfolio.port_id}
                      onSubmit={addPortfolio ? this.handleSubmitAddPortfolio : this.handleSubmitEditPortfolio}>
                    {this.context.portfolio.funds ?
                        <Section className='form-section'>
                            {!this.context.showAnalysis ?
                                <div className='save-cancel-div'>
                                    <div className='add-port-step'>
                                        <span className='add-port-num'>2</span> Assign Weights
                                    </div>
                                    <div className='save-cancel-buttons'>
                                        <Button className='event-button' type='submit'>Save</Button>
                                        <Button className='event-button' onClick={this.handleCancel}
                                                type='reset'>Cancel</Button>
                                    </div>
                                </div>
                                :
                                <div className='analysis-div'>
                                    <Link to={{
                                        pathname: `/analysis/${this.context.portfolio.port_id}`,
                                        state: { port_id: this.context.portfolio.port_id },
                                    }}>
                                        <Button className='event-button btn-analysis' onClick={this.handleCancel}><span
                                            className='add-port-num'>3</span>Run
                                            Analysis</Button>
                                    </Link>
                                </div>
                            }

                            <div className='port-name'>
                                <label htmlFor='name'>Portfolio Name</label>
                                <Input id='name' name='name'
                                       defaultValue={this.context.portfolio.name}
                                       onChange={addPortfolio ? this.handleAddInputChange : this.handleEditInputChange}
                                       required></Input>
                            </div>
                            <ul id='fundlist' name='fundlist' className='fund-list'>
                                {
                                    this.context.portfolio.funds.map((fund, idx) => {
                                        let link = `http://www.google.com/search?q=${fund.ticker}+stock`
                                        return (
                                            <li className='add-edit-fund-container' key={fund.ticker}>
                                                <div className='fund-name'>
                                                  <span className='fund-details-span'><a className='fund-details-link'
                                                                                         href={link} target='_blank'
                                                                                         rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon="external-link-alt"
                                                                         className='font-awesome-external-link'/>
                                                      {fund.name} ({fund.ticker})</a></span>
                                                </div>
                                                <div className='fund-input-group'>
                                                    <div className='label-input'>
                                                        <label htmlFor='weight'>Weight (%)</label>
                                                        <Input data-fund_id={addPortfolio ? idx : fund.fund_id}
                                                               name='weight'
                                                               className='fund-input'
                                                               defaultValue={fund.weight}
                                                               onChange={addPortfolio ? this.handleAddInputChange : this.handleEditInputChange}></Input>
                                                    </div>
                                                    <div className='label-input'>
                                                        <label htmlFor='return'>Return (%)</label>
                                                        <Input data-fund_id={addPortfolio ? idx : fund.fund_id}
                                                               name='return'
                                                               className='fund-input'
                                                               defaultValue={fund.return}
                                                               onChange={addPortfolio ? this.handleAddInputChange : this.handleEditInputChange}></Input>
                                                    </div>
                                                    <div className='label-input'>
                                                        <label htmlFor='risk'>Risk (%)</label>
                                                        <Input data-fund_id={addPortfolio ? idx : fund.fund_id}
                                                               name='risk'
                                                               className='fund-input'
                                                               defaultValue={fund.risk}
                                                               onChange={addPortfolio ? this.handleAddInputChange : this.handleEditInputChange}></Input>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </Section>
                        : <div></div>
                    }
                </form>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                {this.renderAddEditPortfolio()}
            </Fragment>
        )
    }
}

