"use server";

import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/models";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export const addUser = async (previousState, formdata) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formdata);

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log("Saved to database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
