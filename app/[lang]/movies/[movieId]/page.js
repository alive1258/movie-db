import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = ({ params: { movieId, lang } }) => {
  return (
    <>
      <div className="container">
        <MovieDetails movieId={movieId} lang={lang} />
      </div>
    </>
  );
};

export default MovieDetailsPage;
