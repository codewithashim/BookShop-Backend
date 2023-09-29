"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/create-book', books_controller_1.BookController.createBook);
router.get('/get-singel-book/:id', books_controller_1.BookController.getSingelBook);
router.patch('/update-book/:id', books_controller_1.BookController.updateBook);
router.delete('/delete/:id', books_controller_1.BookController.deleteBooks);
router.get('/get-book', books_controller_1.BookController.getAllBook);
router.get('/get-all-book', books_controller_1.BookController.getBooks);
//== Coupon Routes
router.post('/create-coupon', books_controller_1.BookController.createCoupon);
router.get('/get-all-coupon', books_controller_1.BookController.getAllCoupon);
router.get('/get-singel-coupon/:id', books_controller_1.BookController.getSingelCoupon);
router.patch('/update-coupon/:id', books_controller_1.BookController.updateCoupon);
router.delete('/delete-coupon/:id', books_controller_1.BookController.deleteCoupon);
//== Category Routes
router.post('/create-category', books_controller_1.BookController.createCategory);
router.get('/get-all-category', books_controller_1.BookController.getAllCategory);
router.get('/get-singel-category/:id', books_controller_1.BookController.getSingelCategory);
router.patch('/update-category/:id', books_controller_1.BookController.updateCategory);
router.delete('/delete-category/:id', books_controller_1.BookController.deleteCategory);
//== Level Routes
router.post('/create-level', books_controller_1.BookController.createLevel);
router.get('/get-all-level', books_controller_1.BookController.getAllLevel);
router.get('/get-singel-level/:id', books_controller_1.BookController.getSingelLevel);
router.patch('/update-level/:id', books_controller_1.BookController.updateLevel);
router.delete('/delete-level/:id', books_controller_1.BookController.deleteLevel);
exports.BookRoutes = router;
