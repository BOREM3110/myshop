import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/userSiginAction";
import LoadingBox from "../components/LoadingBox";
import AlertBox from "../components/AlertBox";


const RegisterPage = ()=> {
    const dispatch = useDispatch();
   const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [name, setName ] = useState('');
    const userRegister = useSelector((state)=> state.userRegister);
    const {loading, userInfo, error } = userRegister;
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and confirmPassword are different!");
        } else {
        dispatch(register(name, email, password))
        navigate('/');
        }
        
    };
    
    return (
  <div>
      <form className="form" onSubmit={submitHandler} >
          <div>
              <h1>Register</h1>
          </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <AlertBox variant="danger" >{error}</AlertBox>}

            <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" required onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="email">Email adress</label>
            <input type="email" id="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="confirmPassword">Password</label>
            <input type="password" id="confirmPassword" placeholder="Enter Confirm password" required onChange={(e)=>setConfirmPassword(e.target.value)}></input>
        </div>
       
        <div>
            <label/>
            <button className="primary" type="submit" >Register</button>
        </div>
        <div>
            <label/>
            <div>
                Already have an account ? {' '}
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
      </form>
  </div>
    )
};
export default RegisterPage;