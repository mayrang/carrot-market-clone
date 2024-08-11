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

//메들웨어는 모든 request에 대해서 중간에 실행하므로 지연성에 매우 민감 그래서 실제 node runtime은 아니고 경향화된 edge runtime에서 실행
// 그래서 라이브러리는 그런거에 제약이 많음

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
