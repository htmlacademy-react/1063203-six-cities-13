import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AppRoute } from '../../routes';
import OfferReviewsList from '../../components/offer/offer-reviews-list.tsx';
import { AppProps } from '../../types/app-props.ts';
import { LAST_CLIENT_COMMENT_ID } from '../../const/default-last-comment-id.ts';
import Map from '../../components/map/map.tsx';
import { MAX_NEAREST_POINTS_COUNT } from '../../const/stock-points-count.ts';
import Card from '../../components/card/card.tsx';

type ReviewData = {
  review: string;
  rating: string;
};

function Offer({ offers, offerReviews, city, points }: AppProps): React.ReactElement {
  const { id } = useParams();
  const offer = offers.find((item) => item.id.toString() === id);
  // TODO - удалить после работы с апи
  const nearestPoints = points.filter((_, idx) => idx < MAX_NEAREST_POINTS_COUNT);
  const nearestOffers = offers.filter((_, idx) => idx < MAX_NEAREST_POINTS_COUNT);
  const currentSelectedPoint = points.find((item) => item.title === offer?.title);

  const [offerReviewsList, setOfferReview] = useState(offerReviews);
  const [commentId, setCommentId] = useState(LAST_CLIENT_COMMENT_ID);

  function prepareFormData(e: React.FormEvent<HTMLFormElement>) {
    const target = e.target as typeof e.target & {
      review: { value: string };
      rating: { value: string };
    };

    const data: ReviewData = {
      review: '',
      rating: '0'
    };

    data.review = target.review.value;
    data.rating = target.rating.value ?? data.rating;

    return data;
  }

  function handleOfferReviewAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData: ReviewData = prepareFormData(e);

    setCommentId(commentId + 1);

    setOfferReview([
      ...offerReviewsList,
      {
        id: commentId,
        user: {
          id: 2,
          isPro: false,
          name: 'Kate',
          avatarUrl: 'https://7.react.pages.academy/static/avatar/9.jpg',
        },
        rating: `${(parseInt(formData.rating, 10) * 20)}%`,
        comment: formData.review,
        date: new Date().toString(),
      }
    ]);
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                    Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                    Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                    3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                    Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                      Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                      Washing machine
                  </li>
                  <li className="offer__inside-item">
                      Towels
                  </li>
                  <li className="offer__inside-item">
                      Heating
                  </li>
                  <li className="offer__inside-item">
                      Coffee machine
                  </li>
                  <li className="offer__inside-item">
                      Baby seat
                  </li>
                  <li className="offer__inside-item">
                      Kitchen
                  </li>
                  <li className="offer__inside-item">
                      Dishwasher
                  </li>
                  <li className="offer__inside-item">
                      Cabel TV
                  </li>
                  <li className="offer__inside-item">
                      Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper"
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                Angelina
                  </span>
                  <span className="offer__user-status">
                Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                      A quiet cozy and picturesque that hides behind a a river by the
                      unique lightness of Amsterdam. The building is green and from
                      18th century.
                  </p>
                  <p className="offer__text">
                      An independent House, strategically located between Rembrand
                      Square and National Opera, but where the bustle of the city
                      comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <OfferReviewsList offerReviews={offerReviewsList} handleOfferReviewAdd={handleOfferReviewAdd} />
            </div>
          </div>
          <Map city={city} points={nearestPoints} mapHeight={'500px'} selectedPoint={currentSelectedPoint} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearestOffers.map((item) =>
                <Card offer={item} key={item.id} />
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
