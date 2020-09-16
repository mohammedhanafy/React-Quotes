import React, { useContext } from 'react';
import { GlobalContext } from '../../context-api';

const quotesSummary = (props) => {
    const { quotes } = useContext(GlobalContext)

    return (
        <div>
            {quotes.length} out of 10
        </div>
    )
}

export default quotesSummary;