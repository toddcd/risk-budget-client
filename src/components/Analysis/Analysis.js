import React, {Component, Fragment} from 'react';
import BudgetChart from "./AnalysisChart";
import AnalysisGrid from "./AnalysisGrid";
import PortfolioApiService from '../../services/portfolio-api-service'
import './Analysis.css'

// import BudgetChartComp from "./AnalysisChartComp";

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {holdings: []}
        }
    }

    componentDidMount() {
        const portId = this.props.location.state.port_id
        PortfolioApiService.getPortfolio(portId)
            .then(data => {
                const portfolio = {data: data}
                PortfolioApiService.getRiskBudgetAnalysis(portfolio)
                    .then(data => {
                        this.setState({data: {holdings: data.holdings}})
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            })
    }

    render() {
        return (
            <Fragment>
                {this.state.data.holdings.length > 0 ?
                    <div className='analysis-container'>
                        <BudgetChart results={this.state.data}/>
                        <AnalysisGrid rowData={this.state.data} columnDefs={this.state.columnDefs}/>
                    </div>
                    :
                    <div></div>}
            </Fragment>
        );
    }
}

export default Analysis;