export const addQuote = (newQuote) => {
    return {
        type: "ADD_QUOTE",
        quote: {...newQuote,  votes: 0}
    }
}

export const removeQuote = (quoteId) => {
    return {
        type: "REMOVE_QUOTE",
        quoteId
    }
}

export const upvoteQuote = (quoteId) => {
    return {
        type: "UPVOTE_QUOTE",
        quoteId
    }
}

export const downvoteQuote = (quoteId) => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }
}
