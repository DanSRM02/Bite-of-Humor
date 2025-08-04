import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest, NextResponse } from "next/server";
import { SUPPORTED_LOCALES_STRING } from "@/utils/baseConstants";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment.includes('-')) {
    const isValidLocale = SUPPORTED_LOCALES_STRING.includes(firstSegment);
    
    if (!isValidLocale) {
      const remainingPath = segments.slice(1).join('/');
      const redirectUrl = new URL(`/en-US/${remainingPath}`, request.url);
      return NextResponse.redirect(redirectUrl);
    }
  }  

  const middlewareRoutingi18n = createMiddleware(routing);
  return middlewareRoutingi18n(request);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|api|.*\\..*).*)"
  ],
};
