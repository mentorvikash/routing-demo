import { cusotomError } from "@/utils/generateError";
import Link from "next/link";
import React from "react";

async function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Review 1",
    },
    {
      id: 2,
      name: "Review 2",
    },
    {
      id: 3,
      name: "Review 3",
    },
    {
      id: 4,
      name: "Review 4",
    },
    {
      id: 5,
      name: "Review 5",
    },
    {
      id: 6,
      name: "Review 6",
    },
  ];

  await new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("product data fetched");
    }, 3000);
  });

  cusotomError("This error genereate form reveiew page");

  return (
    <div>
      <h1>All Reviews</h1>
      <ol>
        {reviews.map((review, index) => (
          <li key={index}>
            <Link href={`review/${review.id}`}>{review.name}</Link>
          </li>
        ))}
      </ol>
      <Link href={"/product"}>Products</Link>
    </div>
  );
}

export default Reviews;
