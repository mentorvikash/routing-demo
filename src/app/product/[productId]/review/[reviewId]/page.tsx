import { cusotomError } from "@/utils/generateError";

interface ReviewProps {
  params: Promise<{ reviewId: string; productId: string }>; // Add other review properties here
}

async function ReviewPage({ params }: ReviewProps) {
  const { productId, reviewId } = await params;

  cusotomError("This error genereate form review ID page");
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Review Details</h1>
      <div className="bg-white text-black shadow rounded-lg p-6">
        <p>
          {" "}
          Product Id: {productId} and Review ID: {reviewId}
        </p>
      </div>
    </div>
  );
}

export default ReviewPage;
