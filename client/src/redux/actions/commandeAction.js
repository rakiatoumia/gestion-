import axios from "axios";
///ajouter action 
export const affichercommande =( )=> async (dispatch)=>{
  try {
    const res= await axios.get("http://localhost:5000/Commandes/affichercommande")
     dispatch({
       type:'AFFICHER_COMMANDE',
       payload:res.data.commandes,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
///add action 
export const addcommande =(newcommande)=> async (dispatch)=>{
  try {
    const res= await axios.post("http://localhost:5000/Commandes/addcommande",newcommande)
    console.log(res.data.commande)
     dispatch({
       type:'ADD_COMMANDE',
       payload:res.data.commande,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
  ///delete action 
export const deletecommande =(id)=> async (dispatch)=>{
  try {
    await axios.delete(`http://localhost:5000/Commandes/deletecommmande/${id}`)
     dispatch({
       type:'DELETE_COMMANDE',
       payload:id,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }