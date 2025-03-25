"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const HeaderLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
};

export default HeaderLink;
