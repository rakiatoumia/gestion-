import axios from "axios";
///aafficher action 
export const afficherfournisseur =( )=> async (dispatch)=>{
  try {
    const res= await axios.get("http://localhost:5000/Fournisseurs/afficherfournisseur")
     dispatch({
       type:'AFFICHER_FOURNISSEUR',
       payload:res.data.fournisseurs,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }

///add action

export const addfournisseur =(newfournisseur)=> async (dispatch)=>{
  try {
    const res= await axios.post("http://localhost:5000/Fournisseurs/addfournisseur",newfournisseur)
     dispatch({
       type:'ADD_FOURNISSEUR',
       payload:res.data.fournisseur,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
 
  ///add action 

export const deletefournisseur =(id)=> async (dispatch)=>{
  try {
    await axios.delete(`http://localhost:5000/Fournisseurs/deletefournisseur/${id}`)
    .then(console.log("fournisseur deleted"))
     dispatch({
       type:'DELETE_FOURNISSEUR',
       payload:id,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
  /**************************** */
  export const editfournisseur =(id,updatedfournisseur)=> async(dispatch)=>{
    try {
      const res =await axios.put(`http://localhost:5000/Clients/editclient/${id}`,updatedfournisseur)
      .then(console.log("fournisseur Updated"))
       dispatch({
         type:'UPDATE_FOURNISSEUR',
         payload:res.data,
       }) ;
    }
     catch(error)
    { console.log(error.message);
    }
    }