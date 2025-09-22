async function ReviewDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const paramsValue = await params;
  return (
    <div>
      ReviewDetails {paramsValue.productId} {paramsValue.reviewId}
    </div>
  );
}

export default ReviewDetails;
