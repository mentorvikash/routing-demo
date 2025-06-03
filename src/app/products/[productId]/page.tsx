import React from "react";
import { notFound } from "next/navigation";

export async function generateMetadata<MetaData>({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return {
    title: "product " + productId,
    description: "Description about product " + productId,
  };
}

async function DetialPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  if (Number(productId) > 100) {
    notFound();
  }
  console.log("productId", productId);
  return (
    <div>
      <h1>this is our detials page of product {productId}</h1>
    </div>
  );
}

export default DetialPage;
