import React from 'react';
import {Link} from 'react-router-dom';
import crown from  '../../assets/crown.png';
import {auth} from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.css';


const Header = ({currentUser, hidden}) =>
(
    <div className="header">
         <Link className="logo-container" to="/">
            <img src={crown} className="crown-image" alt="Home page"/>
         </Link>
         <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>           
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className="option" to="/signin">SIGNIN</Link>
            }
            <CartIcon />
         </div>
         {
             hidden? null : <CartDropdown />
         }
         
    </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);