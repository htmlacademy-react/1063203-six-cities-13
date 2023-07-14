import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cardsCount = Math.floor(Math.random() * 100);

root.render(
  <React.StrictMode>
    <App cardsCount={cardsCount} offers={offers}/>
  </React.StrictMode>
);
