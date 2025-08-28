import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

function generateRandomNumber(n: number): number {
  const num = Math.floor(Math.random() * n);
  return num;
}

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

  await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("product data fetched");
    }, 1000);
  });

  const random = generateRandomNumber(5);
  console.log({ random });
  if (random === 0) {
    throw new Error("Error from product page");
  }

  return (
    <div>
      <div>
        <h1>this is our detials page of product {productId}</h1>
      </div>
      <button className="p-2 border-1 border-amber-100 bg-black text-teal-100">
        <Link href={`${productId}/review`}>Product Review</Link>
      </button>
    </div>
  );
}

export default DetialPage;
