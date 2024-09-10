import express from "express";
import {
  createPost,
  deletePost,
  getSinglePost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts); // get all posts
router.get("/:id", getSinglePost); // get post with id
router.post("/", createPost); // create post
router.put("/:id", updatePost); // update post
router.delete("/:id", deletePost); // delete post

export default router;
