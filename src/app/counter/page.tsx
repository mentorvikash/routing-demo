import Counter from "@/components/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "counter page",
};

function Index() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default Index;
