//import * as Types from '../actions/types'
const initialState = {
  user:JSON.parse(localStorage.getItem("user")),
  isAuth: localStorage.getItem("isAuth")==="true" ? true:false,
  errors: null,
  token: null, 
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "REGISTER":
    case "LOGIN":
      localStorage.setItem("auth-token", payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(payload.user));
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        errors: null,
        isAuth: true,
      };
    case "LOGIN_FAIL":
    case "REGISTER_FAIL":
      return {
        ...state,
        errors: payload,
        isAuth: false,
      };
      case "LOGOUT":
      localStorage.clear()
      return {
        user:null,
        token:null,
        isAuth:false,
        errors:null,
      }
    default:
      return state;
  }
};

export default authReducer;
