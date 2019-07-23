import React from 'react'
import './Collection.scss'
import CollectionItem from '../../Components/Collection-Item/Collection-Item'
import { selectCollection } from '../../Redux/Shop/ShopSelectors'
import { connect } from 'react-redux'

const Collection = ({ collection }) => {

    const {title, items} = collection

    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapState = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapState)(Collection)