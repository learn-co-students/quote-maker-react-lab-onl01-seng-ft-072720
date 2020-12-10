export default function (state = [], action) {
  let index;
  let quote;
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId)[0]
      quote.votes ++
      return [...state]
    case 'DOWNVOTE_QUOTE':
      quote = state.filter(quote => quote.id === action.quoteId)[0]
      if (quote.votes > 0) {quote.votes --}
      return [...state]
    default:
    return state;
  }
}
