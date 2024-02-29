import RegisterForm from "@/components/registerForm/RegisterForm";
import styles from "./register.module.css";
import Image from "next/image";
import { handleGoogleLogin } from "@/actions/handleGoogleLogin";

export const metadata = {
  title: "Register page",
  description: "This is the register page of my website",
};

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Register</h3>
        <div className={styles.socialLogin}>
          <form action={handleGoogleLogin} className={styles.google}>
            <button>
              <Image
                src="/google.png"
                alt="Google image"
                width={20}
                height={20}
              />
              Google
            </button>
          </form>
        </div>
        <hr />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
