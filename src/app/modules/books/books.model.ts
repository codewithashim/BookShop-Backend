import { Schema, model } from 'mongoose';
import { BookModel, IBook, ICategory, Ilevel, ICoupon, CouponModal, CategoryModal, LevelModal } from './books.interface';

const categorySchema = new Schema<ICategory, CategoryModal>(
  {
    category: {
      type: String,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Category = model<ICategory, CategoryModal>('Categories', categorySchema);

const levelSchema = new Schema<Ilevel, LevelModal>(
  {
    level: {
      type: String,
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Level = model<Ilevel, LevelModal>('Levels', levelSchema);

const couponSchema = new Schema<ICoupon, CouponModal>(
  {
    coupon: {
      type: String,
    }
  }
)

export const Coupon = model<ICoupon, CouponModal>('Coupons', couponSchema);


const bookSchema = new Schema<IBook, BookModel>(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    quantity: {
      type: String,
    },
    discountPercentage: {
      type: String,
    },
    description: {
      type: String,
    },
    language: {
      type: String,
    },
    level: {
      type: String,
    },
    cover: {
      type: String,
    },
    features: [
      {
        type: String,
      }
    ],
    author: {
      type: String,
    },
    coupon: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Coupons'
      }
    ],
    image: [
      {
        type: String,
      }
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Categories'
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Book = model<IBook, BookModel>('Books', bookSchema);
