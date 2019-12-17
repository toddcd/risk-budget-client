import React, {Component} from 'react';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Analysis.css'

export default class AnalysisGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {
                    headerName: "",
                    children:
                        [
                            {headerName: "Name", field: "name", minWidth: 135, cellStyle: {textAlign : 'start'}},
                            {headerName: "Weight", field: "budget_data.weight", minWidth: 60},
                        ]
                },
                {
                    headerName: "Relative Contribution",
                    children:
                        [
                            {headerName: "Risk", field: "budget_data.rel_cont_risk", cellRenderer: this.roundDecimalCellRenderer, minWidth: 60},
                            {headerName: "Return", field: "budget_data.rel_cont_return", cellRenderer: this.roundDecimalCellRenderer, minWidth: 60},
                        ]
                },
                {headerName: "Ticker", field: "ticker", minWidth: 100},
                {headerName: "Stand Dev", field: "budget_data.sa_std_dev", cellRenderer: this.roundDecimalCellRenderer, minWidth: 100},
                {headerName: "Return", field: "budget_data.return", cellRenderer: this.roundDecimalCellRenderer, minWidth: 100},
                {headerName: "Marginal Risk", field: "budget_data.mctr", cellRenderer: this.roundDecimalCellRenderer, minWidth: 100},
                {headerName: "Absolute Risk", field: "budget_data.abs_cont_risk", cellRenderer: this.roundDecimalCellRenderer, minWidth: 100},
                {headerName: "Absolute Return", field: "budget_data.abs_cont_return", cellRenderer: this.roundDecimalCellRenderer, minWidth: 100},
                {headerName: "Rel-Return - Rel-Risk", field: "budget_data.relrisk_relreturn", minWidth: 100},
            ],
            components: {
                roundDecimalCellRenderer: this.roundDecimalCellRenderer,
            }
        }
    }

    roundDecimalCellRenderer = (param) => {
        return param.value.toFixed(4);
    };

    onGridSizeChanged = (params) => {
        //let gridWidth = document.getElementById("grid-wrapper").offsetWidth;
        let gridWidth = document.getElementById("myGrid").offsetWidth;
        let columnsToShow = [];
        let columnsToHide = [];
        let totalColsWidth = 0;
        let allColumns = params.columnApi.getAllColumns();
        for (let i = 0; i < allColumns.length; i++) {
            let column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.colId);
            } else {
                columnsToShow.push(column.colId);
            }
        }
        params.columnApi.setColumnsVisible(columnsToShow, true);
        params.columnApi.setColumnsVisible(columnsToHide, false);
        params.api.sizeColumnsToFit();
    }

    render() {
        return (
            <div id="myGrid" className="grid-wrapper myGrid ag-theme-balham">
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.rowData.holdings}
                    onGridReady={this.onGridReady}
                    onGridSizeChanged={this.onGridSizeChanged}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        headerComponentParams: {
                            menuIcon: 'fa-bars'
                        }
                    }}
                />
            </div>
        );
    }
}

