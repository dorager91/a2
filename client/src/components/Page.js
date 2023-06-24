import React from 'react';
import ItemForm from "./itemForm";
import ItemList from "./itemList";
import ItemDetail from './itemDetail';
import ItemUpdateForm from './itemUpdateForm';
import ItemFilterForm from './itemFilterForm';

export default function App() {
    return (
        <div>
            <ItemForm />
            <ItemUpdateForm />
            <ItemFilterForm />
            <ItemList />
            <ItemDetail />
        </div>
    );
}

