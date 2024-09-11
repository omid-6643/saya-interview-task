"use client";

import useSinglePost from "@/app/hooks/use-single-posts";

const SinglePost = ({ params: { id } }: { params: { id: string } }) => {
  const {data} = useSinglePost(id)
  console.log(data);
  return <div>SinglePost</div>;
};

export default SinglePost;
