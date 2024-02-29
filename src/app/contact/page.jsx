import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "This is the contact page of my website",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.jpg"
            alt="Contact image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
