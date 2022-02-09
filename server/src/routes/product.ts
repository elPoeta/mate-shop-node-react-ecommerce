import { createProduct, geProducts } from "@controllers/productController";
import { adminRoute, protectedRoute } from "@middlewares/authMiddleware";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').get(geProducts).post(protectedRoute, adminRoute, createProduct);


export default router;