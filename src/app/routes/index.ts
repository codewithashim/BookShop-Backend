import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { BookRoutes } from '../modules/books/books.route';
import { WishlistRoutes } from '../modules/wishlist/wishlist.router';
import { CartRoutes } from '../modules/cart/cart.route';
import { BlogRoutes } from '../modules/blogs/blogs.route';
import { InventoryRoutes } from '../modules/inventory/inventory.route';
import { PopularCategoryRoutes } from '../modules/category/category.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/wishlist',
    route: WishlistRoutes,
  },
  {
    path: '/cart',
    route: CartRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/inventory',
    route: InventoryRoutes,
  },
  {
    path: '/category',
    route: PopularCategoryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
