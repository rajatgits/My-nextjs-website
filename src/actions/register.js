"use server";

import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/models";
import bcrypt from "bcryptjs";

export const register = async (previousState, formdata) => {
  const { username, email, password, confirm_password } =
    Object.fromEntries(formdata);

  if (password !== confirm_password) {
    return "Password does't match";
  }

  try {
    connectToDb();
    const user = await User.findOne({ email });
    const name = await User.findOne({ username });

    if (user) {
      console.log("Error already register");
      return { error: "Email already in use" };
    }

    if (name) {
      console.log("Username already in use");
      return { error: "Username is not available" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    console.log("Saved to database");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
