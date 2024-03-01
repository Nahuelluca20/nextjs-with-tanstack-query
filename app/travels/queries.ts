"use server";

import {v4 as uuidv4} from "uuid";
import {sql} from "@vercel/postgres";
import {createSafeActionClient} from "next-safe-action";
import {revalidateTag} from "next/cache";

import {postTravelSchema} from "@/schemas/form/post-travel";

export const action = createSafeActionClient();

export async function getTravels() {
  const {rows} = await sql`SELECT * FROM posts`;

  return rows;
}

export const createTravel = action(postTravelSchema, async ({title, content}) => {
  let id = uuidv4();
  const newTravel = await sql`
    INSERT INTO posts (id, content, published, title) VALUES (${id}, ${content}, false, ${title})
  `;

  console.log(newTravel);

  revalidateTag("travels");
  if (!newTravel) return {error: "Could not create post"};
  if (newTravel[0]) return {success: "Post Created"};
});
