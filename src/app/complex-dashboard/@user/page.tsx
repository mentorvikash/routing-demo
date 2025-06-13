import React from "react";

async function Users() {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Users Page From Promise");
    }, 3000);
  });

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Users;
