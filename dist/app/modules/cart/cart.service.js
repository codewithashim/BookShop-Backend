"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const cart_modal_1 = require("./cart.modal");
const books_model_1 = require("../books/books.model");
// add to card function . cart.service.ts
const addToCart = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if the book exists
        const book = yield books_model_1.Book.findById({ _id: bookId });
        if (!book) {
            throw new Error('Book not found');
        }
        // Calculate the total price based on the book's price and quantity
        if (book) {
            const price = book.price;
            // convert to number
            const mainPrice = Number(price);
            const totalPrice = mainPrice * payload.quantity;
            // Create a cart item
            const cartItem = new cart_modal_1.Cart({
                book: book._id,
                quantity: payload.quantity,
                totalPrice,
                email: payload.email,
            });
            // Save the cart item
            yield cartItem.save();
            return cartItem;
        }
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getCart = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_modal_1.Cart.find().populate('book');
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// get by email
const getCartByUserEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const isEmailExist = yield cart_modal_1.Cart.find({ email: email });
    if (!isEmailExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Email not found');
    }
    const result = yield cart_modal_1.Cart.find({ email: email }).populate('book');
    return result;
});
const removeFromCart = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_modal_1.Cart.findByIdAndDelete(bookId);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// update cart function . cart.service.ts
const updateCart = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield cart_modal_1.Cart.findByIdAndUpdate(id, payload, { new: true });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
exports.CartService = {
    addToCart,
    getCart,
    removeFromCart,
    getCartByUserEmail,
    updateCart,
};
