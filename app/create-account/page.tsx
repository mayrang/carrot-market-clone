"use client";
import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

import React from "react";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function CreateAccount() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="username" required placeholder="Username" type="text" errors={state?.fieldErrors.username} />
        <FormInput name="email" required placeholder="Email" type="email" errors={state?.fieldErrors.email} />
        <FormInput
          name="password"
          required
          placeholder="Password"
          type="password"
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          type="password"
          errors={state?.fieldErrors.confirmPassword}
        />
        <FormBtn text="Create acccount" />
      </form>
      <SocialLogin />
    </div>
  );
}
