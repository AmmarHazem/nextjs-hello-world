export default async function ProductReviewsList({ params }: { params: Promise<{ productId: string }> }) {
  const paramsValue = await params;
  return <div>Reviews list for product {paramsValue.productId}</div>;
}
