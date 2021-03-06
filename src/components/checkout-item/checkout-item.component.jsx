import React from 'react';
import './checkout-item.style.css';
import {connect} from 'react-redux';
import {clearItemFromCart,removeItem, addItem  } from '../../redux/cart/cart.actions';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const  {name, imageUrl, quantity,price} = cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl} className="container-image"/>
        </div>
        <span className='name-description'>{name}</span>
        <span className='quantity-item'>
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price-item'>{price}</span>
        <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        
    </div>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);