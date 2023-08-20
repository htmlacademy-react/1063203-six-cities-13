import { OfferReview, RentOffer } from './offer.ts';
import { City, Point } from './map.ts';

export type AppProps = {
  offers: RentOffer[];
  offerReviews: OfferReview[];
  city: City;
  points: Point[];
}
