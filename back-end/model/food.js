import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  Image: String,
  ingeredient: String,
  Price: Number,
});
const Food = mongoose.model("food", foodSchema);
export default Food;
