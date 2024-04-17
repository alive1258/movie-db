import movies from "@/data/movieData.json";

export async function GET(_request, { params }) {
  const movieId = params?.id;

  const movie = movies?.results?.find((movie) => movie.id === movieId);

  if (!movie) {
    return new Response("Movie not found", { status: 404 });
  }

  return Response.json(movie);
}

export async function PATCH(request, { params }) {
  const movie = await request.json();
  const { id } = params;

  const movieIndex = movies?.results?.findIndex((movie) => movie?.id === id);

  if (movieIndex === -1) {
    return new Response("Movie not found", { status: 404 });
  }

  // Update the specified field with the new value
  movies.results[movieIndex].title = movie.title;

  return Response.json(movies.results[movieIndex]);
}

export async function DELETE(_request, { params }) {
  const movieId = params.id;

  const movieIndex = movies?.results?.findIndex(
    (movie) => movie.id === movieId
  );

  if (movieIndex === -1) {
    return new Response("Movie not found", { status: 404 });
  }

  const movieToDelete = movies.results[movieIndex];
  movies.results.splice(movieIndex, 1);

  return Response.json(movieToDelete);
}
