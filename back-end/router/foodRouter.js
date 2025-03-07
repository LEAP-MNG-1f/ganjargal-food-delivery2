import express from "express";
import {
  createFood,
  getAllFood,
  getCategorizedFood,
} from "../controller/foodController.js";

const foodRouter = express.Router();
foodRouter.get("/food", getAllFood);
foodRouter.get("/categored", getCategorizedFood);
foodRouter.post("/food", createFood);
export default foodRouter;
