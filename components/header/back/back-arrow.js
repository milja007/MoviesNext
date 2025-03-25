"use client";

import { useRouter } from "next/navigation";

const BackArrow = () => {
  const router = useRouter();
  return (
    <span className="leftArrow" onClick={() => router.back()}>
      &larr;
    </span>
  );
};

export default BackArrow;
