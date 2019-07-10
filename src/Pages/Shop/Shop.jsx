import React from 'react'
import './Shop.scss'
import ShopData from './ShopData.js'
import Preview from '../../Components/Preview/Preview'

class Shop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            collections: ShopData
        }
    }

    render() {

        const {collections} = this.state

        return(
            <div className='shop-page' >
                { collections.map( ({ id, ...collectionProps }) => (
                    
                    <Preview key={id} {...collectionProps} />
                    
                ))}
            </div>
        )
    }
}

export default Shop