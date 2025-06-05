"use client";

import Link from "next/link";
import React, { use } from "react";

export default function SingleArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>This is my article id {articleId}</h1>
      <h1>this is our language {lang}</h1>
      <div>
        <h1>Our links</h1>
        <Link href="1?lang=en">English</Link>
        <Link href="2?lang=fr">France</Link>
        <Link href="3?lang=hin">Hindi</Link>
      </div>
    </div>
  );
}
