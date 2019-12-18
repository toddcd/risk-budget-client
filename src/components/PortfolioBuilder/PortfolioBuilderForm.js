import React, {Component} from 'react';
import PortfolioBuildStepper from "../PortfolioBuildStepper/PortfolioBuildStepper";

class PortfolioBuilderForm extends Component {

    state = {
        fundTags: [],
        portfolio: []
    }

    handleFundsChanged = (e) => {
        this.setState({...this.state, fundTags: e})
    }

    handleSubmitPortfolio = (e) => {
        console.log(e)
        this.setState({...this.state, portfolio: e})
    }

    handleAssignWeights = (e) => {
        return this.state.fundTags;
    }

    render() {
        return (
            <div>
                <PortfolioBuildStepper handleFundsChanged={this.handleFundsChanged}
                                       handleSubmitPortfolio={this.handleSubmitPortfolio}
                                       fundTags={this.state.fundTags}/>
            </div>
        );
    }
}

export default PortfolioBuilderForm;