import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  // throw new Error("this error is at review layout level");

  return (
    <>
      <h1>Ye review ka layout hai</h1>
      {children}
    </>
  );
}
