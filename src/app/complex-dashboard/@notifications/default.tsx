import Link from "next/link";
import { FC } from "react";

const NotificatinsDefault: FC = () => {
  return (
    <div>
      <div>NotificatinsDefault</div>
      <Link href={"/complex-dashboard/archived"}>Archived</Link>
    </div>
  );
};

export default NotificatinsDefault;
