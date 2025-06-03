import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "blog",
};

function Blog() {
  return (
    <div className="m-3">
      <h1>Blogs</h1>
      <ol>
        <li>blog 1</li>
        <li>blog 2</li>
        <li>blog 3</li>
        <li>blog 4</li>
      </ol>
    </div>
  );
}

export default Blog;
