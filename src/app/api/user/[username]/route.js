import User from "@/models/User";
import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDatabase();
    const username = request.nextUrl.pathname.split("/").pop();

    if (!username) {
      return NextResponse.json(
        { error: "Username query parameter is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ userName: username });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User found",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
};

// export const POST = async (request) => {
//   try {
//     const userData = await request.json();

//     if (!userData?.email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 });
//     }

//     const db = await connectDatabase();

//     const existingUser = await db
//       .collection("users")
//       .findOne({ email: userData.email });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: "User with this email already exists", data: existingUser },
//         { status: 409 }
//       );
//     }

//     const result = await db.collection("users").insertOne(userData);

//     return NextResponse.json(
//       {
//         message: `${userData.email || "User"} account successfully created.`,
//         data: result,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Database error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// };
