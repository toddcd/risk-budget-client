import React, {Component} from 'react';
import PortfolioBuildStepper from "../PortfolioBuildStepper/PortfolioBuildStepper";

class PortfolioBuilderForm extends Component {

    state = {
        fundTags: [],
    }

    handleFundsChanged = (e) => {
        this.setState({...this.state, fundTags: e})
    }

    handleAssignWeights = (e) => {
        return this.state.fundTags;
    }

    render() {
        return (
            <div>
                <PortfolioBuildStepper handleFundsChanged={this.handleFundsChanged}
                                       fundTags={this.state.fundTags}/>
            </div>
        );
    }
}

export default PortfolioBuilderForm;