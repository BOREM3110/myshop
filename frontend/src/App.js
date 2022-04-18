import {useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import MecanicPage from "./Pages/MecanicPage";
import ElectronicPage from "./Pages/ElectronicPage";
import SigninPage from "./Pages/SigninPage";
import RegisterPage from "./Pages/RegisterPage";
import {signOut} from "./actions/userSiginAction";


function App() {
const cart = useSelector(state=> state.cart);
const dispatch = useDispatch();
const productsList = useSelector(state=> state.productsList);
const { products } = productsList;
const categories = products?.length 
 ? products.map(({category})=> category)
 : [];
 const [open, setOpen] = useState(false);
 const allCategories = categories.filter((element, index, categories)=> element !== categories[index + 1]);
 
const { cartProducts } = cart;
const userSignin = useSelector((state)=> state.userSignin);
const { userInfo } = userSignin;
const signOutHandler = () => {
    dispatch(signOut());
}
const menuBar = () => {
    return (
        <div className={open ?"bars": "bars-close"} >
            {allCategories.map((category, index)=> <div key={index} className="bar" >
                <Link to={`/${category}`} onClick={()=>setOpen(!open)} > {category}</Link></div>
               
            )}

        </div>
    )
}

  return (
      <BrowserRouter>
    <div className="grid-container" >
            <header className="row">
                <div>
                    <Link className="brand" to="/">My shop</Link>
                   <span className ="menu-bar">
                       <i onClick={()=> setOpen(!open)} className="fa fa-bars"></i>
                   </span>
                  <div> {menuBar()}</div>
                </div>

                <div>
                    <Link to="/cart/:id">Cart
                    {cartProducts.length > 0 && (
                        <span className="badge" >{cartProducts.length}</span>
                    )}
                    </Link>
                    {
                        userInfo ? (
                            <div className="dropdown" >
                            <Link to="/" >{userInfo.name} <i className="fa fa-caret-down" ></i> </Link>
                            <ul className="dropdown-content" >
                                <Link to="#signout" onClick={signOutHandler} >Sign Out</Link>
                            </ul>
                            </div>
                        ): (
                            <Link to="/signin">Sign In</Link>
                        )
                    }
                   
                </div>
            </header>
            <main>
                <Routes>
                <Route path="/mecanic" element={<MecanicPage />} ></Route>
                 <Route path="/electronic" element={<ElectronicPage />} ></Route> 
                    <Route path="/cart/:id" element={<CartPage />} ></Route>
                    <Route path="/product/:id" element={<ProductPage />}  ></Route>
                    <Route path="/signin" element={<SigninPage />}  ></Route>
                    <Route path="/register" element={<RegisterPage />}  ></Route>
                    <Route path="/" element={<HomePage />} exact ></Route>
              
                  </Routes>
            </main>
            <footer className="row center" >All right reserved</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
