import Axios from "axios";

const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST";
const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS";
const USER_SIGNIN_FAIL = "USER_SIGNIN_FAIL";
const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";
const USER_SIGN_OUT = "USER_SIGN_OUT";

export const signin = (email, password) => async(dispatch)=> {
dispatch ({
    type: USER_SIGNIN_REQUEST,
    payload: {email, password}
});
try {
const {data} = await Axios.post("/api/users/signin", {email, password});
dispatch({
    type: USER_SIGNIN_SUCCESS,
    payload: data

})
localStorage.setItem("userInfo", JSON.stringify(data))
}catch(error) {
    dispatch({
type: USER_SIGNIN_FAIL,
payload: error.response && error.response.data.message ? error.response.data.message: error.message
    })
}
};
export const signOut = ()=> (dispatch)=> {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartProducts");
  dispatch({
      type: USER_SIGN_OUT
  })
}

export const register = (name, email, password) => async(dispatch) => {
    dispatch({
            type: USER_REGISTER_REQUEST,
            payload: {name, email, password }
    });
    try{
        const { data } = await Axios.post('api/users/register', {name, email, password});
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data})
            dispatch({
                type: USER_SIGNIN_SUCCESS,
                payload: data
              
            })
        localStorage.setItem("userInfo", JSON.stringify(data))
    }catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message: error.message
        })

    }
}