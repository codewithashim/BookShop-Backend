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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const books_constant_1 = require("./books.constant");
const books_model_1 = require("./books.model");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield books_model_1.Book.create(payload);
        return book;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getAllBook = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: books_constant_1.iBookSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield books_model_1.Book.find(whereConditions)
        .populate('category')
        .populate('level')
        .populate('coupon')
        .sort(sortConditions)
        .skip(skip);
    return {
        data: result,
    };
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.find()
        .populate('category')
        .populate('level')
        .populate('coupon');
    return result;
});
const getSingleBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield books_model_1.Book.findById(bookId)
        .populate('category')
        .populate('level')
        .populate('coupon');
    if (!book) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Book not found');
    }
    return book;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Book.findByIdAndUpdate(id, payload, { new: true });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// const updateBook = async (
//   id: string,
//   payload: Partial<IBook>
// ): Promise<IBook | null> => {
//   if (payload.coupon) {
//     if (Array.isArray(payload.coupon)) {
//       payload.coupon = payload.coupon.filter(coupon => !!coupon).join(', ');
//     } else if (typeof payload.coupon === 'string') {
//       // If it's already a string, do nothing
//     }
//   }
//   if (payload.image) {
//     if (Array.isArray(payload.image)) {
//       payload.image = payload.image.filter(image => !!image).join(', ');
//     } else if (typeof payload.image === 'string') {
//       // If it's already a string, do nothing
//     }
//   }
//   if (payload.features) {
//     if (Array.isArray(payload.features)) {
//       payload.features = payload.features
//         .filter(features => !!features)
//         .join(', ');
//     } else if (typeof payload.features === 'string') {
//       // If it's already a string, do nothing
//     }
//   }
//   const result = await Book.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   return result;
// };
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findByIdAndDelete(id);
    return result;
});
//=== Category ===
const createCategory = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = new books_model_1.Category(payload);
        yield category.save();
        return category;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getAllCategory = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
        const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
        const andConditions = [];
        if (searchTerm) {
            andConditions.push({
                $or: books_constant_1.iBookSearchableFields.map(field => ({
                    [field]: {
                        $regex: searchTerm,
                        $options: 'i',
                    },
                })),
            });
        }
        if (Object.keys(filtersData).length) {
            andConditions.push({
                $and: Object.entries(filtersData).map(([field, value]) => ({
                    [field]: value,
                })),
            });
        }
        const sortConditions = {};
        if (sortBy && sortOrder) {
            sortConditions[sortBy] = sortOrder;
        }
        const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
        const result = yield books_model_1.Category.find(whereConditions)
            .sort(sortConditions)
            .skip(skip);
        return {
            data: result,
        };
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getSingleCategory = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield books_model_1.Category.findById(categoryId);
        if (!category) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Category not found');
        }
        return category;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const updateCategory = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Category.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Category.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ====== Level ======
const createLevel = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const level = new books_model_1.Level(payload);
        yield level.save();
        return level;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getAllLevel = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Level.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getSingleLevel = (levelId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const level = yield books_model_1.Level.findById(levelId);
        if (!level) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Level not found');
        }
        return level;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const updateLevel = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Level.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const deleteLevel = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Level.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
// ====== Coupon ======
const createCoupon = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coupon = new books_model_1.Coupon(payload);
        yield coupon.save();
        return coupon;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getAllCoupon = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Coupon.find();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const getSingleCoupon = (couponId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const coupon = yield books_model_1.Coupon.findById(couponId);
        if (!coupon) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Coupon not found');
        }
        return coupon;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const updateCoupon = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Coupon.findOneAndUpdate({ _id: id }, payload, {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
const deleteCoupon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_model_1.Coupon.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
});
exports.BookService = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
    getBooks,
    //== Category==
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    // == Level ==
    createLevel,
    getAllLevel,
    getSingleLevel,
    updateLevel,
    deleteLevel,
    // == Coupon ==
    createCoupon,
    getAllCoupon,
    getSingleCoupon,
    updateCoupon,
    deleteCoupon,
    // == Add to Cart ==
};
