"use client";

import styles from "./loginForm.module.css";
import Link from "next/link";
import { login } from "@/actions/login";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account ?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
