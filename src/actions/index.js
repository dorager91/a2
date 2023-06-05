export const addItem = (item) => ({
    type: "ADD_ITEM",
    payload: item,
});

export const deleteItem = (index) => ({
    type: "DELETE_ITEM",
    payload: index,
});

export const selectItem = (item) => ({
    type: "SELECT_ITEM",
    payload: item,
});
