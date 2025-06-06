"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();
  const isOrderSuccess = false;
  const handleOrder = () => {
    isOrderSuccess
      ? router.replace("/products")
      : redirect("/order-products/failed");
  };
  return (
    <div>
      <h1>Order page</h1>
      <button onClick={handleOrder}>Place Order</button>
      <button onClick={() => router.back()}>back</button>
      <button onClick={() => router.forward()}>Forward</button>
    </div>
  );
}
