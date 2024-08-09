"use server";

import validator from "validator";
import { z } from "zod";

const phoneNumberSchema = z.string().trim().refine(validator.isMobilePhone);
const tokenScema = z.coerce.number().min(100000).max(999999);

export const smsValidation = (prevState: any, formData: FormData) => {
  const token = formData.get("token");
};
