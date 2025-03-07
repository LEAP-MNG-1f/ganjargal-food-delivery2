import Food from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    image:
      "https://th.bing.com/th?id=OSK.HEROnB_K-xwbq-AdzjUZ7hDcnz29ye29vsa003km5IUZQLM&w=472&h=280&c=13&rs=2&o=6&pid=SANGAM",
    name: "zuush",
    ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    price: 5000,
    categoryId: "674e8bed4da559fc48f13d52",
  });
  response.json({
    sucess: true,
    data: result,
  });
};
const getAllFood = async (request, response) => {
  try {
    const groupedFood = await Food.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $group: {
          _id: "$category.name",
          items: { $push: "$$ROOT" },
        },
      },
    ]);

    if (!groupedFood || groupedFood.length === 0) {
      return response.status(404).json({
        success: false,
        message: "No food items found",
      });
    }

    return response.status(200).json({
      success: true,
      data: groupedFood,
    });
  } catch (error) {
    console.error("Error fetching food items:", error);
    return response.status(500).json({
      success: false,
      message: "Error fetching food items",
      error: error.message,
    });
  }
};

const getCategorizedFood = async (request, response) => {
  try {
    const { selectedCategory } = request.query;
    const result = await Food.find().populate("categoryId");

    const categorizedFoods = result.filter((food) => {
      return food?.categoryId.name === selectedCategory;
    });

    response.json({
      success: true,
      data: categorizedFoods,
    });
  } catch (error) {
    console.error("Error fetching categorized food:", error);
    response.status(500).json({
      success: false,
      message: "Error fetching categorized food",
      error: error.message,
    });
  }
};

export { createFood, getAllFood, getCategorizedFood };
