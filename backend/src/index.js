import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import connectDB from "./lib/mongodb.js";
import errorHandler from "./middleware/error-handler.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://assign-leaderboard-eight.vercel.app/",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

app.use("/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
