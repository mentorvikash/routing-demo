"use client";

export default function ErrorBoundry({ error }: { error: Error }) {
  return <div className="text-lg text-red-600">{error.message}</div>;
}
