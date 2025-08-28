import React from "react";

function ProductLayout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <div>
      <h1>Product Nav Bar</h1>
      {children}
    </div>
  );
}

export default ProductLayout;
