import { Post } from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getRandomPost = async (req, res) => {
  try {
    const [randomPost] = await Post.aggregate([{ $sample: { size: 1 } }]);

    if (!randomPost) {
      return res
        .status(404)
        .json({ success: false, message: "No posts found" });
    }

    res.status(200).json({ success: true, post: randomPost });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const IMAGES = ["image-2.jpg", "image-3.jpg", "image-4.jpg"];

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const avatar =
      PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const image = IMAGES[Math.floor(Math.random() * IMAGES.length)];
    const post = await Post.create({ ...req.body, image, avatar });
    res.status(200).json({ success: true, post });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndUpdate(id, req.body);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    const updatedPost = await Post.findById(id);
    res.status(200).json({ success: true, post: updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
