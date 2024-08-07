import Image from "next/image";
import Link from "next/link";

// group-focus-within : group에 어떤 자식중 하나라도 포커스 되어있을 때 적용되는

export default function Home() {
  return (
    <div className="flex flex-col p-6 items-center justify-between min-h-screen">
      <div className="my-auto flex flex-col items-center *:font-medium gap-2">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link className="primary-btn py-2.5 text-lg" href="/create-account">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
