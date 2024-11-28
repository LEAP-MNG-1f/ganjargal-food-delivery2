import User from "../model/user.js";
const createUser = async (request, response) => {
  const result = await User.create({
    name: "ganjargal",
    email: "otgoo@gmail,com",
    password: "8",
    phoneNumber: 99999999,
  });
  response.json({
    sucess: true,
    data: result,
  });
};
const getAllUser = async (request, response) => {
  const result = await User.find();
  response.json({
    sucess: true,
    data: result,
  });
};
export { createUser, getAllUser };
