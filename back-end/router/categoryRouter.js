import express from "express";
import {
  createCategory,
  getAllCategory,
} from "../controller/categoryController.js";

const categoryRouter = express.Router();
categoryRouter.get("/category", getAllCategory);
categoryRouter.post("/category", createCategory);
export default categoryRouter;
