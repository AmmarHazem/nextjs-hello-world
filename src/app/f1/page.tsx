import Link from "next/link";
import { FC } from "react";

const F1Page: FC = () => {
  return (
    <div>
      <p>F1Page</p>
      <Link href={"/f1/f2"}>F2</Link>
    </div>
  );
};

export default F1Page;
