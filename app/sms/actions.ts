"use server";

import { redirect } from "next/navigation";
import validator from "validator";
import { typeToFlattenedError, z } from "zod";

const phoneNumberSchema = z
  .string()
  .trim()
  .refine((phoneNubmer) => validator.isMobilePhone(phoneNubmer, "ko-KR"));
const tokenScema = z.coerce.number().min(100000).max(999999);

interface PrevState {
  token: boolean;
}

export const smsValidation = (prevState: PrevState, formData: FormData) => {
  if (!prevState.token) {
    const result = phoneNumberSchema.safeParse(formData.get("phoneNumber"));
    if (!result.success) {
      return {
        token: false,
        errors: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenScema.safeParse(formData.get("token"));
    if (!result.success) {
      return {
        token: true,
        errors: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
};
