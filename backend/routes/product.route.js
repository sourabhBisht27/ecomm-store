import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendedProducts,
  toggleFeaturedProducts,
} from "../controller/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
const router = Router();

router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/recommended", getRecommendedProducts);
router.post("/", protectRoute, adminRoute, createProduct);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProducts);
router.delete("/:id", protectRoute, adminRoute, deleteProduct);

export default router;
