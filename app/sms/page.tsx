import FormBtn from "@/components/Button";
import FormInput from "@/components/Input";
import SocialLogin from "@/components/social-login";

import React from "react";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput required placeholder="Phone number" errors={[]} type="number" />
        <FormInput required placeholder="Verify" errors={[]} type="number" />

        <FormBtn text="Verify" />
      </form>
    </div>
  );
}
