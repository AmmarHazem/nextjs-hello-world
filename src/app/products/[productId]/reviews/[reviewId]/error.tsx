"use client";
import { FC } from "react";

const ErrorBoundary: FC = (props: any) => {
  console.log("---- error boundary", props);
  return (
    <>
      <div>ErrorBoundary {props.error.message}</div>
      <button onClick={props.reset}>reset</button>
    </>
  );
};

export default ErrorBoundary;
