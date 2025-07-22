import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const middlewareRoutingi18n = createMiddleware(routing);
  const locale = routing.defaultLocale;
  
  const isApiRoute = request.nextUrl.pathname.startsWith("/api");

  if (isApiRoute) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.includes("/build")) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/joke/setup/log-in`;
    return Response.json({
      message: "Redirecting to the login page for setup.",
      redirectUrl: url.pathname,
    });
  }

  const response = middlewareRoutingi18n(request);
  return response;
}

export const config = {
  matcher: ["/((?!_next|_vercel|.*\\..*).*)", "/api/jokes/mock/:path*"],
};
