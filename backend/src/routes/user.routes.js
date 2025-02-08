import { Router } from "express";

import { createUser, getAllUsers } from "../controllers/user.controller.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);

userRoutes.post("/create", createUser);

export default userRoutes;
