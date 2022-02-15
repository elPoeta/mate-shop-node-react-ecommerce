import { createProduct, createProductReview, deleteProduct, geProductById, getProducts, getTopProducts, updateProduct } from "@controllers/productController";
import { adminRoute, protectedRoute } from "@middlewares/authMiddleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').get(getProducts).post(protectedRoute, adminRoute, createProduct);
router.get('/top', getTopProducts);
router.route('/:id/reviews').post(protectedRoute, createProductReview);
router.route('/:id')
  .get(geProductById)
  .put(updateProduct, protectedRoute, adminRoute)
  .delete(deleteProduct, protectedRoute, adminRoute);


export default router;