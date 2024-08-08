"use server";
import { z } from "zod";

const usernameCheck = (username: string) => username !== "May";

const confirmPasswordCheck = ({ password, confirmPassword }: { password: string; confirmPassword: string }) =>
  password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "문자열 형식의 값이여야 합니다.",
        required_error: "Username은 필수 값입니다.",
      })
      .min(3, "Username은 3글자 이상이여야 합니다.")
      .max(15, "Username은 3글자 이하이여야 합니다.")
      .refine(usernameCheck, "May는 사용할 수 없습니다."),
    email: z.string().email("이메일 형식이여야 합니다."),
    password: z.string().min(10, "비밀번호는 10글자 이상이여야 합니다."),
    confirmPassword: z.string().min(10, "비밀번호 확인은 10글자 이상이여야 합니다."),
  })
  .refine(confirmPasswordCheck, { message: "비밀번호가 똑같지 않습니다.", path: ["confirmPassword"] });

export const handleForm = async (prevState: any, formData: FormData) => {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
};
