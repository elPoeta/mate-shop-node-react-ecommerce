import { createProduct, geProducts, updateProduct } from "@controllers/productController";
import { adminRoute, protectedRoute } from "@middlewares/authMiddleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').get(geProducts).post(protectedRoute, adminRoute, createProduct);

router.route('/:id').put(updateProduct, protectedRoute, adminRoute)


export default router;