import { Router } from "express";
import {
  claimPoints,
  createUser,
  getHistory,
  getLeaderboard,
  getUser,
  getUserPointHistory,
  getUsers,
} from "../controllers/index.js";
import { asyncHandler } from "../utility/async-handler.js";

const router = Router();

router.get("/users", asyncHandler(getUsers));
router.get("/users/:userId", asyncHandler(getUser));

router.get("/leaderboard", asyncHandler(getLeaderboard));

router.get("/history", asyncHandler(getHistory));
router.get("/history/:userId", asyncHandler(getUserPointHistory));

router.post("/users", asyncHandler(createUser));
router.post("/claim", asyncHandler(claimPoints));

export default router;
