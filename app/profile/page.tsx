import { getSession } from "@/lib/sessions";
import db from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import React from "react";

export default async function Profile() {
  const user = await getUser();
  const onLogout = async () => {
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h2>Welcome! {user?.username}</h2>
      <form action={onLogout}>
        <button>Log out</button>
      </form>
    </div>
  );
}

async function getUser() {
  const sessiont = await getSession();
  if (sessiont.id) {
    const user = await db.user.findUnique({
      where: {
        id: sessiont.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
  return;
}
