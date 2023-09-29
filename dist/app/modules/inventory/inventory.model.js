"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const mongoose_1 = require("mongoose");
const InventorySchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Books',
    },
    quantity: {
        type: Number,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Inventory = (0, mongoose_1.model)('Inventory', InventorySchema);
