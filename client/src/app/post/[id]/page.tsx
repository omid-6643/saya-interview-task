"use client";

import useSinglePost from "@/app/hooks/use-single-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SinglePost = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading } = useSinglePost(id);
  return (
    !isLoading && (
      <article className="flex flex-col items-start justify-between gap-8">
        <Badge variant="secondary" className="text-red-700 bg-blue-100">
          {data?.post.category}
        </Badge>
        <h2> {data?.post.title}</h2>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm capitalize text-gray-600/70">
            {" "}
            {data?.post.author}
          </p>
        </div>
        <Image
          src={"/images/image-1.jpg"}
          alt="image"
          width="250"
          height="300"
          className="rounded-lg bg-cover"
        />
        <p> {data?.post.content}</p>
      </article>
    )
  );
};

export default SinglePost;
