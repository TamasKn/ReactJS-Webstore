import React from 'react'
import './Shop.scss'
import Preview from '../../Components/Preview/Preview'
import { selectCollections } from '../../Redux/Shop/ShopSelectors'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

const Shop = ({ collections }) => {

    return(
        <div className='shop-page' >
            { collections.map( ({ id, ...collectionProps }) => (
                    
                <Preview key={id} {...collectionProps} />
                    
            ))}
        </div>
    )
}

const mapState = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapState)(Shop)