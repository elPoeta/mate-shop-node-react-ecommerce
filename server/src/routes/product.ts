import { createProduct, deleteProduct, geProductById, getProducts, updateProduct } from "@controllers/productController";
import { adminRoute, protectedRoute } from "@middlewares/authMiddleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').get(getProducts).post(protectedRoute, adminRoute, createProduct);

router.route('/:id')
  .get(geProductById)
  .put(updateProduct, protectedRoute, adminRoute)
  .delete(deleteProduct, protectedRoute, adminRoute);


export default router;