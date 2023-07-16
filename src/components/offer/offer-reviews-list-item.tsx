import React from 'react';
import { OfferReview } from '../../types/offer.ts';

function OfferReviewsListItem({ reviewItem }: { reviewItem: OfferReview }): React.ReactElement {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={reviewItem.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {reviewItem.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: reviewItem.rating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewItem.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {reviewItem.date}
        </time>
      </div>
    </li>
  );
}

export default OfferReviewsListItem;
