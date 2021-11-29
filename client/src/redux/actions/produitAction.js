import axios from "axios";
///afficher action 

export const afficherproduit =()=> async (dispatch)=>{
  try {
    const res= await axios.get("http://localhost:5000/Produits/afficherproduit");
     dispatch({
       type:'AFFICHER_PRODUIT',
       payload:res.data.produits,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }

///add action 

export const addproduit =(newproduit)=> async (dispatch)=>{
  try {
    const res= await axios.post("http://localhost:5000/Produits/addproduit",newproduit)
     dispatch({
       type:'ADD_PRODUIT',
       payload:res.data.produit,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
  ///delete action 

export const deleteproduit =(id)=> async (dispatch)=>{
  try {
    await axios.delete(`http://localhost:5000/Produits/deleteproduit/${id}`)
    .then(console.log("produit deleted"))
     dispatch({
       type:'DELETE_PRODUIT',
       payload:id,
     }) ;
  }
   catch(error)
  { console.log(error.message);
  }
  }
  //editproduit
  export const editproduit =(id,updatedproduit)=> async (dispatch)=>{
    try {
      const res =await axios.put(`http://localhost:5000/Produits/editproduit/${id}`,updatedproduit)
      .then(console.log("produit Updated"))
       dispatch({
         type:'UPDATE_PRODUIT',
         payload:res.data,
       }) ;
    }
     catch(error)
    { console.log(error.message);
    }
    }
    
