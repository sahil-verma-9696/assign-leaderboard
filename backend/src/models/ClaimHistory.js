import mongoose from "mongoose";

const { Schema } = mongoose;

const ClaimHistorySchema = new Schema(
  {
    userId: mongoose.Schema.Types.ObjectId,
    points: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ClaimHistory", ClaimHistorySchema);
