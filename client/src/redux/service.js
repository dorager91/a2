const url = 'https://backend-dwtm.onrender.com/items/';

const fetchItems = async (filters = {}) => {
    // Convert filters object into query string
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`${url}?${query}`);

    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};


const fetchItemById = async (id) => {
    const response = await fetch(url + id);
    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};

const addItem = async (item) => {
    console.log(item);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};

const updateItem = async (item) => {
    const response = await fetch(url + item._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};

const deleteItem = async (id) => {
    const response = await fetch(url + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if (!response.ok) {
        const errorMsg = await response.text();
        throw new Error(errorMsg);
    }
    return data;
};

module.exports = { fetchItems, fetchItemById, addItem, updateItem, deleteItem };
