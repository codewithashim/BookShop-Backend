// inventory.service.ts

import { IInventory } from './inventory.interface';
import { Inventory } from './inventory.model';

const addInventory = async (bookId: string, quantity: number): Promise<IInventory> => {
    // Check if the inventory item already exists for the book
    let inventoryItem = await Inventory.findOne({ book: bookId });

    if (inventoryItem) {
        // Update the existing inventory item
        inventoryItem.quantity += quantity;
    } else {
        // Create a new inventory item
        inventoryItem = new Inventory({
            book: bookId,
            quantity,
        });
    }

    await inventoryItem.save();
    return inventoryItem;
};

const getInventories = async (): Promise<IInventory[]> => {
    const inventories = await Inventory.find().populate('book');
    return inventories;
};

const getSingleInventory = async (bookId: string): Promise<IInventory | null> => {
    const inventoryItem = await Inventory.findOne({ book: bookId }).populate('book');
    return inventoryItem;
};

const deleteInventory = async (bookId: string): Promise<IInventory | null> => {
    const inventoryItem = await Inventory.findOneAndDelete({ book: bookId }).populate('book');
    return inventoryItem;
};

const updateInventory = async (bookId: string, quantity: number): Promise<IInventory | null> => {
    const inventoryItem = await Inventory.findOne({ book: bookId });

    if (inventoryItem) {
        inventoryItem.quantity = quantity;
        await inventoryItem.save();
    }

    return inventoryItem;
};

export const InventoryService = {
    addInventory,
    getInventories,
    getSingleInventory,
    deleteInventory,
    updateInventory,
};
