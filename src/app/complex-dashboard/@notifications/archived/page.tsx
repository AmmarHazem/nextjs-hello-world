import Link from "next/link";
import { FC } from "react";

const ArchivedNotificatins: FC = () => {
  return (
    <div>
      <div>ArchivedNotificatins</div>
      <Link href={"/complex-dashboard"}>Notifications</Link>
    </div>
  );
};

export default ArchivedNotificatins;
