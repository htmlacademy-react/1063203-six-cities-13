import React from 'react';
import { RentOffer } from '../../types/offer.ts';
import FavoritesCityCard from '../../components/favorites/favorites-city-card.tsx';
import Footer from '../../components/footer/footer.tsx';

function Favorites({ offers }: { offers: RentOffer[] }): React.ReactElement {
  const uniqueCitiesWithOffers: string[] = [...new Set(offers.map((offer) => offer.offerCity))];
  const filteredOffersByCity = uniqueCitiesWithOffers.map((city) => {
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
      <Footer />
    </div>
  );
}

export default Favorites;
