import React from 'react';
import AddComment from '../add-comment/add-comment.tsx';
import { OfferReview } from '../../types/offer.ts';
import OfferReviewsListItem from './offer-reviews-list-item.tsx';

type OfferReviewsProps = {
  offerReviews: OfferReview[];
  handleOfferReviewAdd: React.FormEventHandler<HTMLFormElement>;
}

function OfferReviewsList({ offerReviews, handleOfferReviewAdd }: OfferReviewsProps): React.ReactElement {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">1</span>
      </h2>
      <ul className="reviews__list">
        {offerReviews.map((item) =>
          <OfferReviewsListItem reviewItem={item} key={item.id} />
        )}
      </ul>
      <AddComment handleOfferReviewAdd={handleOfferReviewAdd} />
    </section>
  );
}

export default OfferReviewsList;
