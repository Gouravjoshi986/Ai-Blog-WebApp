import client from "../../../prisma/ClientIndex";
import React from "react";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "../../types";
import Sidebar from "@/app/(shared)/Sidebar";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

const getPost = async (id: string) => {
  const post: PostType | null = await client.post.findUnique({
    where: { id },
  });

  if (!post) {
    console.log(`Post with id ${id} not found`);
    return null;
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

const Post = async ({ params }: Props) => {
  const { id } = params;
  const post: FormattedPost | null = await getPost(id);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="px-10 leading-7">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {/* <Content post={post} /> */}content component from ai
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default Post;