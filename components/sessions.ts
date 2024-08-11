import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface CookieContent {
  id?: number;
}

export function getSession() {
  return getIronSession<CookieContent>(cookies(), {
    cookieName: "delicious-carrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}
