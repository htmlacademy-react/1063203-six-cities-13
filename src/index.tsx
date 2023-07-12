import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cardsCount = Math.floor(Math.random() * 100);

root.render(
  <React.StrictMode>
    <App cardsCount={cardsCount}/>
  </React.StrictMode>
);
