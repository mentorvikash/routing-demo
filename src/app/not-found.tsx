import React from "react";

function Notfound() {
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
      <h1 style={{ color: "red" }}>Page not found</h1>
      <h2>This page can not be render</h2>
    </div>
  );
}

export default Notfound;
