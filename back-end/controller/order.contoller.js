import Order from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: 300000,
    process: "active",
    createDate: new Date(),
    customer: "67494700e18df7d905b2577b",
    foodIds: ["674999b937c3aeeed8015376"],
    khoroo: "3-р хороо",
    apartment: "Нархан хотхон",
    phoneNumber: 99118082,
  });
  response.json({
    sucess: true,
    data: result,
  });
};
const getAllOrder = async (request, response) => {
  const result = await Order.find().populate("customer").populate("foodIds");
  response.json({
    sucess: true,
    data: result,
  });
};
export { createOrder, getAllOrder };
