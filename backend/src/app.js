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

// Note Routes
import noteRoutes from "./routes/note.routes.js";

app.use("/api/v1/notes", noteRoutes);

export default app;
