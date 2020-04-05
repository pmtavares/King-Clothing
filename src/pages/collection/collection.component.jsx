import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component'
import './collection.style.css';
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selector'

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return(
        <div className="collection-page">
            <h2 className="collection-page-title">{title}</h2>
            <div className="collection-page-items">
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
            </div>
           
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

