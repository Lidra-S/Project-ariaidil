import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(requast: NextRequest) {
  try {
    const body = await Request.json();
    const { imgSrc, fileKey, name, catagory, price } = body;

    await connectMongoDB();

    const data = await Product.create({
      imgSrc,
      fileKey,
      name,
      catagory,
      price,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
