import React, {Component} from 'react';
import { Autocomplete } from "@material-ui/lab";
import { TextField, makeStyles} from "@material-ui/core";

class FundAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundTags: props.fundTags
        };
    }

    useStyles = makeStyles(theme => ({
        tag: {
            marginTop: 3,
            height: 20,
            padding: '.15em 4px',
            fontWeight: 600,
            lineHeight: '15px',
            borderRadius: 2,
        },
    }));

    onTagsChange = (event, values) => {
        this.setState({
            fundTags: values
        }, () => {
            // This will output an array of objects
            // given by Autocompelte options property.
            this.props.handleFundsChanged(this.state.fundTags)
        });
    }

    render() {
        return (
            <div style={{ width: 500 }}>
                <Autocomplete
                    multiple
                    options={fundAndTickers}
                    getOptionLabel={option => option.fund}
                    defaultValue={this.state.fundTags}
                    onChange={this.onTagsChange}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Select Funds"
                            //placeholder="Select Funds"
                            margin="normal"
                            fullWidth
                        />
                    )}
                />
            </div>
        );
    }
}

const fundAndTickers = [
    { fund: 'Electronic Arts Inc', ticker: 'EA' },
    { fund: 'Baidu Inc', ticker: 'BIDU' },
    { fund: 'Spotify Technology SA', ticker: 'SPOT' },
    { fund: 'Urban Outfitters Inc', ticker: 'URBN' },
    { fund: 'PVH Corp', ticker: 'PVH' },
    { fund: 'Home Depot Inc', ticker: 'HD' },
    { fund: 'iRobot Corp', ticker: 'IRBT' },
    { fund: 'Expedia Group Inc', ticker: 'EXPE' },
    { fund: 'Yeti Holdings Inc', ticker: 'YETI' },
    { fund: 'Constellation Brands Inc', ticker: 'STZ' },
    { fund: 'Costco Wholesale Corp', ticker: 'COST' },
    { fund: 'Pioneer Natural Resources Co', ticker: 'PXD' },
    { fund: 'EOG Resources Inc', ticker: 'EOG' },
    { fund: 'BlackRock Inc', ticker: 'BLK' },
    { fund: 'JPMorgan Chase & Co', ticker: 'JPM' },
    { fund: 'SVB Financial Group', ticker: 'SIVB' },
    { fund: 'Alexion Pharmaceuticals Inc', ticker: 'ALXN' },
    { fund: 'Biogen Inc', ticker: 'BIIB' },
    { fund: 'Abiomed Inc', ticker: 'ABMD' },
    { fund: 'Cigna Corp', ticker: 'CI' },
    { fund: 'Quidel Corp', ticker: 'QDEL' },
    { fund: 'Supernus Pharmaceuticals Inc', ticker: 'SUPN' },
    { fund: 'Boeing Co', ticker: 'BA' },
    { fund: 'XPO Logistics Inc', ticker: 'XPO' },
    { fund: 'Caterpillar Inc', ticker: 'CAT' },
    { fund: 'United Rentals Inc', ticker: 'URI' },
    { fund: 'Salesforce.com Inc', ticker: 'CRM' },
    { fund: 'Adobe Inc', ticker: 'ADBE' },
    { fund: 'Lumentum Holdings Inc', ticker: 'LITE' },
    { fund: 'Micron Technology Inc', ticker: 'MU' },
    { fund: 'Broadcom Inc', ticker: 'AVGO' },
    { fund: 'Monolithic Power Systems Inc', ticker: 'MPWR' },
    { fund: 'Palo Alto Networks Inc', ticker: 'PANW' },
    { fund: 'Packaging Corp of America', ticker: 'PKG' },
    { fund: 'Jones Lang LaSalle Inc', ticker: 'JLL' },
];


export default FundAutocomplete;