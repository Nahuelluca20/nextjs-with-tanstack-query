"use server";

import {v4 as uuidv4} from "uuid";
import {sql} from "@vercel/postgres";

export async function getTravels() {
  const {rows} = await sql`SELECT * FROM posts`;

  return rows;
}

// export async function createTravel({title, content}: {title: string; content: string}) {
//   let id = uuidv4();

//   const schema = z.object({
//     title: z.string().nonempty(),
//     content: z.string().nonempty(),
//   });

//   const data = schema.parse({
//     title: formData.get("title"),
//     content: formData.get("content"),
//   });

//   const {rows} = await sql`
//     INSERT INTO posts (id, content, published, title) VALUES (${id}, ${content}, false, ${title})
//   `;

//   return rows;
// }
