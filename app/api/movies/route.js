import movies from "@/data/movieData.json";

export async function GET() {
  return Response.json(movies?.results);
}
