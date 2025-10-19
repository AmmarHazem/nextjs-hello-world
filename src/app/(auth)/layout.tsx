"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div style={{ padding: "1rem", backgroundColor: "green" }}>
      <ul>
        <li>
          <Link href={"/login"} style={{ color: pathname === "/login" ? "orange" : undefined }}>
            Login
          </Link>
        </li>
        <li>
          <Link href={"/register"} style={{ color: pathname === "/register" ? "orange" : undefined }}>
            Register
          </Link>
        </li>
        <li>
          <Link href={"/forgot-password"} style={{ color: pathname === "/forgot-password" ? "orange" : undefined }}>
            Forgot Password
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
