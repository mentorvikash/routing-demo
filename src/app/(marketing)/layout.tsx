import React from "react";

function MarketingLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div>
      <header
        style={{
          textAlign: "center",
          background: "gray",
          color: "white",
        }}
      >
        <h1>Header Part</h1>
      </header>
      {children}
      <footer
        style={{
          position: "absolute",
          bottom: 0,
          textAlign: "center",
          background: "gray",
          color: "white",
          width: "100vw",
        }}
      >
        <h1>Footer Part</h1>
      </footer>
    </div>
  );
}

export default MarketingLayout;
