import { Schema, model } from 'mongoose';
import { IPopularCategory, PopularCategoryModel } from './category.interface';

const popularCategorySchema = new Schema<
  IPopularCategory,
  PopularCategoryModel
>({
  popularCategory: {
    type: String,
  },
  popularCategoryImage: {
    type: String,
  },
  popularCategoryDetail: {
    type: String,
  },
});

export const PopularCategory = model<IPopularCategory, PopularCategoryModel>(
  'PopularCategory',
  popularCategorySchema
);
