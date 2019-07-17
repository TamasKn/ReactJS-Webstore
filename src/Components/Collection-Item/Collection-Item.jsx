import React from 'react'
import './Collection-Item.scss'
import CustomButton from '../CustomButton/CustomButton'
import {connect} from 'react-redux'
import {addItem} from '../../Redux/CartReducer/CartActions'

const CollectionItem = ({item, addItem}) => {

    const {name, price, imageUrl} = item

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
                <CustomButton onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatch = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatch)(CollectionItem)
