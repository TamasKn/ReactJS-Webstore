import React from 'react'
import {auth} from '../../Firebase/Firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { createStructuredSelector } from 'reselect'
import { selectUser } from '../../Redux/UserReducer/UserSelectors'
import { selectCartToggle } from '../../Redux/CartReducer/CartSelectors'
import logo from '../../static/dogday_logo.png'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './HeaderStyles'


const Header = ({userData, hidden}) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/' >
                <img className='logo' src={logo} width='100px' height='100px' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>

                {
                    userData
                    ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                    : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />

            </OptionsContainer>
            {
                (hidden)
                ? null
                : <CartDropdown />
            }
            
        </HeaderContainer>
    )
}

const mapState = createStructuredSelector({
    userData: selectUser,
    hidden: selectCartToggle
})

export default connect(mapState)(Header)