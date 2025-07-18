import User from "../models/User.js";
import ClaimHistory from "../models/ClaimHistory.js";

export async function createUser(req, res) {
  const { name } = req.body;

  if (!name?.trim()) {
    return res.status(400).json({
      payload: null,
      message: "Name is required",
    });
  }

  const existingUser = await User.findOne({ name: name.trim() });
  if (existingUser) {
    return res.status(409).json({
      payload: null,
      message: "User already exists",
    });
  }

  const user = await User.create({ name: name.trim() });

  return res.status(201).json({
    payload: user,
    message: "User created successfully",
  });
}

export async function getUsers(req, res) {
  let { page = 1, limit = 10 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  const skip = (page - 1) * limit;
  const totalUsers = await User.countDocuments();
  const users = await User.find().skip(skip).limit(limit);

  return res.status(200).json({
    payload: {
      users,
      pagination: {
        page,
        limit,
        total: totalUsers,
        totalPages: Math.ceil(totalUsers / limit),
        hasNextPage: page < Math.ceil(totalUsers / limit),
        hasPreviousPage: page > 1,
      },
    },  
    message: "Users fetched successfully",
  });
}

export async function claimPoints(req, res) {
  const { userId } = req.query;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({
      payload: null,
      message: "User not found",
    });
  }

  const randomPoints = Math.floor(Math.random() * 10) + 1;
  user.totalPoints += randomPoints;

  await user.save();
  const history = await ClaimHistory.create({
    userId,
    points: randomPoints,
  });
  return res.status(200).json({
    payload: history,
    message: "Points claimed successfully",
  });
}

export async function getLeaderboard(req, res) {
  const users = await User.find().sort({ totalPoints: -1 });
  return res.status(200).json({
    payload: users,
    message: "Leaderboard fetched successfully",
  });
}

export async function getHistory(req, res) {
  const history = await ClaimHistory.find().sort({ createdAt: -1 });
  return res.status(200).json({
    payload: history,
    message: "History fetched successfully",
  });
}

export async function getUserPointHistory(req, res) {
  const { userId } = req.params;
  const history = await ClaimHistory.find({ userId }).sort({ createdAt: -1 });
  return res.status(200).json({
    payload: history,
    message: "History fetched successfully",
  });
}

export async function getUser(req, res) {
  const { userId } = req.params;
  console.log("userId ", userId);
  const user = await User.findById(userId);
  return res.status(200).json({
    payload: user,
    message: "User fetched successfully",
  });
}
