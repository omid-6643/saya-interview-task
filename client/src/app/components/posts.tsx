"use client";
import usePosts from "../hooks/use-posts";
import { Product } from "../types";
import PostCard from "./post-card";

const Posts = () => {
  const { data, isLoading } = usePosts();
  console.log(data);
  return (
    <div>
      {!isLoading &&
        data?.posts?.map((product: Product) => (
          <PostCard key={product._id} {...product} />
        ))}
    </div>
  );
};

export default Posts;
