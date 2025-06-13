// react component

import Link from "next/link";

export default function ArchivedNotificationPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div>ArchivedNotificationPage</div>
        <Link href="/complex-dashboard">Back to Notification</Link>
      </div>
    </>
  );
}
