import "dotenv/config";
import { connectDB } from "./lib/db.js";
import express from "express";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
