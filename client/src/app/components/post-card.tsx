import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";

const PostCard = ({ author, category, title, _id }: Product) => {
  return (
    <Link href={`/post/${_id}`}>
      <div className="flex flex-col justify-center items-start w-fit rounded-2xl gap-6 border border-solid border-gray-200 p-4">
        <Image
          src={"/images/image-1.jpg"}
          alt="image"
          width="250"
          height="300"
          className="rounded-lg bg-cover"
        />

        <Badge variant="secondary" className="text-red-700 bg-blue-100">
          {category}
        </Badge>
        <p className="font-bold text-3xl">{title}</p>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm capitalize text-gray-600/70">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
