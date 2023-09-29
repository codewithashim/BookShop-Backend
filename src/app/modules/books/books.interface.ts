import { Model } from 'mongoose';

export type ICategory = {
  category: string;
};

export type Ilevel = {
  level: string;
};

export type ICoupon = {
  coupon: string;
  couponPricePercentage: string;
  couponText: string;
};

export type IBook = {
  category?: string;
  categoryIds?: string;
  name?: string;
  price?: string;
  quantity?: string;
  discountPercentage?: string;
  description?: string;
  language?: string;
  level?: string;
  cover?: string;
  features?: string[] | string;
  author?: string;
  coupon?: string[] | string;
  image?: string[] | string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

export type CategoryModal = Model<ICategory, Record<string, unknown>>;

export type LevelModal = Model<Ilevel, Record<string, unknown>>;

export type CouponModal = Model<ICoupon, Record<string, unknown>>;

export type IBooksFilters = {
  category?: string;
  level?: string;
  language?: string;
  author?: string;
  price?: string;
  discountPercentage?: string;
  quantity?: string;
  name?: string;
  searchTerm?: string;
};

export type ICategoryFilters = {
  category?: string;
  searchTerm?: string;
};

export type ILevelFilters = {
  level?: string;
  searchTerm?: string;
};

export type ICouponFilters = {
  coupon?: string;
  couponPricePercentage?: string;
  couponText?: string;
  searchTerm?: string;
};
