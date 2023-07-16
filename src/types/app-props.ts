import { OfferReview, RentOffer } from './offer.ts';

export type AppProps = {
  offers: RentOffer[];
  offerReviews: OfferReview[];
}
