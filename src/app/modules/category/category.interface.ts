import { Model } from 'mongoose';

export type IPopularCategory = {
  popularCategory: string;
  popularCategoryImage: string;
  popularCategoryDetail: string;
};

export type PopularCategoryModel = Model<
  IPopularCategory,
  Record<string, unknown>
>;
