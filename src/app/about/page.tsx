import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "About | This is our about page",
  },
  description: "this is about page description",
};

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
