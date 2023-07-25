import { createAsyncThunk } from '@reduxjs/toolkit';
import DataService from './service';

export const fetchItemsAsync = createAsyncThunk(
    "items/fetchItems",
    async (filters) => {
        return await DataService.fetchItems(filters);
    }
);

export const fetchItemByIdAsync = createAsyncThunk(
    "items/fetchItemById",
    async (id) => {
        return await DataService.fetchItemById(id);
    }
);

export const addItemAsync = createAsyncThunk(
    "items/addItem",
    async (item) => {
        return await DataService.addItem(item);
    }
);

export const deleteItemAsync = createAsyncThunk(
    "items/deleteItem",
    async (id) => {
        return await DataService.deleteItem(id);
    }
);

export const updateItemAsync = createAsyncThunk(
    "items/updateItem",
    async (item) => {
        return await DataService.updateItem(item);
    }
);
