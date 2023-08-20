import Main from '../../pages/main/main.tsx';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../routes';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { AuthStatus } from '../../const/auth-status.ts';
import ScrollTop from '../scroll-top/scroll-top.tsx';
import Header from '../header/header.tsx';
import { AppProps } from '../../types/app-props.ts';
import { RentOffer } from '../../types/offer.ts';

function App({ offers, offerReviews, city }: AppProps): React.ReactElement {
  const { pathname } = useLocation();
  const isPageWithHeader = pathname !== AppRoute.Login;
  const points = offers.map((offer: RentOffer) => ({
    lat: offer.location.latitude,
    lng: offer.location.longitude,
    title: offer.title,
    zoom: offer.location.zoom
  }));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollTop />
        { isPageWithHeader && <Header /> }
        <Routes>
          <Route
            path={AppRoute.Home}
            element={<Main offers={offers} city={city} points={points} />}
          />

          <Route
            path={AppRoute.Login}
            element={<Login />}
          />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthStatus.Auth}
              >
                <Favorites offers={offers} />
              </PrivateRoute>
            }
          />

          <Route
            path={AppRoute.Offer}
            element={<Offer offers={offers} offerReviews={offerReviews} city={city} points={points} />}
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
