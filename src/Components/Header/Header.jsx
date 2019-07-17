import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {auth} from '../../Firebase/Firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'

const Header = ({userData}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/' >
                <span className='logo' >Logo</span>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>

                {
                    userData
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />

            </div>
        </div>
    )
}

const mapState = state => ({
    userData: state.user.userData
})

export default connect(mapState)(Header)