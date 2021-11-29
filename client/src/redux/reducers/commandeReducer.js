const commandeReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "DELETE_COMMANDE":
        return [...state.filter((el) => el._id !== payload)]
      case "AFFICHER_COMMANDE":
        return payload;
      case "ADD_COMMANDE":
        return [...state, payload];
      default:
        return state;
    }
  };
  
  export default commandeReducer;
  