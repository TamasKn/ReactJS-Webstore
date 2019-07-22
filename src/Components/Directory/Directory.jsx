import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import {connect} from 'react-redux'
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelectors'
import { createStructuredSelector } from 'reselect'


const Directory = ({sections}) => {

        return(
            <div className='directory-menu'>
				{ sections.map( ({id, title, imageUrl, size, linkUrl}) => 
					<MenuItem key={id} title={title} img={imageUrl} size={size} linkUrl={linkUrl} />
				)}
            </div>
        )
}

const mapState = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapState)(Directory)