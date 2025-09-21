async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }) {
  //   console.log("params", params);
  const { productId } = await params;
  return <div>ProductDetailsPage {productId}</div>;
}

export default ProductDetailsPage;
