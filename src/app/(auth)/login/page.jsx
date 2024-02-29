import LoginForm from "@/components/loginForm/LoginForm";
import styles from "./login.module.css";
import Image from "next/image";
import { handleGoogleLogin } from "@/actions/handleGoogleLogin";

export const metadata = {
  title: "Login page",
  description: "This is the login page of my website",
};

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Login</h3>
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
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
