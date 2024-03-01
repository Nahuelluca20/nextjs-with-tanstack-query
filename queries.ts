import {sql} from "@vercel/postgres";

export async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const result = await data.results;

  return result;
}

export async function getTravels() {
  const {rows} = await sql`SELECT * FROM posts`;

  return rows;
}
