import { RentOffer } from '../../types/offer.ts';
import React from 'react';
import Card from '../card/card.tsx';

function MainOffersList({ offers }: { offers: RentOffer[] }): React.ReactElement {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default MainOffersList;
