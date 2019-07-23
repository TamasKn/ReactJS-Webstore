import React from 'react'
import './Shop.scss'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom'
import Collection from '../Collection/Collection'

const Shop = ({ match }) => {

    return(
        <div className='shop-page' >
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    )
}

export default Shop