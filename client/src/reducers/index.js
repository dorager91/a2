import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchItemsAsync, fetchItemByIdAsync, addItemAsync, deleteItemAsync, updateItemAsync } from '../redux/thunks';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        selectedItem: null,
        status: 'idle',
        error: null
    },
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItemsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
            .addCase(fetchItemsAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })
            .addCase(addItemAsync.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteItemAsync.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item._id !== action.payload._id);
            })
            .addCase(updateItemAsync.fulfilled, (state, action) => {
                console.log(action.payload);
                const index = state.items.findIndex(item => item._id === action.payload._id);
                if (index !== -1) {
                    console.log(action.payload);
                    state.items[index] = action.payload;
                }
            });
    }
});

export const { selectItem } = itemsSlice.actions;

export default itemsSlice.reducer;
