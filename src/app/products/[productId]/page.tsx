import { notFound } from "next/navigation";

async function ProductDetailsPage({ params }: { params: Promise<{ productId: string }> }) {
  //   console.log("params", params);
  const { productId } = await params;
  if (productId === "2") {
    return notFound();
  }
  return <div>ProductDetailsPage {productId}</div>;
}

export default ProductDetailsPage;
