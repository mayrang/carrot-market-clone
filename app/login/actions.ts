"use server";
import bcrypt from "bcrypt";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import { getSession } from "@/components/sessions";
import { redirect } from "next/navigation";

const checkUserEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(checkUserEmail, "존재하지 않는 이메일입니다."),
  password: z
    .string()
    .regex(
      PASSWORD_REGEX,
      "비밀번호는 대문자와 소문자, 숫자, 특수문자를 포함하여야 합니다."
    )
    .min(PASSWORD_MIN_LENGTH),
});

export const login = async (prevState: any, formData: FormData) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });

    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          email: [],
          password: ["잘못된 비밀번호를 입력하셨습니다."],
        },
      };
    }
  }
};
