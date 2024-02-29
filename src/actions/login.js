"use server";

import { signIn } from "@/lib/auth";

export const login = async (previousState, formdata) => {
  const { email, password } = Object.fromEntries(formdata);
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw error;
  }
};
