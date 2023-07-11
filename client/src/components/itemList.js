import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAsync, deleteItemAsync } from '../redux/thunks';
import { selectItem } from '../reducers/index';


function ItemList() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);
    console.log(items);

    useEffect(() => {
        dispatch(fetchItemsAsync());
    }, [dispatch, items.length]);

    const handleDelete = (id) => {
        dispatch(deleteItemAsync(id));
    };

    const handleSelect = (item) => {
        dispatch(selectItem(item));
    };

    return (
        <div className="ItemList">
            {items.map((item) => (
                <div key={item._id} className="item">
                    <h2 onClick={() => handleSelect(item)}>{item.name}</h2>
                    <img src={item.image} alt={item.name} onClick={() => handleSelect(item)} />
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
