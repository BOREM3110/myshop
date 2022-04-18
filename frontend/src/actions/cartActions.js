import Axios  from "axios";

const CART_ADD_PRODUCT = "CART_ADD_PRODUCT";
const CART_REMOVE_PRODUCT = "CART_REMOVE_PRODUCT";
export const addToCart = (id, qty) => async (dispatch, getState) => {
 const { data } = await Axios.get(`/api/products/${id}`);
 dispatch({
     type: CART_ADD_PRODUCT,
     payload: {name: data.name,
     image: data.image,
     price: data.price,
     numInStock: data.numInStock,
    product: data._id,
    qty,
     }
 })
 localStorage.setItem('cartProducts', JSON.stringify(getState().cart.cartProducts))
}
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_PRODUCT,
        payload: id
    });
    localStorage.setItem("cartProducts", JSON.stringify(getState().cart.cartProducts))
};
