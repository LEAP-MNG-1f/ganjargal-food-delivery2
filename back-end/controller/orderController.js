import Order from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: 300000,
    process: "pending",
    createDate: new Date(),
  });
  response.json({
    sucess: true,
    data: result,
  });
};
const getAllOrder = async (request, response) => {
  const result = await Order.find().populate("costumer");
  response.json({
    sucess: true,
    data: result,
  });
};
export { createOrder, getAllOrder };
