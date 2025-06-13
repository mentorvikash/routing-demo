import Card from "@/components/Card";
import React from "react";

interface ComplexDashboardLayout {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}

export default function ComplexDashboardLayout({
  children,
  user,
  revenue,
  notification,
}: ComplexDashboardLayout) {
  return (
    <div className="p-6 space-y-6">
      <div>{children}</div>
      <div className="grid grid-cols-3 gap-4">
        <Card>{user}</Card>
        <Card>{revenue}</Card>
        <Card>{notification}</Card>
      </div>
    </div>
  );
}
