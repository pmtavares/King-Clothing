import React from 'react';
import './collection-item.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) =>{
   const {name, price, imageUrl} = item;
   return (
      
      <div className="collection-item">         
         <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>
            <CustomButton inverted onClick={() => addItem(item)} className={"itemButton"}>Add to cart</CustomButton>
   
         </div>
        
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
            
         </div>
        
      </div>
      
   )
};

const mapDispatchToProps = (dispatch) => ({
   addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);