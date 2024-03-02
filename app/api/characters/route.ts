export async function GET() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const result = await data.results;

  return Response.json(result);
}
