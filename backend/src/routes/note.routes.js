import { Router } from "express";

import {
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/note.controller.js";

const noteRoutes = Router();

noteRoutes.post("/create", createNote);
noteRoutes.delete("/delete", deleteNote);
noteRoutes.put("/update", updateNote);

export default noteRoutes;
