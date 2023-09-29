"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const books_route_1 = require("../modules/books/books.route");
const wishlist_router_1 = require("../modules/wishlist/wishlist.router");
const cart_route_1 = require("../modules/cart/cart.route");
const blogs_route_1 = require("../modules/blogs/blogs.route");
const inventory_route_1 = require("../modules/inventory/inventory.route");
const category_router_1 = require("../modules/category/category.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/books',
        route: books_route_1.BookRoutes,
    },
    {
        path: '/wishlist',
        route: wishlist_router_1.WishlistRoutes,
    },
    {
        path: '/cart',
        route: cart_route_1.CartRoutes,
    },
    {
        path: '/blogs',
        route: blogs_route_1.BlogRoutes,
    },
    {
        path: '/inventory',
        route: inventory_route_1.InventoryRoutes,
    },
    {
        path: '/category',
        route: category_router_1.PopularCategoryRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
