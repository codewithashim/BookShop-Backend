import { Model } from "mongoose";
import { IBook } from "../books/books.interface";

export type IInventory = {
    book: IBook;
    quantity: number;
}

export type InventoryModel = Model<IInventory, Record<string, unknown>>;
