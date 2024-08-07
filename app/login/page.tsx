import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput required placeholder="Email" errors={[]} type="email" />
        <FormInput required placeholder="Password" errors={[]} type="password" />

        <FormBtn text="Log in" loading={false} />
      </form>
      <SocialLogin />
    </div>
  );
}
