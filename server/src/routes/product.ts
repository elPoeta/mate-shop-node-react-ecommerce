import { geProducts } from "@controllers/productController";
import express, { Router } from "express";

const router: Router = express.Router();

router.route('/').get(geProducts);


export default router;