// app/api/test-connection/route.js
import { connectDatabase } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDatabase();
    return NextResponse.json(
      { success: false, message: "Username Required. - /api/user/userName" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};
