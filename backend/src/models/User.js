import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  totalPoints: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("User", UserSchema);
