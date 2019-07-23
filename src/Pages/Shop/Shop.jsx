import React from 'react'
import './Shop.scss'
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom'
import Category from '../Category/Category'

const Shop = ({ match }) => {

    return(
        <div className='shop-page' >
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categoryId`} component={Category} />
        </div>
    )
}

export default Shop