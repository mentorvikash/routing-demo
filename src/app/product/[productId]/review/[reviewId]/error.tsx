"use client";

import React from "react";

export default function ErrorHandler({ error }: { error: Error }) {
  return <div style={{ color: "red" }}>{error.message}</div>;
}
