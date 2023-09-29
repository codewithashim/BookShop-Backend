import express from 'express';
import { BookController } from './books.controller';


const router = express.Router();
router.post(
  '/create-book',
  BookController.createBook
);
router.get('/get-singel-book/:id', BookController.getSingelBook);
router.patch('/update-book/:id', BookController.updateBook);
router.delete('/delete/:id', BookController.deleteBooks);
router.get('/get-book', BookController.getAllBook);
router.get('/get-all-book', BookController.getBooks);



//== Coupon Routes
router.post('/create-coupon', BookController.createCoupon);
router.get('/get-all-coupon', BookController.getAllCoupon);
router.get('/get-singel-coupon/:id', BookController.getSingelCoupon);
router.patch('/update-coupon/:id', BookController.updateCoupon);
router.delete('/delete-coupon/:id', BookController.deleteCoupon);

//== Category Routes
router.post('/create-category', BookController.createCategory);
router.get('/get-all-category', BookController.getAllCategory);
router.get('/get-singel-category/:id', BookController.getSingelCategory);
router.patch('/update-category/:id', BookController.updateCategory);
router.delete('/delete-category/:id', BookController.deleteCategory);

//== Level Routes
router.post('/create-level', BookController.createLevel);
router.get('/get-all-level', BookController.getAllLevel);
router.get('/get-singel-level/:id', BookController.getSingelLevel);
router.patch('/update-level/:id', BookController.updateLevel);
router.delete('/delete-level/:id', BookController.deleteLevel);

export const BookRoutes = router;
