import React, { useState, useContext, useEffect } from 'react';

import { GlobalContext } from '../../context-api';

const addQuote = (props) => {
    const { addQuoteHandler, limitExceedsQuoteHandler, removeLimitExceedsQuoteHandler, quotes, error } = useContext(GlobalContext);

    const [quote, setQuote] = useState('');

    useEffect(() => {
        if(quotes.length >= 10) {
            limitExceedsQuoteHandler();
        } else {
            removeLimitExceedsQuoteHandler();
        }
    }, [quotes])

    const submitQuote = (e) => {

        e.preventDefault();
         
        const quoteData = {
            id: Math.floor(Math.random() * 10000000),
            quote: quote
        }
        
        addQuoteHandler(quoteData);

        setQuote('');

    }

    return (
        <div>
            {!error ? <form onSubmit={submitQuote}>
                <textarea name="quote" onChange={(event) => setQuote(event.target.value)} value={quote} />
                <input type="submit" value="Add Quote" />
            </form> : error}
        </div>
    )
}

export default addQuote;