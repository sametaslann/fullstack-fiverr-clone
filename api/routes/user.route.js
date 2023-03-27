import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();


//burda sikinti var
router.delete("/:id", verifyToken, deleteUser);

export default router;
