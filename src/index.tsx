import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { offerReviews } from './mocks/offer-reviews.ts';
import { offers } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offers} offerReviews={offerReviews} />
  </React.StrictMode>
);
