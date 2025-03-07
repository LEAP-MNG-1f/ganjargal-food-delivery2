import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    enum: ["active", "process", "waiting", "delivered"],
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: () => Date.now,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: {
      values: ["card", "cash"],
    },
  },

  district: {
    type: String,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
});
const Order = mongoose.model("order", orderSchema);
export default Order;
