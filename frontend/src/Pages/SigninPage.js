import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../actions/userSiginAction";
import LoadingBox from "../components/LoadingBox";
import AlertBox from "../components/AlertBox";


const SigninPage = ()=> {
    const dispatch = useDispatch();
   const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const userSignin = useSelector((state)=> state.userSignin);
    const {loading, userInfo, error } = userSignin;
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    };
    useEffect(()=>{
        if(userInfo) {
            navigate("/")
        }
    }, [userInfo])
    return (
  <div>
      <form className="form" onSubmit={submitHandler} >
          <div>
              <h1>Sign In</h1>
          </div>
            {loading && <LoadingBox></LoadingBox>}
            {error && <AlertBox variant="danger" >{error}</AlertBox>}

        <div>
            <label htmlFor="email">Email adress</label>
            <input type="email" id="email" placeholder="Enter email" required onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <div>
            <label/>
            <button className="primary" type="submit" >Sign In</button>
        </div>
        <div>
            <label/>
            <div>
                New customer ? {' '}
                <Link to="/register">Create your account</Link>
            </div>
        </div>
      </form>
  </div>
    )
};
export default SigninPage;