async function ReviewDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const random = Math.random();

  if (random >= 0.5) {
    throw new Error("error rendering review details");
  }

  const paramsValue = await params;
  return (
    <div>
      ReviewDetails {paramsValue.productId} {paramsValue.reviewId}
    </div>
  );
}

export default ReviewDetails;
