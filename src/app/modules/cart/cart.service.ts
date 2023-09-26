import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Cart } from './cart.modal';
import { Book } from '../books/books.model';
import { ICartItem } from './cart.interface';

// add to card function . cart.service.ts

const addToCart = async (bookId: string, quantity: number): Promise<any> => {
    try {
        // Check if the book exists
        const book = await Book.findById(bookId);

        if (!book) {
            throw new Error('Book not found');
        }

        // Calculate the total price based on the book's price and quantity
        if (book) {
            const price = book.price;
            // convert to number 
            const mainPrice = Number(price);
            const totalPrice = mainPrice * quantity;


            // Create a cart item
            const cartItem = new Cart({
                book: bookId,
                quantity,
                totalPrice,
            });

            // Save the cart item
            await cartItem.save();

            return cartItem;
        }

    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            'Internal Server Error'
        );
    }
}


const getCart = async (): Promise<ICartItem[]> => {
    try {
        const result = await Cart.find().populate('book');
        return result;
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            'Internal Server Error'
        );
    }
}

const removeFromCart = async (bookId: string): Promise<ICartItem | null> => {
    try {
        const result = await Cart.findByIdAndDelete(bookId);
        return result;
    } catch (error) {
        throw new ApiError(
            httpStatus.INTERNAL_SERVER_ERROR,
            'Internal Server Error'
        );
    }
}

export const CartService = {
    addToCart,
    getCart,
    removeFromCart,
}




