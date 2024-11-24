import express from "express";

import { getProducts,postProduct,deleteProduct,putProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/",postProduct);

router.get("/",getProducts)

router.delete("/:id/",deleteProduct);

router.put("/:id",putProduct);


export default router;