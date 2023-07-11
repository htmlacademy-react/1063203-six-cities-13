import MainScreen from '../../pages/main-screen/main-screen.tsx';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../routes';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {AuthStatus} from '../../const/authStatus.ts';
import ScrollTop from '../scrollTop/scrollTop.tsx';

type AppProps = {
  cardsCount: number;
}

function App({cardsCount}: AppProps): React.ReactElement {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path={AppRoute.Home}
            element={<MainScreen cardsCount={cardsCount} />}
          />

          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthStatus.NoAuth}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Offer}
            element={<OfferScreen />}
          />

          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
