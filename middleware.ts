import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth(function middleware(req) {
  const token = req.nextauth.token;
  const path = req.nextUrl.pathname;
  if (path.startsWith("/dashboard") && token?.role != "ADMIN") {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = { matcher: ["/dashboard"] };
