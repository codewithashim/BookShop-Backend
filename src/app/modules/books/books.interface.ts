import { Model } from 'mongoose';

export type ICategory = {
  _id: any;
  category: string
}

export type Ilevel = {
  _id: any;
  level: string
}

export type ICoupon = {
  _id: any;
  coupon: string
}


export type IBook = {
  _id: any;
  category:  ICategory;
  name: string;
  price: string;
  quantity: string;
  discountPercentage: string;
  description: string;
  language: string;
  level: string;
  cover: string;
  features: string[];
  author: string;
  coupon: string[];
  image: string[];
}

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


