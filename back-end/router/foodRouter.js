import express from "express";
import { createFood, getAllFood } from "../controller/foodController.js";

const foodRouter = express.Router();
foodRouter.get("/food", getAllFood);
foodRouter.post("/food", createFood);
export default foodRouter;
