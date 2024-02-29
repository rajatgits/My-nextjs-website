"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

export const NavLink = ({ link }) => {
  const pathName = usePathname();

  const { title, path } = link;
  return (
    <Link
      href={path}
      key={title}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};
