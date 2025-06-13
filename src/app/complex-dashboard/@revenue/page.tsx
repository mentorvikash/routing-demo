import React from "react";

const generateError = () => {
  throw new Error("Error from Revenue Page");
};

function Revenue() {
  // generateError();

  return (
    <div>
      <h1>Revenue Page</h1>
    </div>
  );
}

export default Revenue;
