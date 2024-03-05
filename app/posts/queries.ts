"use server";

import {v4 as uuidv4} from "uuid";
import {sql} from "@vercel/postgres";
import {revalidatePath} from "next/cache";

import {deletePostSchema, postSchema} from "@/schemas/form/post-travel";
import {action} from "@/lib/safe-action";

export async function getPosts() {
  const {rows} = await sql`SELECT * FROM posts`;
  const reversed = rows.reverse();

  return reversed;
}

export const createPost = action(postSchema, async ({title, content}) => {
  let id = uuidv4();
  const newPost = await sql`
    INSERT INTO posts (id, content, published, title) VALUES (${id}, ${content}, false, ${title})
  `;

  revalidatePath("/posts");

  if (!newPost) return {error: "Could not create post"};
  if (newPost) return {success: "Post Created"};
});

export const deletePost = action(deletePostSchema, async ({id}) => {
  const deletedPost = await sql`DELETE FROM posts WHERE id = ${id}`;

  revalidatePath("/posts");
  if (!deletedPost) return {error: "Could not delete post"};
  if (deletedPost) return {success: "Post Deleted"};
});
