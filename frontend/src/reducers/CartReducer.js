const CartReducer = (state={cartProducts:[]}, action) => {
    switch(action.type) {
        case "CART_ADD_PRODUCT":
        const item = action.payload;
        const existItem = state.cartProducts.find((x) => x.product === item.product);
        if(existItem) {
            return {...state, 
                cartProducts: state.cartProducts.map((x) => x.product === existItem.product ? item : x)}
        } else {
        return {...state, cartProducts: [...state.cartProducts, item]}
        }
        case "CART_REMOVE_PRODUCT":
   
    return {...state, cartProducts: state.cartProducts.filter(x=> x.product !== action.payload)}
        
    default: 
        return state;
    }

};
export default CartReducer; 