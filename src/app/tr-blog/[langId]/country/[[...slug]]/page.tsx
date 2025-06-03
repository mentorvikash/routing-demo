import React from "react";

async function CatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  console.log("slug", slug);

  if (Array.isArray(slug) && slug.length === 1) {
    return <h1>this is our {slug[0]} and all content</h1>;
  }

  if (Array.isArray(slug) && slug.length === 2) {
    return (
      <h1>
        state is {slug[0]} and city is {slug[1]} all content
      </h1>
    );
  }

  if (Array.isArray(slug) && slug.length === 3) {
    return (
      <h1>
        state is {slug[0]} and city is {slug[1]} all place is {slug[2]}
      </h1>
    );
  }

  return (
    <div>
      <h1>this is our catch all route</h1>
    </div>
  );
}

export default CatchAll;
