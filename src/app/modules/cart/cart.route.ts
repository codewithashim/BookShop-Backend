import express from 'express';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/add-to-cart', CartController.addToCart);

router.get('/get-cart', CartController.getCart);

router.delete('/remove-from-cart/:id', CartController.removeFromCart);


export const CartRoutes = router;