import { NextResponse } from "next/server";
import client from "../../../../prisma/ClientIndex";

type Params = { params: { id: string } };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title, content } = await request.json();
    const post = await client.post.update({
      where: { id: id },
      data: { title, content },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}