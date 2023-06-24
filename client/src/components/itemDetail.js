import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemByIdAsync } from '../redux/thunks';

function ItemDetail() {
    const dispatch = useDispatch();
    const selectedItem = useSelector(state => state.selectedItem);

    useEffect(() => {
        if (selectedItem && selectedItem.id) {
            dispatch(fetchItemByIdAsync(selectedItem.id));
        }
    }, [dispatch, selectedItem]);

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
