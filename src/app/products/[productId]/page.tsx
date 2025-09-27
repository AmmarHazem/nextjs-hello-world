import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata(parmas: Props): Promise<Metadata> {
  const params = await parmas.params;
  return {
    title: `Product ${params.productId}`,
  };
}

async function ProductDetailsPage({ params }: Props) {
  //   console.log("params", params);
  const { productId } = await params;
  if (productId === "2") {
    return notFound();
  }
  return <div>ProductDetailsPage {productId}</div>;
}

export default ProductDetailsPage;
