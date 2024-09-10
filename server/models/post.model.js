import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);
