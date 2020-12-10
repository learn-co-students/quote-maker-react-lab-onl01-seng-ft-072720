export default (state = [], action) => {
  switch(action.type) {
    case ("ADD_TODO"):
      return {todo: "somethign"}
  }
  return state;
}
