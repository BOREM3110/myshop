import React from "react";
import Product from "../components/Product";
import {useSelector} from "react-redux";

const ElectronicPage = () => {
    const productsList = useSelector(state=> state.productsList);
    const { products} = productsList;
    const electronicProducts = products.filter((x)=> x.category === "electronic");
    
    return (
        <div>
             <div className="row center" >
                 {
                    electronicProducts.map((product) => (
                     <Product key={product._id} product={product} ></Product>
                    ))}
                    </div>
           
                 
             
        </div>
    )
};
export default ElectronicPage;