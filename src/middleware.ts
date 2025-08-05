import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { SUPPORTED_LOCALES_STRING } from "@/utils/baseConstants";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  const protectedRoutes = [
    "/joke/build/workshop",
    "/joke/build/home",
    "/joke/setup/final",
  ];

  const isLocaleProtectedRoute = protectedRoutes.some((route) => {
    const localeProtectedPattern = new RegExp(
      `^\/[a-z]{2}(-[A-Z]{2})?${route.replace("/", "\\/")}$`
    );
    return localeProtectedPattern.test(pathname) || pathname.includes(route);
  });

  const isPrivateRoute =
    isLocaleProtectedRoute || protectedRoutes.includes(pathname);

  if (firstSegment && firstSegment.includes("-")) {
    const isValidLocale = SUPPORTED_LOCALES_STRING.includes(firstSegment);

    if (!isValidLocale) {
      const remainingPath = segments.slice(1).join("/");
      const redirectUrl = new URL(`/en-US/${remainingPath}`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }

  if (isPrivateRoute) {
    const supabaseResponse = await updateSession(request);
    const middlewareRoutingi18n = createMiddleware(routing);

    if (supabaseResponse.status === 307 || supabaseResponse.status === 308) {
      return supabaseResponse;
    }

    return middlewareRoutingi18n(request);
  }

  const middlewareRoutingi18n = createMiddleware(routing);
  return middlewareRoutingi18n(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
