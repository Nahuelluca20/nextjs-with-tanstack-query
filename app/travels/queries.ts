"use server";

import {v4 as uuidv4} from "uuid";
import {sql} from "@vercel/postgres";
import {createSafeActionClient} from "next-safe-action";
import {revalidatePath} from "next/cache";

import {deleteTravelSchema, postTravelSchema} from "@/schemas/form/post-travel";

export const action = createSafeActionClient();

export async function getTravels() {
  const {rows} = await sql`SELECT * FROM posts`;
  const reversed = rows.reverse();

  return reversed;
}

export const createTravel = action(postTravelSchema, async ({title, content}) => {
  let id = uuidv4();
  const newTravel = await sql`
    INSERT INTO posts (id, content, published, title) VALUES (${id}, ${content}, false, ${title})
  `;

  revalidatePath("/travels");

  if (!newTravel) return {error: "Could not create post"};
  if (newTravel[0]) return {success: "Post Created"};
});

export const deleteTravel = action(deleteTravelSchema, async ({id}) => {
  const deletedTravel = await sql`DELETE FROM posts WHERE id = ${id}`;

  revalidatePath("/travels");
  if (!deletedTravel) return {error: "Could not delete post"};
  if (deletedTravel[0]) return {success: "Post Deleted"};
});
