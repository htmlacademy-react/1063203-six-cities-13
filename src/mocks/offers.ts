import { RentOffer } from '../types/offer';

export const offers: RentOffer[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious apartment at great location',
    previewImage: 'img/room.jpg',
    price: '80',
    rating: '80%',
    type: 'Private room',
    inBookmarks: true,
    offerCity: 'Amsterdam'
  },
  {
    id: 2,
    title: 'Wood and stone place',
    previewImage: 'img/apartment-01.jpg',
    price: '132',
    rating: '80%',
    type: 'Apartment',
    inBookmarks: false,
    offerCity: 'Amsterdam'
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    previewImage: 'img/apartment-02.jpg',
    price: '180',
    rating: '80%',
    type: 'Apartment',
    inBookmarks: true,
    offerCity: 'Brussels'
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    previewImage: 'img/apartment-03.jpg',
    price: '80',
    rating: '80%',
    type: 'Private room',
    inBookmarks: false,
    offerCity: 'Cologne'
  }
];
