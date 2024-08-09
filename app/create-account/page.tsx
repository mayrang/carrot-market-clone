"use client";

import Input from "@/components/Input";
import SocialLogin from "@/components/social-login";

import React from "react";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";
import Button from "@/components/Button";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          minLength={3}
          maxLength={15}
          name="username"
          required
          placeholder="Username"
          type="text"
          errors={state?.fieldErrors.username}
        />
        <Input name="email" required placeholder="Email" type="email" errors={state?.fieldErrors.email} />
        <Input
          minLength={10}
          name="password"
          required
          placeholder="Password"
          type="password"
          errors={state?.fieldErrors.password}
        />
        <Input
          minLength={10}
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          type="password"
          errors={state?.fieldErrors.confirmPassword}
        />
        <Button text="Create acccount" />
      </form>
      <SocialLogin />
    </div>
  );
}
