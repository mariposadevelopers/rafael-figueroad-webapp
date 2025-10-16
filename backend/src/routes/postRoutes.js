import express from "express";
import { getAllPosts, getPostById, postPost } from "../controllers/postController.js";
import {authRequired} from "../middlewares/validateToken.js"

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", authRequired, postPost);

export default router;