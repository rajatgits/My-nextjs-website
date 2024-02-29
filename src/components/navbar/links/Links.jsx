"use client";

import { useState } from "react";
import styles from "./links.module.css";
import { NavLink } from "./navLink/NavLink";
import Image from "next/image";
import { logout } from "@/actions/logout";

export const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink link={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={logout}>
              {" "}
              <button className={styles.logout}>
                Logout{" "}
                <Image
                  src="/logout.png"
                  alt="Logout image"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </>
        ) : (
          <NavLink link={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        ME
        <br />
        NU
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <NavLink link={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={logout}>
                {" "}
                <button className={styles.logout}>
                  Logout{" "}
                  <Image
                    src="/logout.png"
                    alt="Logout image"
                    width={20}
                    height={20}
                  />
                </button>
              </form>
            </>
          ) : (
            <NavLink link={{ title: "Login", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};
