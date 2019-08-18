import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
// import PortfolioCollectionContext from '../../context/PortfolioCollectionContext'
// import PortfolioApiService from '../../services/portfolio-api-service'
import PortfolioCollection from '../../components/PortfolioCollection/PortfolioCollection'
import {Button, Section} from '../../components/Utils/ElementUtils'
import './PortfolioCollectionPage.css'
import STORE from '../../STORE'


export default class BicycleGalleryPage extends Component {
    //static contextType = PortfolioCollectionContext

    // //TODO -- look at using promise.all block if needed
    // componentDidMount() {
    //     this.context.clearError()
    //     PortfolioApiService.getPorfolioCollection()
    //         .then(this.context.setPortfolioList)
    //         .then()
    //         .catch(this.context.setError)
    // }

    handleDeletePortfolio = () =>{
        console.log('DELETE PORTFOLIO')
    }

    renderPortfolioCollection() {
        //const collection = this.context.collection;
        const collection = STORE.portfolioCollection()

        if (collection) {
            return (
              <Fragment>
                        <div className='new-portfolio'>
                            <Link to={`/collection/new-portfolio`}>
                                <Button className='Button'>Add Portfolio</Button>
                            </Link>
                        </div>
                        {collection.map(portfolio =>
                            <PortfolioCollection
                                key={portfolio.port_id}
                                deletePortfolio={this.handleDeletePortfolio}
                                portfolio={portfolio}
                            />)}
              </Fragment>
            )
        } else {
            return (
                <Link to={`/collection/newPortfolio`} className='gallery_new_bike'>
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
