import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import './AnalysisGrid.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const AnalysisGrid = (props) => {

    const columnDefs = [
            {
                headerName: "",
                children:
                    [
                        {headerName: "Name", field: "name", width: 120, filter: true},
                        {headerName: "Ticker", field: "ticker", width: 75, filter: true},
                        {headerName: "Weight", field: "budget_data.weight", width: 100},
                        {headerName: "Stand Dev", field: "budget_data.sa_std_dev", width: 100},
                        {headerName: "Return", field: "budget_data.return", width: 100},
                    ]
            },
            {
                headerName: "Risk Contribution",
                children:
                    [
                        {headerName: "Marginal", field: "budget_data.mctr", width: 100},
                        {headerName: "Absolute", field: "budget_data.abs_cont_risk", width: 100},
                        {headerName: "Relative", field: "budget_data.rel_cont_risk", width: 100},
                    ]
            },
            {
                headerName: "Return Contribution",
                children:
                    [
                        {headerName: "Absolute", field: "budget_data.abs_cont_return", width: 100},
                        {headerName: "Relative", field: "budget_data.rel_cont_return", width: 100},
                    ]
            },
            {headerName: "Rel-Return - Rel-Risk", field: "budget_data.relrisk_relreturn", width: 100},
        ]

        return (
            <div
                className="ag-theme-balham grid-view">
                <AgGridReact
                    // listening for events
                    //onGridReady={onGridReady}

                    // binding to array properties
                    rowData={props.rowData.holdings}
                    columnDefs={columnDefs}

                    // setting default column properties
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        headerComponentParams: {
                            menuIcon: 'fa-bars'
                        }
                    }}>
                </AgGridReact>
            </div>
        );
}

export default AnalysisGrid;