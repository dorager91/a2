import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions';

function ItemForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            description,
            price,
            image
        };

        dispatch(addItem(item));

        // clear form fields
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
    }

    return (
        <div className="ItemForm">
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
            <button type="submit">Add Item</button>
            <button type="reset" onClick={() => {setName(""); setDescription(""); setPrice(""); setImage("");}}>Clear</button>
        </form>
        </div>
    );
}

export default ItemForm;

