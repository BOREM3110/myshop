import React from "react";
import Product from "../components/Product";
import {useSelector} from "react-redux";

const MecanicPage = () => {
    const productsList = useSelector(state=> state.productsList);
    const { products} = productsList;
    const mecanicProducts = products.filter((x)=> x.category === "mecanic");
    console.log(mecanicProducts)
    return (
        <div>
             <div className="row center" >
                 {
                    mecanicProducts.map((product) => (
                     <Product key={product._id} product={product} ></Product>
                    ))}
                    </div>
           
                 
             
        </div>
    )
};
export default MecanicPage;