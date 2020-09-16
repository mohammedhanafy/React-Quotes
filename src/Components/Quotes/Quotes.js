import React, { useContext } from 'react';

import { GlobalContext } from '../../context-api';

const quotes = (props) => {

    const { quotes, deleteQuoteHandler } = useContext(GlobalContext);

    return (
        <div>
            {quotes.map(quote => (
                <li key={quote.id} onClick={() => deleteQuoteHandler(quote.id)}>{quote.quote}</li>
            ))}
        </div>
    )
}

export default quotes;