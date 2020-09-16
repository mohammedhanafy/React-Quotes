import React from 'react';

import { GlobalProvider } from './context-api';
import QuotesSummary from './Components/QuotesSummary/QuotesSummary';
import AddQuote from './Components/AddQuote/AddQuote';
import Quotes from './Components/Quotes/Quotes';

const app = (props) => {
  return (
      <div className="App">
      <GlobalProvider>
          <div className="container">
              <QuotesSummary />
              <AddQuote />
              <Quotes />
          </div>
        </GlobalProvider>
      </div>
  )
}

export default app;
