"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resovle) => setTimeout(resovle, 5000));
  console.log(prevState);
  console.log(formData.get("email"));
  return {
    errors: ["password is wrong", "password is too short"],
  };
};
