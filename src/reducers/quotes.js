export default (state = [], action) => {
  switch(action.type) {
    case ("ADD_QUOTE"):
      return state.concat(action.quote);
    case("REMOVE_QUOTE"):
      debugger;
    default:  
      return state;
  }
  
}
