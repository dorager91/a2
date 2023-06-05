import React from 'react';
import { useSelector } from 'react-redux';

function ItemDetail() {
    const selectedItem = useSelector(state => state.selectedItem);

    // If no item is selected, don't render the component
    if (!selectedItem) {
        return null;
    }

    return (
        <div className="ItemDetail">
            <h2>{selectedItem.name}</h2>
            <h3>{selectedItem.description}</h3>
            <h3>Price: {selectedItem.price}</h3>
            <img src={selectedItem.image} alt={selectedItem.name} />
        </div>
    );
}

export default ItemDetail;
