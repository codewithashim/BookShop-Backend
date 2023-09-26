import { Schema, model } from 'mongoose';
import { CartModel, ICartItem } from './cart.interface';

const CartSchema = new Schema<ICartItem, CartModel>(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Books',
        },
        quantity: {
            type: Number,
        },
        totalPrice: {
            type: Number,
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }

);

export const Cart = model<ICartItem, CartModel>('Carts', CartSchema);
