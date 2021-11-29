import axios from "axios";
///register action 

export const register =(data,history)=> async (dispatch)=>{
  try {
    const res= await axios.post("http://localhost:5000/Users/register",data)
     dispatch({
       type:'REGISTER',
       payload:res.data,
     }) ;
     history.push("/Dashboard");
     console.log(res.data) ;
  }
   catch(error)
 { dispatch({
   type:"REGISTER_FAIL",
   payload:error,
 })}
  }

///login action 

  export const login =(data,history)=> async(dispatch)=>{
  
    try {
      const res= await axios.post("http://localhost:5000/Users/login",data)
       dispatch({
         type:'LOGIN',
         payload:res.data,
       });

       history.push("/Dashboard");
       console.log(res.data) ;
  
    }
     catch(error)
    { console.log("ERROR::",error.response);
    }
    }
    
  export const logout =(history)=> async(dispatch)=>{
    try {
       dispatch({
         type:'LOGOUT',
       });
       history.push("/");
  
    }
     catch(error)
    { console.log("ERROR::",error);
    }
    }