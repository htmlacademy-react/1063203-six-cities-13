export type RentOffer = {
  id: number;
  title: string;
  previewImage: string;
  price: string;
  rating: string;
  type: string;
  inBookmarks: boolean;
  offerCity: string;
}

export type OfferReview = {
  id: number;
  user: {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  rating: string;
  comment: string;
  date: string;
}
