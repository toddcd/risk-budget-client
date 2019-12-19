import React, {Component} from 'react';
import { Autocomplete } from "@material-ui/lab";
import { TextField, withStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = theme => ({
        tag: {
            backgroundColor: "#6B87BF",
            height: 24,
            position: "relative",
            zIndex: 0,
            "& .MuiChip-label": {
                color: "#fff"
            },
            "& .MuiChip-deleteIcon": {
                color: "#99B5D8"
            },
            "&:after": {
                content: '""',
                right: 10,
                top: 6,
                height: 12,
                width: 12,
                position: "absolute",
                backgroundColor: "white",
                zIndex: -1
            }
        }
});

class FundAutocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundTags: props.fundTags
        };
    }

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
        const { classes } = this.props;
        return (
            <div  style={{ width: 500 }}>
                <Autocomplete
                    multiple
                    id="tags-standard"
                    classes={{tag: classes.tag}}
                    options={fundAndTickers}
                    getOptionLabel={option => option.fund}
                    defaultValue={this.state.fundTags}
                    onChange={this.onTagsChange}
                    renderInput={params => (
                        <Box mr={2} ml={2}>
                        <TextField
                            {...params}
                            variant="standard"
                            label="Select Funds"
                            //placeholder="Select Funds"
                            margin="normal"
                            fullWidth
                        />
                        </Box>
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


export default withStyles(useStyles) (FundAutocomplete);