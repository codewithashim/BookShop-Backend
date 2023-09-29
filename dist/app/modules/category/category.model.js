"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopularCategory = void 0;
const mongoose_1 = require("mongoose");
const popularCategorySchema = new mongoose_1.Schema({
    popularCategory: {
        type: String,
    },
    popularCategoryImage: {
        type: String,
    },
    popularCategoryDetail: {
        type: String,
    },
});
exports.PopularCategory = (0, mongoose_1.model)('PopularCategory', popularCategorySchema);
