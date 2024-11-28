import mongoose from "mongoose";
const roleEnum = {
  values: ["admin", "User"],
};
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "User",
  },
});
const User = mongoose.model("User", userSchema);
export default User;
