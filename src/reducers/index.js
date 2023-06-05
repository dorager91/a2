const initialState = {
    items: [
        {
            name: 'Item 1',
            description: 'This is item 1',
            price: '10',
            image: 'https://www.pngall.com/wp-content/uploads/2016/04/Banana-Free-PNG-Image.png',
        },
    ],
    selectedItem: null,
};
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] };
        case "DELETE_ITEM":
            return { ...state, items: state.items.filter((_, index) => index !== action.payload) };
        case "SELECT_ITEM":
            return { ...state, selectedItem: action.payload };
        default:
            return state;
    }
}