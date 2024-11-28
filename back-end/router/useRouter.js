import express from "express";
import { createUser, getAllUser } from "../controller/userContollor.js";
const useRouter = express.Router();
useRouter.get("/user", getAllUser);
useRouter.post("/user", createUser);
export default useRouter;
