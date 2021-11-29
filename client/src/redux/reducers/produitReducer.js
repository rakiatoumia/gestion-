const produitReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "UPDATE_PRODUIT":
         return state.map((el)=>el._id===payload._id? payload:el)
      case "DELETE_PRODUIT":
        return [...state.filter((el) => el._id !== payload)]
      case "AFFICHER_PRODUIT":
        return payload;
      case "ADD_PRODUIT":
        return [...state, payload];
      default:
        return state;
    }
  };
  
  export default produitReducer;