import User from "@/models/User";
import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDatabase();
  try {
    const users = await User.find({});

    if (!users.length) {
      return NextResponse.json(
        { message: "No records found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `${users.length} records found`, data: users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  await connectDatabase();
  try {
    const path = new URL(request.url).searchParams.get("path");
    console.log(path);

    const userData = await request.json();

    if (!userData?.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (path === "signup") {
      const existingUser = await User.findOne({ email: userData.email });

      if (existingUser) {
        return NextResponse.json(
          {
            message: "User with this email already exists",
            data: existingUser,
          },
          { status: 409 }
        );
      }

      const result = await User.insertOne(userData);
      return NextResponse.json(
        {
          message: `${userData.email || "User"} account successfully created.`,
          data: result,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Operation not performed (path is not 'signup')",
        data: userData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
