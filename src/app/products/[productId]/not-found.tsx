"use client";
import { usePathname } from "next/navigation";

export default function ProductNotFoundPage() {
  const pathName = usePathname();
  console.log("pathName", pathName);

  return <h1>Product not found</h1>;
}
