import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams, Link} from "react-router-dom";
import {addToCart} from "../actions/cartActions";
import {removeFromCart} from "../actions/cartActions";
import AlertBox from "../components/AlertBox";

const CartPage =() => {

    const {id} = useParams();
    const cart = useSelector((state)=> state.cart);
  const {cartProducts} = cart;
  console.log(cartProducts);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const qty = Number(searchParams.get("qty")) || 1;
   
    useEffect(()=> {
        if (id) {
        dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])
        
            const removeFromCartHandler = (id) =>{
            dispatch(removeFromCart(id))
            }
            
       
    
      
 
   
   
    
 
   
    return (
        <div className="row top">
            <div className="col-2" >
                <h1>Shopping Cart</h1>
                {cartProducts.length === 0? <AlertBox>
                    <Link to="/" >Go to Shopping</Link>
                </AlertBox>:(
                    <ul>
                        {cartProducts.map((item)=> (
                            <li key={item.product} >
                                <div className="row">
                                    <div>
                                        <img src={item.image} alt={item.name} className="small" />
                                    </div>
                                    <div className="min-30" >
                                        <Link to={`/product/${item.product}`} >{item.name}</Link>
                                    </div>
                                    <div>
                                        <select value={item.qty} onChange={(e)=> dispatch(addToCart(item.product, Number(e.target.value))  )} >
                                        {
                                        [...Array(item.numInStock).keys()].map( x => (
                                            <option key={x+1} value={x+1} >{x+1}</option>
                                        ))
                                        }
                                        </select>
                                    </div>
                                    <div>${item.price}</div>
                                    <div>
                                        <button type="button" onClick={()=> removeFromCartHandler(item.product)} >Delete</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) }
            </div>
            <div className="col-1" >
                <div className="card card-body" >
                    <ul>
                        <li>
                            <h2>SubTotal ({cartProducts.reduce((a, c)=> a + c.qty, 0)} items) : $ {cartProducts.reduce((a, c) => a + c.price * c.qty, 0)}</h2>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default CartPage;