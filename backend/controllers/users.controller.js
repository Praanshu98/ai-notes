import bcrypt from "bcrypt";

import User from "../models/user.model.js";
import isValidEmail from "../utils/checkIfEmail.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);

    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (user.password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    if (!isValidEmail(user.email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.SALT_ROUNDS),
    );
    console.log(user);

    const users = await User.create(user);

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { createUser, getAllUsers };
