import { NextRequest, NextResponse } from "next/server";

export default async function Middleware(
  request: NextRequest,
  response: NextResponse
) {
  const token = request.cookies.get("auth_token")?.value;

  const signInUrl = new URL("login", request.url);
  const homeUrl = new URL("/", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInUrl);
  }

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(homeUrl);
  }
}

export const config = {
  matcher: ["/", "/login"],
};
