import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("hello");
  const pathname = request.nextUrl.pathname;
  if (pathname === "/") {
    const response = NextResponse.next();
    response.cookies.set("middleware", "hello");
    return response;
  }
  if (pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
