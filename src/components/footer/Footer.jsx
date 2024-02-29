import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Link
          href="https://www.linkedin.com/in/rajatlinks/"
          className={styles.social}
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            width={18}
            height={18}
          />
        </Link>

        <Link href="mailto:rajatrajemails@gmail.com" target="_blank">
          <Image src="/mail.png" alt="Mail icon" width={18} height={18} />
        </Link>

        <Link href="https://www.instagram.com/rajat.igs/" target="_blank">
          <Image
            src="/instagram.png"
            alt="Instagram icon"
            width={18}
            height={18}
          />
        </Link>
      </div>
      <p className={styles.copyright}>Rajat Raj &copy; All rights reserved.</p>
    </div>
  );
};
