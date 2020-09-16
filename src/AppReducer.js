export default (state, action) => {
    switch(action.type) {
        case 'ADD_QUOTE':
            return {
                ...state,
                quotes: state.quotes.concat(action.payload)
            }
        case 'DELETE_QUOTE':
            return {
                ...state,
                quotes: state.quotes.filter(quote => quote.id !== action.payload)
            }
        case 'LIMIT_EXCEEDS':
            return {
                ...state,
                error: action.payload
            }
        case 'LIMIT_DOESNT_EXCEEDS_ANYMORE':
            return {
                ...state,
                error: ''
            }
        default:
            return state;
    }
}