import { mockJokes } from "@/utils/mockData";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  
  console.log(request.headers);
  

  return NextResponse.json({
    jokes: mockJokes,
    success: true,
    fallback: false,
    error: null,
    message: "Mock jokes fetched a successfully without locale",
  });
}


