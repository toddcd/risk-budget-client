import React, {Component, Fragment} from 'react';
import {Bar} from 'react-chartjs-2';

export default class BudgetChartComp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderChart = () => {
        const fundName = []
        const fundWeight = []
        const fundRelRisk = []
        const fundRelReturn = []

        this.props.results.holdings.forEach(fund => {
            fundName.push(fund.name);
            fundWeight.push(fund.budget_data.weight);
            fundRelRisk.push(fund.budget_data.rel_cont_risk);
            fundRelReturn.push(fund.budget_data.rel_cont_return);
        })

        const data = {
            labels: fundName,
            datasets: [
                {
                    label: 'Weight',
                    backgroundColor: '#6B87BF',
                    stack: '2',
                    data: fundWeight,
                },
                {
                    label: 'Return',
                    backgroundColor: '#99B5D8',
                    stack: '2',
                    data: fundRelReturn,
                },
                {
                    label: 'Risk',
                    backgroundColor: '#858C55',
                    stack: '2',
                    data: fundRelRisk,
                },
            ],
        };

        const options = {
            responsive: true,
            legend: {
                display: true,
                position: 'top',
            },
            scales: {
                xAxes: [
                    {stacked: true,},
                ],
                yAxes: [
                    {stacked: true,},
                ],
            },
        };

        return <Bar data={data}
                    options={options}
                    height={250}
        />
    }

    render() {
        return (
            <Fragment>
                {this.renderChart()}
            </Fragment>
        )
    }
}
