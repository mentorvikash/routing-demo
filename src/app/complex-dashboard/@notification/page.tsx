import Link from "next/link";
import React from "react";

function Notification() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Notification Page</h1>
      <Link href="/complex-dashboard/archived">Archived Notification</Link>
    </div>
  );
}

export default Notification;
