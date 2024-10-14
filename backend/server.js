import 'dotenv/config';
import { connectDB } from "./lib/db.js";
import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 4000;
// console.log(process.env);

app.use("/api/auth", authRoutes);
connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

// MqrdglDgOyRtPnBB
