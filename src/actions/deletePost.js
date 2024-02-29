"use server";

import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { revalidatePath } from "next/cache";

export const deletePost = async (formdata) => {
  const { id } = Object.fromEntries(formdata);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
