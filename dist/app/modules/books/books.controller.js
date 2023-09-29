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
exports.BookController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const books_service_1 = require("./books.service");
const books_constant_1 = require("./books.constant");
const pick_1 = __importDefault(require("../../../shared/pick"));
const pagination_1 = require("../../../constants/pagination");
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookData = req.body;
    const result = yield books_service_1.BookService.createBook(bookData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book created successfully!',
        data: result,
    });
}));
const getAllBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, books_constant_1.iBookFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield books_service_1.BookService.getAllBook(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Books fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookService.getBooks();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Books fetched successfully',
        data: result,
    });
}));
const getSingelBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.id;
    const result = yield books_service_1.BookService.getSingleBook(bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book fetched successfully',
        data: result,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const bookData = req.body;
    const result = yield books_service_1.BookService.updateBook(id, bookData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book updated successfully!',
        data: result,
    });
}));
const deleteBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookId = req.params.id;
    const result = yield books_service_1.BookService.deleteBook(bookId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Book delete successfully!',
        data: result,
    });
}));
// ====== Category ======
const createCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryData = req.body;
    const result = yield books_service_1.BookService.createCategory(categoryData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category created successfully!',
        data: result,
    });
}));
const getAllCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, books_constant_1.iCategoryFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield books_service_1.BookService.getAllCategory(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category fetched successfully',
        meta: result.meta,
        data: result.data,
    });
}));
const getSingelCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    const result = yield books_service_1.BookService.getSingleCategory(categoryId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category fetched successfully',
        data: result,
    });
}));
const updateCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    const categoryData = req.body;
    const result = yield books_service_1.BookService.updateCategory(categoryId, categoryData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category updated successfully!',
        data: result,
    });
}));
const deleteCategory = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryId = req.params.id;
    const result = yield books_service_1.BookService.deleteCategory(categoryId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category delete successfully!',
        data: result,
    });
}));
// ====== Level ======
const createLevel = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const levelData = req.body;
    const result = yield books_service_1.BookService.createLevel(levelData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Level created successfully!',
        data: result,
    });
}));
const getAllLevel = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookService.getAllLevel();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Level fetched successfully',
        data: result,
    });
}));
const getSingelLevel = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const levelId = req.params.id;
    const result = yield books_service_1.BookService.getSingleLevel(levelId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Level fetched successfully',
        data: result,
    });
}));
const updateLevel = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const levelId = req.params.id;
    const levelData = req.body;
    const result = yield books_service_1.BookService.updateLevel(levelId, levelData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Level updated successfully!',
        data: result,
    });
}));
const deleteLevel = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const levelId = req.params.id;
    const result = yield books_service_1.BookService.deleteLevel(levelId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Level delete successfully!',
        data: result,
    });
}));
// ====== coupon ======
const createCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const couponData = req.body;
    const result = yield books_service_1.BookService.createCoupon(couponData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Coupon created successfully!',
        data: result,
    });
}));
const getAllCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookService.getAllCoupon();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Coupon fetched successfully',
        data: result,
    });
}));
const getSingelCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const couponId = req.params.id;
    const result = yield books_service_1.BookService.getSingleCoupon(couponId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Coupon fetched successfully',
        data: result,
    });
}));
const updateCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const couponId = req.params.id;
    const couponData = req.body;
    const result = yield books_service_1.BookService.updateCoupon(couponId, couponData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Coupon updated successfully!',
        data: result,
    });
}));
const deleteCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const couponId = req.params.id;
    const result = yield books_service_1.BookService.deleteCoupon(couponId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Coupon delete successfully!',
        data: result,
    });
}));
exports.BookController = {
    createBook,
    getAllBook,
    getSingelBook,
    updateBook,
    deleteBooks,
    getBooks,
    // Category
    createCategory,
    getAllCategory,
    getSingelCategory,
    updateCategory,
    deleteCategory,
    // Level
    createLevel,
    getAllLevel,
    getSingelLevel,
    updateLevel,
    deleteLevel,
    // Coupon
    createCoupon,
    getAllCoupon,
    getSingelCoupon,
    updateCoupon,
    deleteCoupon,
};
