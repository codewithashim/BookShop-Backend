import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICartItem } from './cart.interface';
import { CartService } from './cart.service';

// == add to cart function == cart.controller.ts

const addToCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const { quantity } = req.body;
        const result = await CartService.addToCart(bookId, quantity);
        sendResponse<ICartItem>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book added to cart successfully!',
            data: result,
        });
    }
)

// == get cart function == cart.controller.ts

const getCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const result = await CartService.getCart();

        sendResponse<ICartItem[]>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Cart fetched successfully!',
            data: result,
        });
    }
)

// remove from cart function . cart.controller.ts

const removeFromCart: RequestHandler = catchAsync(
    async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const result = await CartService.removeFromCart(bookId);
        sendResponse<ICartItem>(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Book removed from cart successfully!',
            data: result,
        });
    }
)


export const CartController = {
    addToCart,
    getCart,
    removeFromCart,

}


