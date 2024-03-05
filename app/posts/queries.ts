"use server";

import {v4 as uuidv4} from "uuid";
import {sql} from "@vercel/postgres";
import {createSafeActionClient} from "next-safe-action";
import {revalidatePath} from "next/cache";

import {deletePostSchema, postSchema} from "@/schemas/form/post-travel";

export const action = createSafeActionClient();

export async function getPosts() {
  const {rows} = await sql`SELECT * FROM posts`;
  const reversed = rows.reverse();

  return reversed;
}

export const createPost = action(postSchema, async ({title, content}) => {
  let id = uuidv4();

  await sql`
    INSERT INTO posts (id, content, published, title) VALUES (${id}, ${content}, false, ${title})
  `;

  revalidatePath("/posts");
});

export const deletePost = action(deletePostSchema, async ({id}) => {
  await sql`DELETE FROM posts WHERE id = ${id}`;

  revalidatePath("/posts");
});
