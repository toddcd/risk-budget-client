import React, {Component, Fragment} from 'react';
import PORTDATA from '../../PORTFOLIO';
import {Section} from "../Utils/ElementUtils";
import BudgetChart from "./AnalysisChart";
import AnalysisGrid from "./AnalysisGrid";
import PortfolioApiService from '../../services/portfolio-api-service'
import './Analysis.css'

// import BudgetChartComp from "./AnalysisChartComp";

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            riskdata: {}
        }
    }

    componentDidMount() {
        PortfolioApiService.getRiskBudgetAnalysis()
            .then(data => {
                this.setState({riskdata: data[0]})
            })
            .catch(err => {

            })
    }

    render() {
        //const data = PORTDATA.output()[0];
        const data = this.state.riskdata;
        return (
            <Fragment>
                {data.holdings ?
                   <div className='analysis-container'>
                       <div id='chart-wrapper' className='chart-wrapper'>
                            <BudgetChart results={data}/>
                       </div>
                        <div id="grid-wrapper" className='grid-wrapper'>
                            <AnalysisGrid rowData={data} columnDefs={this.state.columnDefs}/>
                       </div>
                   </div>
                    :
                    <div></div>}
            </Fragment>
        );
    }
}

export default Analysis;