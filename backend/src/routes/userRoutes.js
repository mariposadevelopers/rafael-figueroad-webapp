import express from "express";
import { deleteUser, getAllUsers, postUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;



