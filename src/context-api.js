import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    quotes: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addQuoteHandler = (quote) => {
        dispatch({type: 'ADD_QUOTE', payload: quote})
    }

    const deleteQuoteHandler = (quoteId) => {
        dispatch({type: 'DELETE_QUOTE', payload: quoteId})
    }

    const limitExceedsQuoteHandler = () => {
        dispatch({type: 'LIMIT_EXCEEDS', payload: 'Maximum number of quotes has been reached, please remove some quotes first to reopen the form'})
    }

    const removeLimitExceedsQuoteHandler = () => {
        dispatch({type: 'LIMIT_DOESNT_EXCEEDS_ANYMORE'});
    }
    
    return (<GlobalContext.Provider value={{
        quotes: state.quotes,
        error: state.error,
        addQuoteHandler,
        deleteQuoteHandler,
        limitExceedsQuoteHandler,
        removeLimitExceedsQuoteHandler
    }}>
        {children}
    </GlobalContext.Provider>)
}

