import React from 'react';
import {Box, Container, Grid, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const EditPortfolioFundAttributes = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmitPortfolio}>
                <ul> {props.fundTags.map(tag => {
                    return (<li key={tag.ticker} style={{listStyleType: 'none'}}>
                            <Grid container
                                  display="flex"
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                  wrap='wrap'
                            >
                                <Box display='flex' flex='auto' wrap='wrap' mt={5} ml={0} mr={2}
                                     justifyContent='flex-start'>
                                    <Typography>
                                        {tag.fund}
                                    </Typography>
                                </Box>
                                <Box display='flex' flex='auto' wrap="nowrap" mt={3} ml={0} mr={3}
                                     justifyContent='flex-end'>
                                    <TextField
                                        variant="standard"
                                        required
                                        id="fund_weight"
                                        label="Weight"
                                        name="weight"
                                        style={{width: 100}}
                                    />
                                    <TextField
                                        variant="standard"
                                        required
                                        id="fund_risk"
                                        label="Risk"
                                        name="risk"
                                        style={{width: 100}}
                                    />
                                    <TextField
                                        variant="standard"
                                        required
                                        id="fund_return"
                                        label="Return"
                                        name="return"
                                        style={{width: 100}}
                                    />
                                </Box>
                            </Grid>
                        </li>
                    )
                })}</ul>
            </form>
        </div>
    );
};

export default EditPortfolioFundAttributes;
