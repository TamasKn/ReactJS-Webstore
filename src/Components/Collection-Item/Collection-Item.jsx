import React from 'react'
import './Collection-Item.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>&pound; {price}</span>
                </div>
        </div>
    )
}

export default CollectionItem
