"use client";

import React from "react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

export default function ErrorBroundry({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function retry() {
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  return (
    <div className="flex flex-col align-middle text-center text-red-600">
      <p>{error.message}</p>
      <button onClick={retry}>Try Again</button>
    </div>
  );
}
