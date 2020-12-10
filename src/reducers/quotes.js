export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      let idx = state.findIndex(q => q.id === action.quoteId)
      return state.slice(0, idx).concat(state.slice(idx + 1)) 
    case 'UPVOTE_QUOTE':
      let idxU = state.findIndex(q => q.id === action.quoteId)
      state[idxU].votes += 1;
      return state;
    case 'DOWNVOTE_QUOTE':
      let idxD = state.findIndex(q => q.id === action.quoteId)
      if (state[idxD].votes !== 0){ state[idxD].votes -= 1 };
      return state;
    default:
      return state;
  }
}
