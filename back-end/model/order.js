import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    enum: ["active", "processing", "waiting", "delivered"],
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: () => Date.now,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  custumer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});
const Order = mongoose.model("order", orderSchema);
export default Order;
