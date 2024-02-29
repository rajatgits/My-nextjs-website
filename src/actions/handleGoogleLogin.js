"use server";

import { signIn } from "@/lib/auth";

export const handleGoogleLogin = async () => {
  await signIn("google");
};
