import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, catagory, price } = body;

    await connectMongoDB();

    const data = await Product.findByIdAndUpdate(id, {
      name,
      catagory,
      price,
    });

    return NextResponse.json({ msg: "Update Successfully", data });
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
