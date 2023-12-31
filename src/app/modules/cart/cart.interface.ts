import { Model } from "mongoose";
import { IBook } from "../books/books.interface";

export type ICartItem = {
    book?: IBook;
    quantity?: number;
    totalPrice?: number;
    email?: string;
    status?: string;
}

export type CartModel = Model<ICartItem, Record<string, unknown>>;
