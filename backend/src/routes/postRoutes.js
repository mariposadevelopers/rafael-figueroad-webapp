import express from "express";
import { getAllPosts, getPostById, postPost } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", postPost);

export default router;