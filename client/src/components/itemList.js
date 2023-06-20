import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, selectItem } from '../actions';

function ItemList() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const handleDelete = (index) => {
        dispatch(deleteItem(index));
    };

    const handleSelect = (item) => {
        dispatch(selectItem(item));
    };

    return (
        <div className="ItemList">
            {items.map((item, index) => (
                <div key={index} className="item">
                    <h2 onClick={() => handleSelect(item)}>{item.name}</h2>
                    <img src={item.image} alt={item.name} onClick={() => handleSelect(item)} />
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList;

