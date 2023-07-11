import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchItemsAsync } from '../redux/thunks';

function ItemFilterForm() {
    const dispatch = useDispatch();

    const [search, setName] = useState("");
    const [price, setPrice] = useState("");
    const [sort, setSort] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const filters = {
            search,
            price,
            sort
        };

        dispatch(fetchItemsAsync(filters));

        // clear form fields
        setName("");
        setPrice("");
        setSort("");
    }

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    return (
        <div className="ItemFilterForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={search} onChange={e => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Price:
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </label>
                <br />
                <label>
                    Sort:
                    <div>
                        <label>
                            <input type="radio" value="asc" checked={sort === "asc"} onChange={handleSortChange} />
                            Ascending
                        </label>
                        <label>
                            <input type="radio" value="desc" checked={sort === "desc"} onChange={handleSortChange} />
                            Descending
                        </label>
                    </div>
                </label>
                <br />
                <button type="submit">Fetch Items</button>
                <button type="reset" onClick={() => {setName(""); setPrice(""); setSort("");}}>Clear</button>
            </form>
        </div>
    );
}

export default ItemFilterForm;

