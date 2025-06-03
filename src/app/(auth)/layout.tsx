import React from "react";

function AuthLayout({ children }: { children: Readonly<React.ReactNode> }) {
  return <div>{children}</div>;
}

export default AuthLayout;
