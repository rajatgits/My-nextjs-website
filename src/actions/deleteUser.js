"use server";

import { connectToDb } from "@/lib/connectToDb";
import { Post, User } from "@/lib/models";
import { revalidatePath } from "next/cache";

export const deleteUser = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });

    await User.findByIdAndDelete(id);
    console.log("Deleted from database");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
