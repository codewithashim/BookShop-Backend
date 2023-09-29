import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IBook, ICategory, Ilevel, ICoupon } from './books.interface';
import { BookService } from './books.service';
import {
  iBookFilterableFields,
  iCategoryFilterableFields,
} from './books.constant';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const bookData = req.body;
    const result = await BookService.createBook(bookData);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book created successfully!',
      data: result,
    });
  }
);

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, iBookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllBook(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBooks();
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books fetched successfully',
    data: result,
  });
});

const getSingelBook = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id;
  const result = await BookService.getSingleBook(bookId);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  });
});

const updateBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const bookData = req.body;
    const result = await BookService.updateBook(id, bookData);
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully!',
      data: result,
    });
  }
);

const deleteBooks: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const bookId = req.params.id;
    const result = await BookService.deleteBook(bookId);
    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book delete successfully!',
      data: result,
    });
  }
);

// ====== Category ======

const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryData = req.body;
    const result = await BookService.createCategory(categoryData);
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully!',
      data: result,
    });
  }
);

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, iCategoryFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await BookService.getAllCategory(filters, paginationOptions);

  sendResponse<ICategory[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingelCategory = catchAsync(async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const result = await BookService.getSingleCategory(categoryId);
  sendResponse<ICategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

const updateCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const categoryData = req.body;
    const result = await BookService.updateCategory(categoryId, categoryData);
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully!',
      data: result,
    });
  }
);

const deleteCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const result = await BookService.deleteCategory(categoryId);
    sendResponse<ICategory>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category delete successfully!',
      data: result,
    });
  }
);

// ====== Level ======

const createLevel: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const levelData = req.body;
    const result = await BookService.createLevel(levelData);
    sendResponse<Ilevel>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Level created successfully!',
      data: result,
    });
  }
);

const getAllLevel = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllLevel();
  sendResponse<Ilevel[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Level fetched successfully',
    data: result,
  });
});

const getSingelLevel = catchAsync(async (req: Request, res: Response) => {
  const levelId = req.params.id;
  const result = await BookService.getSingleLevel(levelId);
  sendResponse<Ilevel>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Level fetched successfully',
    data: result,
  });
});

const updateLevel: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const levelId = req.params.id;
    const levelData = req.body;
    const result = await BookService.updateLevel(levelId, levelData);
    sendResponse<Ilevel>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Level updated successfully!',
      data: result,
    });
  }
);

const deleteLevel: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const levelId = req.params.id;
    const result = await BookService.deleteLevel(levelId);
    sendResponse<Ilevel>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Level delete successfully!',
      data: result,
    });
  }
);

// ====== coupon ======

const createCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponData = req.body;
    const result = await BookService.createCoupon(couponData);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Coupon created successfully!',
      data: result,
    });
  }
);

const getAllCoupon = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllCoupon();
  sendResponse<ICoupon[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Coupon fetched successfully',
    data: result,
  });
});

const getSingelCoupon = catchAsync(async (req: Request, res: Response) => {
  const couponId = req.params.id;
  const result = await BookService.getSingleCoupon(couponId);
  sendResponse<ICoupon>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Coupon fetched successfully',
    data: result,
  });
});

const updateCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponId = req.params.id;
    const couponData = req.body;
    const result = await BookService.updateCoupon(couponId, couponData);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Coupon updated successfully!',
      data: result,
    });
  }
);

const deleteCoupon: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const couponId = req.params.id;
    const result = await BookService.deleteCoupon(couponId);
    sendResponse<ICoupon>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Coupon delete successfully!',
      data: result,
    });
  }
);

export const BookController = {
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
