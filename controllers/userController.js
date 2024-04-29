// controllers/userController.js
const User = require("../models/user");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ user });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
};

module.exports = {
  fetchAllUsers,
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
};
