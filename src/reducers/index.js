import { combineReducers } from 'redux';
import { photosReducer } from "./photosReducer"
import { userReducer } from "./userReducer"
import { cartReducer } from "./cartReducer"


export const rootReducer = combineReducers({
    photos: photosReducer,
    user: userReducer,
    cart: cartReducer
})