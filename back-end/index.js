import express from "express";
import cors from "cors";

import mongoose from "mongoose";

import { v2 as cloudinary } from "cloudinary";
import useRouter from "./router/useRouter.js";
import foodRouter from "./router/foodRouter.js";
import orderRouter from "./router/orderRouter.js";
import categoryRouter from "./router/categoryRouter.js";
mongoose.connect(
  "mongodb+srv://aicode744:12345678dd@cluster0.hux8m.mongodb.net/fooddelivery"
);
const server = express();
const PORT = 8000;

// Cloudinary Configuration
// cloudinary.config({
//   cloud_name: "da3akgx4g",
//   api_key: "481238236715133",
//   api_secret: "_cUM15UuXVOLSU1aLP_8DUBunhM",
// });

server.use(cors());
server.use("/api", foodRouter);
server.use("/api", useRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);
server.listen(PORT, () => {
  console.log(`server ajillaj ehelle http://localhost:${PORT}`);
});
