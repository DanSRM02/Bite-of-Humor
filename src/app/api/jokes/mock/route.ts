import { mockJokes } from "@/utils/mockData";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    jokes: mockJokes,
    success: true,
    fallback: false,
    error: null,
    message: "Mock jokes fetched successfully",
  });
}


