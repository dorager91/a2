import ItemForm from "./itemForm";
import ItemList from "./itemList";
import React from 'react';
import ItemDetail from './itemDetail';

export default function App() {
    return (
        <div>
            <ItemForm />
            <ItemList />
            <ItemDetail />
        </div>
    );
}

