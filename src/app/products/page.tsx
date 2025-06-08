import Link from "next/link";
import React from "react";

async function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
    {
      id: 4,
      name: "Product 4",
    },
    {
      id: 5,
      name: "Product 5",
    },
    {
      id: 6,
      name: "Product 6",
    },
  ];

  await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("product data fetched");
    }, 3000);
  });

  return (
    <div>
      <h1>All Products</h1>
      <ol>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
        <li>
          <Link href={`/products/${100}`} replace>
            Product 100
          </Link>
        </li>
      </ol>
      <Link href={"/"}>Home</Link>
    </div>
  );
}

export default Products;
