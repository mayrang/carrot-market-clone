"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";

import React from "react";
import { useFormState } from "react-dom";
import { smsValidation } from "./actions";

const INITIAL_STATE = {
  token: false,
  errors: undefined,
};

export default function SMSLogin() {
  const [state, action] = useFormState(smsValidation, INITIAL_STATE);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl ">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            required
            placeholder="Verify"
            name="token"
            type="number"
            min={100000}
            max={999999}
            errors={state.errors?.formErrors}
          />
        ) : (
          <Input required placeholder="Phone number" name="phoneNumber" type="text" errors={state.errors?.formErrors} />
        )}

        <Button text={state.token ? "Verify Token" : "Send Validation SMS"} />
      </form>
    </div>
  );
}
