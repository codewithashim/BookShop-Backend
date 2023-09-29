"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Coupon = exports.Level = exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    category: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Category = (0, mongoose_1.model)('Categories', categorySchema);
const levelSchema = new mongoose_1.Schema({
    level: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Level = (0, mongoose_1.model)('Levels', levelSchema);
const couponSchema = new mongoose_1.Schema({
    coupon: {
        type: String,
    },
    couponPricePercentage: {
        type: String,
    },
    couponText: {
        type: String,
    },
});
exports.Coupon = (0, mongoose_1.model)('Coupons', couponSchema);
const bookSchema = new mongoose_1.Schema({
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
        },
    ],
    author: {
        type: String,
    },
    coupon: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Coupons',
        },
    ],
    image: [
        {
            type: String,
        },
    ],
    category: {
        type: String,
    },
    categoryIds: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Books', bookSchema);
