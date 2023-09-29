"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Books',
    },
    quantity: {
        type: Number,
    },
    totalPrice: {
        type: Number,
    },
    email: {
        type: String,
    },
    status: {
        type: String,
        default: 'unpaid'
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Cart = (0, mongoose_1.model)('Carts', CartSchema);
