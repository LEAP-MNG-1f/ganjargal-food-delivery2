import mongoose from "mongoose";
const categorySchame = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
export const Category = mongoose.model("Category", categorySchame);
