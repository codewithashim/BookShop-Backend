import { Schema, model } from 'mongoose';
import { IInventory, InventoryModel } from './inventory.interface';

const InventorySchema = new Schema<IInventory, InventoryModel>(
    {
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Books',
        },
        quantity: {
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

export const Inventory = model<IInventory, InventoryModel>('Inventory', InventorySchema);
