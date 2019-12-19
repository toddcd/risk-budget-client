import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import FundAutocomplete from "../FundSelector/FundAutocomplete";
import '../FundSelector/FundSelector.css'
import {Button, Grid, Link, TextField, Box, Container} from "@material-ui/core";
import EditPortfolioFundAttributes from "../PortfolioBuilder/EditPortfolioFundAttributes";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select Funds', 'Assign Weights', 'Save and run analytics'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'Select Funds...';
        case 1:
            return 'Assign Weights';
        case 2:
            return 'Save and run analytics';
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper(props) {

    const classes = useStyles();
    const [activeStep,
        setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);

    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const getCurrentStepComp = (step) => {
        switch (step) {
            case 0:
                return (<FundAutocomplete handleFundsChanged={props.handleFundsChanged}
                                          fundTags={props.fundTags}/>);
            case 1:
                return (<EditPortfolioFundAttributes handleSubmitPortfolio={props.handleSubmitPortfolio}
                                                     fundTags={props.fundTags}/>);
            case 2:
                return `<div>SAVE</div>`;
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        {/*<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>*/}
                        <div className='fund-selector'>
                            {getCurrentStepComp(activeStep)}
                        </div>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}