import express from "express";
import { createOrder, getAllOrder } from "../controller/order.contoller.js";

const orderRouter = express.Router();
orderRouter.get("/order", getAllOrder);
orderRouter.post("/order", createOrder);
export default orderRouter;
