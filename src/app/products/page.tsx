import Link from "next/link";
import { FC } from "react";

const ProductsListPage: FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link href={`/products/1`}>
        <h2>Product 1</h2>
      </Link>
      <Link href={`/products/2`}>
        <h2>Product 2</h2>
      </Link>
      <Link href={`/products/3`}>
        <h2>Product 3</h2>
      </Link>
    </div>
  );
};

export default ProductsListPage;
