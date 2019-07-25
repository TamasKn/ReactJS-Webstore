import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import {auth} from '../../Firebase/Firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectUser } from '../../Redux/UserReducer/UserSelectors'
import { selectCartToggle } from '../../Redux/CartReducer/CartSelectors'
import logo from '../../static/dogday_logo.png'


const Header = ({userData, hidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/' >
                <img className='logo' src={logo} width='100px' height='100px' />
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
            {
                (hidden)
                ? null
                : <CartDropdown />
            }
            
        </div>
    )
}

const mapState = createStructuredSelector({
    userData: selectUser,
    hidden: selectCartToggle
})

export default connect(mapState)(Header)