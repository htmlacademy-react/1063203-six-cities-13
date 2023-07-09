import mainScreen from '../../pages/main-screen/main-screen.tsx';
import React from 'react';

function App(): React.ReactElement {
  const cardsCount = Math.floor(Math.random() * 100);

  return (
    mainScreen({ cardsCount })
  );
}

export default App;
