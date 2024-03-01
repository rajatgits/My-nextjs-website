import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          A creative company that develops and runs social media marketing
          strategies and campaigns for clients.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href="/about">Learn More</Link>
          </button>
          <button className={styles.button}>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
