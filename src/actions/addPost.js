"use server";

import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { revalidatePath } from "next/cache";

export const addPost = async (previousState, formdata) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formdata);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    console.log("Saved to database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
