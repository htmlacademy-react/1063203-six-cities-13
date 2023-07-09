import mainScreen from '../../pages/main-screen/main-screen.tsx';
import React from 'react';

type AppProps = {
  cardsCount: number;
}

function App({cardsCount}: AppProps): React.ReactElement {
  return (
    mainScreen({ cardsCount })
  );
}

export default App;
