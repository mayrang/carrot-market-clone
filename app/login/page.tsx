"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogin from "@/components/social-login";

import React, { useActionState } from "react";
import { login } from "./actions";
import { useFormState } from "react-dom";

/* 
useFormState(action, initialState, permalink?)
컴포넌트 최상위 레벨에서 useFormState를 호출하여 폼 액션이 실행될 때 업데이트되는 컴포넌트 state를 생성합니다.

useFormState는 두 개의 값이 담긴 배열을 반환합니다.
- state: 첫 번째 렌더링에서는 initialState와 일치합니다. 액션이 실행된 이후에는 액션에서 반환된 값과 일치합니다.
-formAction: form 컴포넌트의 action prop에 전달하거나 폼 내부 button 컴포넌트의 formAction prop에 전달할 수 있는 새로운 액션입니다.

*** 주의 사항 ***
useFormState에 전달한 함수는 첫 번째 인수로 이전 혹은 초기 state를 추가로 받습니다.


**/

// 이거 지금 useActionState는 리액트 19버전에서만 되고 18버전에서는 안되는 이슈가 있나봄 이상하네 얘네

export default function Login() {
  const [state, action] = useFormState(login, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium ">
        <h1 className="text-2xl ">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input name={"email"} required placeholder="Email" errors={state?.fieldErrors.email} type="email" />
        <Input
          name="password"
          required
          placeholder="Password"
          errors={state?.fieldErrors.password ?? []}
          type="password"
        />

        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
