//import * as Types from '../actions/types'
const fournisseurReducer = (state = [], { type, payload }) => {
    switch (type) {
      case "DELETE_FOURNISSEUR":
        return [...state.filter((el) => el._id !== payload)]
      case "AFFICHER_FOURNISSEUR":
        return payload;
      case "ADD_FOURNISSEUR":
        return [...state, payload];
      default:
        return state;
    }
  };
  
  export default fournisseurReducer;
  