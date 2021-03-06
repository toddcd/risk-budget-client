import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faArrowAltCircleDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PortfolioCollectionContext from '../../context/PortfolioCollectionContext'
import PortfolioApiService from '../../services/portfolio-api-service'
import PortfolioCollection from '../../components/PortfolioCollection/PortfolioCollection'
import {Button, Section} from '../../components/Utils/ElementUtils'
import './PortfolioCollectionPage.css'

export default class BicycleGalleryPage extends Component {
    constructor() {
        super();
        this.state = {open: false,};
        library.add(faArrowAltCircleDown)
    }
    static contextType = PortfolioCollectionContext

    // //TODO -- If multiple calls needed, look at using promise.all block if needed
    componentDidMount() {

        this.context.clearError()
        PortfolioApiService.getPortfolioCollection()
            .then(this.context.setPortfolioCollection)
            .then()
            .catch(this.context.setError)
    }

    handleDeletePortfolio = (e) =>{
        const portId = e.target.dataset.id;
        PortfolioApiService.deletePortfolio(portId)
            .then(this.context.removePortfolio(portId))
            .catch(this.context.setError)
    }

    renderPortfolioCollection() {
        const collection = this.context.portfolioCollection;
        if (collection.portfolios) {
            return (
              <Fragment>
                        <div className='new-portfolio'>
                            <Link to={`/collection/new-portfolio`}>
                                <Button className='Button'>Add Portfolio</Button>
                            </Link>
                            <Button><a className='download-button' href={require("../../assets/portfolio_template.csv")}
                                       download>Template</a><FontAwesomeIcon icon="arrow-alt-circle-down" className='font-awesome-arrow-down'/></Button>
                        </div>
                        {collection.portfolios.map(portfolio =>
                            <PortfolioCollection
                                key={portfolio.port_id}
                                deletePortfolio={this.handleDeletePortfolio}
                                portfolio={portfolio}
                            />)}
              </Fragment>
            )
        } else {
            return (
                <Link to={`/collection/newPortfolio`} >
                    <Button className='Button'>Add Portfolio</Button>
                </Link>
            )
        }
    }
    render() {
        const {error} = this.context
        return (
            <Section className='portfolio-collection-section' >
                {error
                    ? <p className='red'>{'There was an error. Are you logged in?'}</p>
                    : this.renderPortfolioCollection()}
            </Section>
        )
    }
}
