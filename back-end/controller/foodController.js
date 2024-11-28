import Food from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    Image: String,
    name: "food tarz",
    Price: 12000,
  });
  response.json({
    sucess: true,
    data: result,
  });
};
const getAllFood = async (request, response) => {
  const result = await Food.find();
  response.json({
    sucess: true,
    data: result,
  });
};
export { createFood, getAllFood };
