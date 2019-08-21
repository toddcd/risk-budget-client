import React, {Component, Fragment} from 'react'
import {Button, FileReader, Input, Section} from "../Utils/ElementUtils";
import './AddEditPortfolio.css'
import STORE from "../../STORE";


export default class AddEditPortfolio extends Component {
    // static contextType = BicyclesContext
    state = {
        portfolio: [],
    };

    componentDidMount() {

    }

    handleAddPortfolio = (event) => {
        event.preventDefault()

    }

    handleFileUploaded = (data) => {
        console.log(data)
        this.setState({portfolio: data})
    }

    handleCancel = () => {
        this.props.history.push(`/collection`)
    }

    renderFunds() {
        this.state.portfolio.funds.map(fund => {
            console.log(fund.name)
            return (
                <ui>
                    Ticker: {fund.name}({fund.ticker})
                </ui>
            )
        })
    }

    renderEditPortfolio() {
        const portfolio_store = STORE.portfolio()
        return (<div>
                <div className='position-button-div'>
                    <Button className='position-event-button' type='submit'>Save</Button>
                    <Button className='position-event-button' onClick={this.handleCancel}
                            type='reset'>Cancel</Button>
                </div>
                <div className='port-name'>
                    <label htmlFor='port_name'>Portfolio Name</label>
                    <Input id='port_name' name='port_name'></Input>
                </div>
                {portfolio_store.map(fund => {
                        return (
                            <div className='add-edit-fund-container' key={fund.ticker}>
                                <div className='fund-name'>
                                    {fund.name}({fund.ticker})<br/>
                                </div>
                                <div className='fund-input-group'>
                                    <div className='label-input'>
                                        <label htmlFor='weight'>Weight (%)</label>
                                        <Input id='weight' name='weight' className='fund-input'
                                               defaultValue={fund.weight}></Input>
                                    </div>
                                    <div className='label-input'>
                                        <label htmlFor='return'>Return (%)</label>
                                        <Input id='return' name='return'
                                               defaultValue={fund.expected_return}></Input>
                                    </div>
                                    <div className='label-input'>
                                        <label htmlFor='risk'>Risk (%)</label>
                                        <Input id='risk' name='risk'
                                               defaultValue={fund.expected_risk}></Input>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        )

    }

    render() {

        return (
            <div className='add-edit-portfolio-container'>
                <h2 className='add-edit-portfolio-title'>Add/Edit Portfolio</h2>
                {!this.props.location.state ?
                    <div className='cvs-fileupload-container'>
                        <FileReader className='csv-input' fileUploaded={this.handleFileUploaded}/>
                    </div> : <div></div>}

                <form className='add-edit-portfolio-form' data-position_id={1} onSubmit={this.handleAddPortfolio}>
                    {this.state.portfolio.funds ?
                        <Section className='form-section'>
                            <div className='position-button-div'>
                                <Button className='position-event-button' type='submit'>Save</Button>
                                <Button className='position-event-button' onClick={this.handleCancel}
                                        type='reset'>Cancel</Button>
                            </div>
                            <div className='port-name'>
                                <label htmlFor='port_name'>Portfolio Name</label>
                                <Input id='port_name' name='port_name'></Input>
                            </div>
                            {
                                this.state.portfolio.funds.map(fund => {
                                    return (
                                        <div className='add-edit-fund-container' key={fund.ticker}>
                                            <div className='fund-name'>
                                                {fund.name}({fund.ticker})<br/>
                                            </div>
                                            <div className='fund-input-group'>
                                                <div className='label-input'>
                                                    <label htmlFor='weight'>Weight (%)</label>
                                                    <Input id='weight' name='weight' className='fund-input'
                                                           defaultValue={fund.weight}></Input>
                                                </div>
                                                <div className='label-input'>
                                                    <label htmlFor='return'>Return (%)</label>
                                                    <Input id='return' name='return'
                                                           defaultValue={fund.expected_return}></Input>
                                                </div>
                                                <div className='label-input'>
                                                    <label htmlFor='risk'>Risk (%)</label>
                                                    <Input id='risk' name='risk'
                                                           defaultValue={fund.expected_risk}></Input>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                        </Section>
                        : <div></div>
                    }
                </form>
            </div>
        )
    }
}

