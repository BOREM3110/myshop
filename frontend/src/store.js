import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducers/CartReducer";
import {userSigninReducer} from "./reducers/userReducer";
import {userRegisterReducer} from "./reducers/userReducer";
import {productReducer} from "./reducers/productReducer";
import {productDetailsReducer} from "./reducers/productReducer";

const initialState = {
    cart: {
    cartProducts: localStorage.getItem('cartProducts')? JSON.parse(localStorage.getItem('cartProducts')):[]
    },
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null,
    },
    userRegister: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null,
    }
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    productsList: productReducer,
    productDetails: productDetailsReducer,
    cart: CartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer

})
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;