import React from "react";

const Register = async () => {
  await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("product data fetched");
    }, 3000);
  });
  return (
    <div>
      <h1>Register Page</h1>
    </div>
  );
};

export default Register;
