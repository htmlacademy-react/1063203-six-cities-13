import React from 'react';
import { RentOffer } from '../../types/offer.ts';
import FavoritesPlace from './favoritesPlace.tsx';

type FavoriteItemType = {
  offer: RentOffer[];
  city: string;
}

function FavoritesCityCard({ offer, city }: FavoriteItemType): React.ReactElement {
  const favoritesPlace = offer.map((item) => (
    <FavoritesPlace
      key={item.id}
      offer={item}
    />
  ));

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        { favoritesPlace }
      </div>
    </li>
  );
}

export default FavoritesCityCard;
