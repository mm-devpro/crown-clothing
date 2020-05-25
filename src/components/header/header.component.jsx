import React from "react";
import {Link} from "react-router-dom";
import './header.styles.scss';

import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/logo.svg";

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                    :
                <Link className='option' to='/signIn'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;