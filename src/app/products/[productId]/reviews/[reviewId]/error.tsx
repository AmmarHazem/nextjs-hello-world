"use client";
import { useRouter } from "next/navigation";
import { FC, startTransition } from "react";

const ErrorBoundary: FC<{ error: Error; reset: () => void }> = (props) => {
  console.log("---- error boundary", props);
  const router = useRouter();

  const handleReset = () => {
    startTransition(() => {
      router.refresh();
      props.reset();
    });
  };

  return (
    <>
      <div>ErrorBoundary {props.error.message}</div>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default ErrorBoundary;
