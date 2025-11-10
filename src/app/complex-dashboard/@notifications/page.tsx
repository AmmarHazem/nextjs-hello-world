import Link from "next/link";
import { FC } from "react";

const Notificatins: FC = () => {
  return (
    <div>
      <div>Notificatins</div>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </div>
  );
};

export default Notificatins;
