import {sql} from "@vercel/postgres";

export async function getTravels() {
  const {rows} = await sql`SELECT * FROM posts`;

  return rows;
}
