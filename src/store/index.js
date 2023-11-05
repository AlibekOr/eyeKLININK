import { legacy_createStore as createStore, combineReducers } from "redux"
import { data } from "../data"
const initialState = []
const reducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'AddItem':
            if (state.find(item => item.id === action.payload.id) === undefined) {
                return [...state, {
                    id: data[action.payload.id - 1].id,
                    name: data[action.payload.id - 1].name,
                    price: data[action.payload.id - 1].price,
                    img: data[action.payload.id - 1].img,
                    qty: 1,
                }]

            } else {
                return state.map(item => {
                    console.log(item);

                    if (item.id === action.payload.id) {
                        return {
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            img: item.img,
                            qty: item.qty + 1
                        }
                    }
                    else { return item }
                })
            }
        case 'Decrement':
            if (state.find(item => item.id === action.payload.id)?.qty === 1) {
                return state.filter(item => item.id !== action.payload.id)
            } else {
                return state.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        case 'Remove':
            return state.filter(item => item.id !== action.payload.id);
        case 'Reset':
            return state = []
        default:
            return state
    }
}
const rootReducer = combineReducers({
    cart: reducer
})
const store = createStore(rootReducer);
export default store;