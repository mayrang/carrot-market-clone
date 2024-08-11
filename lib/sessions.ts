import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface CookieContent {
  id?: number;
}

// 사파리 브라우저는 secure 설정 필요함
export function getSession() {
  return getIronSession<CookieContent>(cookies(), {
    cookieName: "delicious-carrot",
    password: process.env.COOKIE_PASSWORD!,
    cookieOptions: {
      secure: false,
    },
  });
}
