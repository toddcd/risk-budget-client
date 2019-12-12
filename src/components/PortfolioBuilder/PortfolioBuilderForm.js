import React, {Component} from 'react';
//import CustomizedHook from "../TypeAhead/FundSelector";
import PortfolioBuildStepper from "../PortfolioBuildStepper/PortfolioBuildStepper";
//import PortStepper from "../PortfolioBuildStepper/PortStepper";

class PortfolioBuilderForm extends Component {
    render() {
        return (
            <div>
                <PortfolioBuildStepper/>
            </div>
        );
    }
}

export default PortfolioBuilderForm;