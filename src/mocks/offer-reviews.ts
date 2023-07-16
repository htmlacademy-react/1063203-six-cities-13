import { OfferReview } from '../types/offer.ts';

export const offerReviews: OfferReview[] = [
  {
    id: 1,
    user: {
      id: 1,
      isPro: true,
      name: 'Emely',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/8.jpg',
    },
    rating: '80%',
    comment: 'We loved it so much, the house, the view, the location just great.. Highly recommended :)',
    date: '2021-03-07T08:04:28.647Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      isPro: false,
      name: 'Kate',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/9.jpg',
    },
    rating: '80%',
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2021-03-09T08:04:28.647Z',
  }
];
