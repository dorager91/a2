import React from 'react';
import ItemAddForm from "./itemAddForm";
import ItemList from "./itemList";
import ItemDetail from './itemDetail';
import ItemUpdateForm from './itemUpdateForm';
import ItemFilterForm from './itemFilterForm';

export default function App() {
    return (
        <div>
            <ItemAddForm />
            <ItemUpdateForm />
            <ItemFilterForm />
            <ItemList />
            <ItemDetail />
        </div>
    );
}

