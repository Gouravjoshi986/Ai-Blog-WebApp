import { NextResponse,NextRequest } from "next/server";
import {  OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.SECRET_OPENAI_API_KEY,
});

export async function POST(request:NextRequest) {
  try {
    const { title, role } = await request.json();

    const aiResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Create 3 line blog post with html tags based on this title:${title} `,
            
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags.`,
            
          },
        ],
      });

    // response.revalidate("/api/posts")
    return NextResponse.json(
      {
        data: aiResponse.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
