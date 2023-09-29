import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { Cart } from './cart.modal';
import { Book } from '../books/books.model';
import { ICartItem } from './cart.interface';

// add to card function . cart.service.ts

const addToCart = async (bookId: string, payload: any): Promise<any> => {
  try {
    // Check if the book exists
    const book = await Book.findById({ _id: bookId });

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
      const cartItem = new Cart({
        book: book._id,
        quantity: payload.quantity,
        totalPrice,
        email: payload.email,
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
};

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
};

// get by email

const getCartByUserEmail = async (email: string): Promise<ICartItem[]> => {
  const isEmailExist = await Cart.find({ email: email });

  if (!isEmailExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Email not found');
  }

  const result = await Cart.find({ email: email }).populate('book');
  return result;
};

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
};

// update cart function . cart.service.ts

const updateCart = async (
  id: string,
  payload: any
): Promise<ICartItem | null> => {
  try {
    const result = await Cart.findByIdAndUpdate(id, payload, { new: true });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

export const CartService = {
  addToCart,
  getCart,
  removeFromCart,
  getCartByUserEmail,
  updateCart,
};
