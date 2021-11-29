const clientReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "UPDATE_CLIENT":
      return state.map((el)=>el._id===payload._id? payload:el)
    case "DELETE_CLIENT":
      return [...state.filter((el) => el._id !== payload)]
    case "AFFICHER_CLIENT":
      return payload;
    case "ADD_CLIENT":
      return [...state, payload]
    default:
      return state;
  }
};

export default clientReducer;
