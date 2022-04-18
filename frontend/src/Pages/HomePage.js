import React, {useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import AlertBox from "../components/AlertBox";
import {useSelector, useDispatch} from "react-redux";
import {listProducts} from "../actions/productAction";



const HomePage = () => {
    const dispatch = useDispatch();
   
    useEffect(()=> {
     dispatch(listProducts()); 
     
     }, [dispatch])
     const productsList = useSelector((state) => state.productsList);
    
   const {products, loading, error} = productsList;




    return (
 <div>
       
            {loading? (<LoadingBox></LoadingBox>):error? (<AlertBox variant="danger" >{error}</AlertBox>):(
                <div className="row center" >
                 {
                    products.map((product) => (
                     <Product key={product._id} product={product} ></Product>
                    ))}
                    </div>
            )}
                 
            </div>             
    )

};
export default HomePage;