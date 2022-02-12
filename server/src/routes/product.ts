import { createProduct, deleteProduct, geProduct, updateProduct } from "@controllers/productController";
import { adminRoute, protectedRoute } from "@middlewares/authMiddleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').post(protectedRoute, adminRoute, createProduct);

router.route('/:id')
  .get(geProduct)
  .put(updateProduct, protectedRoute, adminRoute)
  .delete(deleteProduct, protectedRoute, adminRoute);


export default router;