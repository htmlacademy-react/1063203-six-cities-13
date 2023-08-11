import { OfferReview, RentOffer } from './offer.ts';
import { City } from './map.ts';

export type AppProps = {
  offers: RentOffer[];
  offerReviews: OfferReview[];
  city: City;
}
