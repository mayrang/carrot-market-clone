import React from "react";

interface FormBtnProps {
  text: string;
  loading: boolean;
}

export default function FormBtn({ text, loading }: FormBtnProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed"
    >
      {loading ? "로딩 중" : text}
    </button>
  );
}
