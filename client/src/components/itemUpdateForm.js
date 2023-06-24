import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemAsync } from '../redux/thunks';

function ItemUpdateForm() {
    const dispatch = useDispatch();
    const selectedItem = useSelector(state => state.selectedItem);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (selectedItem) {
            setName(selectedItem.name);
            setDescription(selectedItem.description);
            setPrice(selectedItem.price);
            setImage(selectedItem.image);
        }
    }, [selectedItem]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedItem = {
            id: selectedItem.id,
            name,
            description,
            price: Number(price),  // Ensure price is sent as a number
            image
        };

        console.log(updatedItem);
        dispatch(updateItemAsync(updatedItem));

        // clear form fields
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    }

    return (
        <div className="ItemUpdateForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={e => setDescription(e.target.value)} required />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="url" value={image} onChange={e => setImage(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Update Item</button>
                <button type="reset" onClick={() => {setName(""); setDescription(""); setPrice(""); setImage("");}}>Clear</button>
            </form>
        </div>
    );
}

export default ItemUpdateForm;
