import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { iBookSearchableFields } from './books.constant';
import { IBook, IBooksFilters, ICategory, ICoupon, Ilevel } from './books.interface';
import { Book, Category, Coupon, Level } from './books.model';

const createBook = async (payload: IBook): Promise<IBook> => {
  try {
    const book = new Book(payload);
    await book.save();
    return book;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getAllBook = async (
  filters: IBooksFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: iBookSearchableFields.map(field => ({
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

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions).populate('category').populate('level').populate('coupon')
    .sort(sortConditions)
    .skip(skip);

  return {
    data: result,
  };
};

const getSingleBook = async (bookId: string): Promise<IBook> => {
  const book = await Book.findById(bookId).populate('category').populate('level').populate('coupon');
  if (!book) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found');
  }
  return book;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

//=== Category ===

const createCategory = async (payload: ICategory): Promise<ICategory> => {
  try {
    const category = new Category(payload);
    await category.save();
    return category;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getAllCategory = async (): Promise<ICategory[]> => {
  try {
    const result = await Category.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getSingleCategory = async (categoryId: string): Promise<ICategory> => {
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Category not found');
    }
    return category;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const updateCategory = async (id: string, payload: Partial<ICategory>): Promise<ICategory | null> => {
  try {
    const result = await Category.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;

  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const deleteCategory = async (id: string): Promise<ICategory | null> => {
  try {
    const result = await Category.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

// ====== Level ======

const createLevel = async (payload: Ilevel): Promise<Ilevel> => {
  try {
    const level = new Level(payload);
    await level.save();
    return level;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
};

const getAllLevel = async (): Promise<Ilevel[]> => {
  try {
    const result = await Level.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const getSingleLevel = async (levelId: string): Promise<Ilevel> => {
  try {
    const level = await Level.findById(levelId);
    if (!level) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Level not found');
    }
    return level;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const updateLevel = async (id: string, payload: Partial<Ilevel>): Promise<Ilevel | null> => {
  try {
    const result = await Level.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;


  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const deleteLevel = async (id: string): Promise<Ilevel | null> => {
  try {
    const result = await Level.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

// ====== Coupon ======

const createCoupon = async (payload: ICoupon): Promise<ICoupon> => {
  try {
    const coupon = new Coupon(payload);
    await coupon.save();
    return coupon;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const getAllCoupon = async (): Promise<ICoupon[]> => {
  try {
    const result = await Coupon.find();
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const getSingleCoupon = async (couponId: string): Promise<ICoupon> => {
  try {
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Coupon not found');
    }
    return coupon;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const updateCoupon = async (id: string, payload: Partial<ICoupon>): Promise<ICoupon | null> => {
  try {
    const result = await Coupon.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;

  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

const deleteCoupon = async (id: string): Promise<ICoupon | null> => {
  try {
    const result = await Coupon.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Internal Server Error'
    );
  }
}

// ====== Add to Cart ======

// const addToCart = async (payload: ICart): Promise<ICart> => {
//   try {
//     const Cart = new Cart(payload);
//     await Cart.save();
//     return Cart;
//   } catch (error) {
//     throw new ApiError(
//       httpStatus.INTERNAL_SERVER_ERROR,
//       'Internal Server Error'
//     );
//   }
// }



export const BookService = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBook,
  deleteBook,

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
