"use client";

import useSinglePost from "@/app/hooks/use-single-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const SinglePost = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading } = useSinglePost(id);
  if (isLoading) {
    return;
  }
  return (
    <article className="flex flex-col items-start justify-between gap-4 pb-10">
      <Badge variant="secondary" className="text-red-700 bg-blue-100">
        {data?.post.category}
      </Badge>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold capitalize">
        {data?.post.title}
      </h2>
      <div className="flex flex-row gap-4 justify-between items-center">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-sm capitalize text-gray-600/70">
          {data?.post.author}
        </p>
      </div>
      <div className="w-full h-[50vh] relative">
        <Image
          src={"/images/image-1.jpg"}
          alt="image"
          fill
          className="rounded-lg bg-cover"
        />
      </div>
      <p className="text-xl text-gray-600">{data?.post.content}</p>
    </article>
  );
};

export default SinglePost;
