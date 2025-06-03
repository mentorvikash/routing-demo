"use client";

import React from "react";
import { usePathname } from "next/navigation";

function Notfound() {
  const pathname = usePathname().split("/");
  console.log(pathname);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "red" }}>
        No product found for this id {pathname[2]}
      </h1>
    </div>
  );
}

export default Notfound;
