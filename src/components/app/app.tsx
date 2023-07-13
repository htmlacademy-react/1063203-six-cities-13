import Main from '../../pages/main/main.tsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../routes';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/notFound/notFound.tsx';
import PrivateRoute from '../privateRoute/privateRoute.tsx';
import { AuthStatus } from '../../const/authStatus.ts';
import ScrollTop from '../scrollTop/scrollTop.tsx';
import Header from '../header/header.tsx';

type AppProps = {
  cardsCount: number;
}

function App({ cardsCount }: AppProps): React.ReactElement {
  const pathName = window.location.pathname;
  const isPageWithHeader = pathName !== AppRoute.Login;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        { isPageWithHeader && <Header /> }
        <Routes>
          <Route
            path={AppRoute.Home}
            element={<Main cardsCount={cardsCount} />}
          />

          <Route
            path={AppRoute.Login}
            element={<Login />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthStatus.NoAuth}
              >
                <Favorites />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
