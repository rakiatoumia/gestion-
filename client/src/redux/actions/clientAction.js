import axios from "axios";
///ajouter action 


export const afficherclient =( )=> async (dispatch)=>{
  try {
    const res= await axios.get(`http://localhost:5000/Clients/afficherclient`)
     dispatch({
       type:'AFFICHER_CLIENT',
       payload:res.data.clients,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }

///add action 

export const addclient =( newclient)=> async (dispatch)=>{
  try {
    const res= await axios.post(`http://localhost:5000/Clients/addclient`,newclient)
    console.log(res.data.client)
     dispatch({
       type:'ADD_CLIENT',
       payload:res.data.client,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }

  ///delete action 
export const deleteclient =(id)=> async (dispatch)=>{
  try {
    await axios.delete(`http://localhost:5000/Clients/deleteclient/${id}`)
     dispatch({
       type:'DELETE_CLIENT',
       payload:id,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }

  /******************************** */
  export const editclient =(id,updatedclient)=> async(dispatch)=>{
    try {
      const res =await axios.put(`http://localhost:5000/Clients/editclient/${id}`,updatedclient)
      .then(console.log("client Updated"))
      console.log(res.data);
       dispatch({
         type:'UPDATE_CLIENT',
         payload:res.data,
       }) ;
    }
     catch(error)
    { console.log(error.message);
    }
    }