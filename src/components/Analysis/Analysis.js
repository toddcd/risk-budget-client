import React, {Component, Fragment} from 'react';
import PORTDATA from '../../PORTFOLIO';
import {Section} from "../Utils/ElementUtils";
import BudgetChart from "./AnalysisChart";
import AnalysisGrid from "./AnalysisGrid";

class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const data = PORTDATA.output()[0];
        return (
            <Fragment>
                <Section className='chart-section'>
                    <BudgetChart results={data} />
                </Section>
                <section className='grid-section'>
                    <AnalysisGrid rowData={data} columnDefs={this.state.columnDefs}/>
                </section>
            </Fragment>
        );
    }
}

export default Analysis;