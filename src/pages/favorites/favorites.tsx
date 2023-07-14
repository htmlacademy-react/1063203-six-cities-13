import React from 'react';
import { RentOffer } from '../../types/offer.ts';
import FavoritesCityCard from '../../components/favorites/favoritesCityCard.tsx';

function Favorites({ offers }: { offers: RentOffer[] }): React.ReactElement {
  const citiesWithOffers: string[] = [...new Set(offers.map((offer) => offer.offerCity))];
  const filteredOffersByCity = citiesWithOffers.map((city) => {
    const offersByCity = offers.filter((offer) => offer.offerCity === city);

    return (
      <FavoritesCityCard
        key={city}
        offer={offersByCity}
        city={city}
      />
    );
  });

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              { filteredOffersByCity }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
