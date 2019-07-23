import React from 'react'
import './CollectionsOverview.scss'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Preview from '../Preview/Preview'
import { selectCollections } from '../../Redux/Shop/ShopSelectors'

const CollectionOverview = ({ collections }) => {
    return(
        <div className='collections-overview'>
            { collections.map( ({ id, ...collectionProps }) => (
                    
                    <Preview key={id} {...collectionProps} />
                        
                ))}
        </div>
    )
}

const mapState = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapState)(CollectionOverview)