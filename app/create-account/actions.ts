"use server";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const usernameCheck = (username: string) => username !== "May";

const confirmPasswordCheck = ({ password, confirmPassword }: { password: string; confirmPassword: string }) =>
  password === confirmPassword;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자열 형식의 값이여야 합니다.",
        required_error: "Username은 필수 값입니다.",
      })
      .min(3, "Username은 3글자 이상이여야 합니다.")
      .max(15, "Username은 3글자 이하이여야 합니다.")
      .trim()
      .transform((username) => `🥕${username}`)
      .refine(usernameCheck, "May는 사용할 수 없습니다.")
      .refine(checkUniqueUsername, "유저 이름이 이미 사용중입니다."),

    email: z
      .string()
      .email("이메일 형식이여야 합니다.")
      .toLowerCase()
      .refine(checkUniqueEmail, "이메일이 이미 사용중입니다."),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, `비밀번호는 ${PASSWORD_MIN_LENGTH}글자 이상이여야 합니다.`)
      .regex(
        PASSWORD_REGEX,
        "At least one uppercase letter, one lowercase letter, one number and one special character"
      ),
    confirmPassword: z
      .string()
      .min(PASSWORD_MIN_LENGTH, `비밀번호 확인은 ${PASSWORD_MIN_LENGTH}글자 이상이여야 합니다.`),
  })
  .refine(confirmPasswordCheck, { message: "비밀번호가 똑같지 않습니다.", path: ["confirmPassword"] });

export const createAccount = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);

    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    const cookie = await getIronSession(cookies(), {
      cookieName: "delicious-carrot",
      password: process.env.COOKIE_PASSWORD!,
    });
    //@ts-ignore
    cookie.id = user.id;
    await cookie.save();
    redirect("/profile");
  }
};
