import { request, response } from "express";
import { Category } from "../model/category.js";

const createCategory = async (request, response) => {
  const result = await Category.create({
    name: "sale",
  });
  response.json({
    success: true,
    data: result,
  });
};
const getAllCategory = async (request, response) => {
  const result = await Category.find();
  response.json({
    success: true,
    data: result,
  });
};
const getOneCategory = async (request, response) => {
  const result = await Category.find();
  response.json({
    response,
  });
};
export { createCategory, getAllCategory };
