import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/sessions";

interface Routes {
  [key: string]: boolean;
}

const publicUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}

//메들웨어는 모든 request에 대해서 중간에 실행하므로 지연성에 매우 민감 그래서 실제 node runtime은 아니고 경향화된 edge runtime에서 실행
// 그래서 라이브러리는 그런거에 제약이 많음

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
