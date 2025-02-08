import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Routes

// User Routes
import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/users", userRoutes);

export default app;
